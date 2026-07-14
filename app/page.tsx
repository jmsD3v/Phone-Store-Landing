import Image from "next/image";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { buildWhatsAppUrl, getLocalBusinessJsonLd, siteConfig } from "@/lib/site-config";

const WHATSAPP_URL = buildWhatsAppUrl();

// aspect-[1920/1132] below must match this file's actual aspect ratio so object-cover never crops it.
const HERO_IMAGE = {
  src: "/images/hero/iphone-hero.jpg",
  alt: "iPhone 17 Pro, el último modelo disponible en Phone Store, sobre fondo oscuro",
};

interface PhoneModel {
  id: string;
  name: string;
  specs: string;
  price: string;
  image: string;
}

const PHONE_MODELS: PhoneModel[] = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    specs: "256 GB · Naranja · Garantía oficial",
    price: "$1.850.000",
    image: "/images/products/iphone-17-pro.jpg",
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    specs: "128 GB · Negro · Garantía oficial",
    price: "$1.350.000",
    image: "/images/products/iphone-16.jpg",
  },
  {
    id: "samsung-s25",
    name: "Samsung Galaxy S25",
    specs: "256 GB · Violeta · Snapdragon 8 Elite",
    price: "$1.150.000",
    image: "/images/products/samsung-s25.jpg",
  },
  {
    id: "xiaomi-15t",
    name: "Xiaomi 15T",
    specs: "256 GB · Titanio · Leica Camera",
    price: "$820.000",
    image: "/images/products/xiaomi-15t.jpg",
  },
];

interface Accessory {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const ACCESSORIES: Accessory[] = [
  {
    id: "funda-magsafe",
    name: "Funda MagSafe",
    description: "Compatible con iPhone 14/15 · Varios colores",
    price: "$25.000",
    image: "/images/accessories/funda-magsafe.jpg",
  },
  {
    id: "cargador-20w",
    name: "Cargador 20W USB-C",
    description: "Carga rápida · Incluye cable",
    price: "$18.000",
    image: "/images/accessories/cargador-20w.jpg",
  },
  {
    id: "auriculares-bt",
    name: "Auriculares Bluetooth",
    description: "Cancelación de ruido · Estuche de carga",
    price: "$45.000",
    image: "/images/accessories/auriculares-bt.jpg",
  },
  {
    id: "vidrio-templado",
    name: "Vidrio templado",
    description: "Protección anti-golpes · Instalación incluida",
    price: "$8.000",
    image: "/images/accessories/vidrio-templado.jpg",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
      />
      <main>
        <HeroSection />
        <CatalogSection />
        <AccessoriesSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden bg-black">
      <div className="relative mx-auto aspect-[1920/1132] w-full max-w-5xl">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </div>
      <div className="px-6 pb-24 pt-8 text-center sm:pb-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 text-lg text-gray-400 sm:text-xl">
            iPhone, Samsung, Xiaomi — precios claros, atención directa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-cta"
              className="inline-block rounded-full bg-[#0071E3] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#0077ED] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Consultá por WhatsApp
            </a>
            <a
              href="#catalogo"
              data-testid="hero-scroll-link"
              className="text-base font-medium text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Ver modelos ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ model }: { model: PhoneModel }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={model.image}
          alt={`${model.name} — ${model.specs}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <h3 className="font-semibold text-[#1D1D1F]">{model.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{model.specs}</p>
      <p className="mt-3 text-xl font-bold text-[#1D1D1F]">{model.price}</p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`card-whatsapp-cta-${model.id}`}
        className="mt-4 inline-block rounded-full border border-[#0071E3] px-4 py-2 text-center text-sm font-medium text-[#0071E3] transition-colors hover:bg-[#0071E3] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2"
      >
        Consultá
      </a>
    </article>
  );
}

function CatalogSection() {
  return (
    <section id="catalogo" className="bg-[#F5F5F7] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-[#1D1D1F] sm:text-4xl">
          Modelos disponibles
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHONE_MODELS.map((model) => (
            <li key={model.id}>
              <PhoneCard model={model} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AccessoryCard({ accessory }: { accessory: Accessory }) {
  return (
    <article className="flex flex-col rounded-2xl bg-[#F5F5F7] p-5">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={accessory.image}
          alt={`${accessory.name} — ${accessory.description}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <h3 className="font-semibold text-[#1D1D1F]">{accessory.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{accessory.description}</p>
      <p className="mt-3 text-xl font-bold text-[#1D1D1F]">{accessory.price}</p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`accessory-whatsapp-cta-${accessory.id}`}
        className="mt-4 inline-block rounded-full border border-[#0071E3] px-4 py-2 text-center text-sm font-medium text-[#0071E3] transition-colors hover:bg-[#0071E3] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2"
      >
        Consultá
      </a>
    </article>
  );
}

function AccessoriesSection() {
  return (
    <section id="accesorios" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-[#1D1D1F] sm:text-4xl">
          Accesorios
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ACCESSORIES.map((accessory) => (
            <li key={accessory.id}>
              <AccessoryCard accessory={accessory} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1D1D1F] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <address className="not-italic text-sm text-gray-400">
          {siteConfig.address.street}, {siteConfig.address.locality}, {siteConfig.address.region}, Argentina
        </address>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer-whatsapp-link"
          className="text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1D1F]"
        >
          {siteConfig.whatsapp.displayNumber}
        </a>
      </div>
    </footer>
  );
}
