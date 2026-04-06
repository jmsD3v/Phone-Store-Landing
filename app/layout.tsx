import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celulares en Las Breñas, Chaco | Phone Store",
  description: "Comprá tu celular en Las Breñas, Chaco. iPhone, Samsung y más. Consultá disponibilidad y precios por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
