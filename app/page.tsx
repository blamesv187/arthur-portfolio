import Image from "next/image";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "500",
});

const CARDS_PER_ROW = 12;

const images = [
  "/works/work-01.png",
  "/works/work-02.png",
  "/works/work-03.png",
  "/works/work-04.png",
  "/works/work-05.png",
  "/works/work-06.png",
  "/works/work-07.png",
  "/works/work-08.png",
  "/works/work-09.png",
  "/works/work-10.png",
];

function PreviewCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="marquee-card">
      <img src={src} alt={alt} className="marquee-card__image" />
    </div>
  );
}

function MarqueeRow({ direction }: { direction: "left" | "right" }) {
  const cards = Array.from({ length: CARDS_PER_ROW }, (_, i) => i);
  const duplicated = [...cards, ...cards];

  return (
    <div className="marquee-row">
      <div className={`marquee-track marquee-track-${direction}`}>
        {duplicated.map((index, i) => {
          const src = images[index % images.length];
          const alt = `Portfolio preview ${String(index + 1).padStart(2, "0")}`;

          return <PreviewCard key={`${index}-${i}`} src={src} alt={alt} />;
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1d1d1f]">
      <header className="pt-10 pb-6">
        <nav
          className="flex items-center justify-center gap-3 text-sm tracking-wide"
          aria-label="Main"
        >
          <span className="font-medium text-[#1d1d1f]">about</span>
          <span className="text-[#d2d2d7]">/</span>
          <span className="text-[#86868b]">cases</span>
        </nav>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-center px-6 pt-4 pb-0 text-center">
          <div className="mb-5 flex size-[116px] items-center justify-center rounded-full border border-[#e8e8ed] p-2">
            <Image
              src="/avatar.jpg"
              alt="Arthur Gunther"
              width={100}
              height={100}
              className="rounded-full object-cover"
              priority
            />
          </div>

          <h1
            className={`${unbounded.className} text-2xl tracking-[-0.02em] sm:text-[28px]`}
          >
            Arthur Gunther
          </h1>

          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#86868b] sm:text-[15px]">
            product designer / enterprise ux / design systems
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#e8e8ed] bg-white px-5 py-2 text-sm text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]"
            >
              CV
            </a>
            <a
              href="https://t.me/blamesvdeszx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#e8e8ed] bg-white px-5 py-2 text-sm text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]"
            >
              Telegram
            </a>
            <a
              href="mailto:blamesv187@gmail.com"
              className="rounded-full border border-[#e8e8ed] bg-white px-5 py-2 text-sm text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]"
            >
              Mail
            </a>
          </div>
        </section>

        <section className="marquee-section mt-12 pb-12" aria-hidden="true">
          <div className="marquee-viewport">
            <div className="marquee-rows">
              <MarqueeRow direction="right" />
              <MarqueeRow direction="left" />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto pb-10 text-center text-sm text-[#86868b]">
        blamesvdeszx.design
      </footer>
    </div>
  );
}
