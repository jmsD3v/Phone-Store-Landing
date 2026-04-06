import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const WHATSAPP_URL =
  "https://wa.me/5491100000000?text=Hola%2C%20me%20interesa%20consultar%20sobre%20un%20celular";

interface PhoneModel {
  id: string;
  name: string;
  specs: string;
  price: string;
}

const PHONE_MODELS: PhoneModel[] = [
  {
    id: "iphone-15",
    name: "iPhone 15",
    specs: "128 GB · Negro · Garantía oficial",
    price: "$1.200.000",
  },
  {
    id: "samsung-s24",
    name: "Samsung Galaxy S24",
    specs: "256 GB · Violeta · Snapdragon 8 Gen 3",
    price: "$950.000",
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    specs: "128 GB · Azul · Garantía oficial",
    price: "$980.000",
  },
  {
    id: "xiaomi-14t",
    name: "Xiaomi 14T",
    specs: "256 GB · Titanio · Leica Camera",
    price: "$720.000",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <CatalogSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1D1D1F] sm:text-5xl md:text-6xl">
          Los mejores celulares en Las Breñas
        </h1>
        <p className="mt-5 text-lg text-gray-500 sm:text-xl">
          iPhone, Samsung, Xiaomi — precios claros, atención directa.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-cta"
            className="inline-block rounded-full bg-[#0071E3] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#0077ED] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2"
          >
            Consultá por WhatsApp
          </a>
          <a
            href="#catalogo"
            data-testid="hero-scroll-link"
            className="text-base font-medium text-[#0071E3] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2"
          >
            Ver modelos ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ model }: { model: PhoneModel }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 aspect-square w-full rounded-xl bg-gray-100" />
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
    <section
      id="catalogo"
      className="px-6 py-20"
      style={{ backgroundColor: "#F5F5F7" }}
    >
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

function Footer() {
  return (
    <footer
      className="px-6 py-10"
      style={{ backgroundColor: "#1D1D1F" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <address className="not-italic text-sm text-gray-400">
          Mac Lean 1756, Las Breñas, Chaco, Argentina
        </address>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer-whatsapp-link"
          className="text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1D1F]"
        >
          +54 911 000-0000
        </a>
      </div>
    </footer>
  );
}
