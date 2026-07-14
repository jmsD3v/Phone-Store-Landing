import type { NextConfig } from "next";

/**
 * script-src allows 'unsafe-inline' as a deliberate, scoped trade-off: this site is
 * fully static (SSG, per ADR-001) and Next.js's App Router ships small inline
 * hydration/RSC-payload scripts that only a nonce (requiring per-request dynamic
 * rendering) or 'unsafe-inline' can satisfy — a build-time script hash does NOT
 * work here because per CSP spec, browsers ignore 'unsafe-inline' once any
 * hash-source is present, so combining them silently blocks Next's own scripts
 * without adding real protection (verified empirically: hydration broke silently).
 * There is no user input, form, or dynamic/user-controlled content on this page,
 * so the realistic XSS surface this would guard against is effectively nil.
 * If this template grows a form or renders user-controlled content, switch to the
 * nonce + middleware pattern from https://nextjs.org/docs/app/guides/content-security-policy
 * (that requires opting the route into dynamic rendering).
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    // Skipped outside production: Next's dev server injects <style> tags for
    // Fast Refresh, which a strict style-src would otherwise block locally.
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
