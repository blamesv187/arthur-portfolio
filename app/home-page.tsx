"use client";

import { useState } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import SmsFirewallCase from "./sms-firewall-case";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "500",
});

type View = "about" | "cases" | "sms-firewall";

const topRowImages = [
  "/works/work-01.png",
  "/works/work-02.png",
  "/works/work-03.png",
  "/works/work-04.png",
  "/works/work-05.png",
  "/works/work-06.png",
  "/works/work-07.png",
  "/works/work-08.png",
];

const bottomRowImages = [
  "/works/work-09.png",
  "/works/work-10.png",
  "/works/work-11.png",
  "/works/work-12.png",
  "/works/work-13.png",
  "/works/work-14.png",
  "/works/work-15.png",
  "/works/work-16.png",
];

const cases = [
  {
    number: "01",
    title: "SMS Firewall",
    slug: "sms-firewall" as const,
    description:
      "Enterprise platform for telecom operators. I redesigned core workflows around rule management, errors, navigation, and a new visual editor.",
    image: "/works/work-06.png",
  },
  {
    number: "02",
    title: "AdTarget",
    description:
      "B2B advertising platform for campaign management, targeting, analytics, and internal operator workflows.",
    image: "/works/work-14.png",
  },
  {
    number: "03",
    title: "B2C / Wallet and Payments",
    description:
      "Mobile wallet experience for payments, balances, deposits, and transaction flows across consumer-facing financial products.",
    image: "/works/work-10.png",
  },
  {
    number: "04",
    title: "Admin Dashboard",
    description:
      "Internal dashboard for managing users, monitoring activity, reviewing system states, and supporting daily operator workflows.",
    image: "/works/work-12.png",
  },
];

function PreviewCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="marquee-card">
      <img src={src} alt={alt} className="marquee-card__image" />
    </div>
  );
}

function MarqueeRow({
  direction,
  images,
}: {
  direction: "left" | "right";
  images: string[];
}) {
  const duplicated = [...images, ...images];

  return (
    <div className="marquee-row">
      <div className={`marquee-track marquee-track-${direction}`}>
        {duplicated.map((src, i) => {
          const workId = src.replace("/works/work-", "").replace(".png", "");
          const alt = `Portfolio preview ${workId}`;

          return <PreviewCard key={`${src}-${i}`} src={src} alt={alt} />;
        })}
      </div>
    </div>
  );
}

function CaseCard({
  number,
  title,
  description,
  image,
  animationDelay,
  onClick,
}: (typeof cases)[number] & {
  animationDelay?: number;
  onClick?: () => void;
}) {
  const className = onClick ? "case-card case-card--clickable" : "case-card";

  return (
    <article
      className={className}
      style={
        animationDelay !== undefined
          ? { animationDelay: `${animationDelay}ms` }
          : undefined
      }
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="case-card__content">
        <p className="case-card__number">{number}</p>
        <h2 className={`case-card__title ${unbounded.className}`}>{title}</h2>
        <p className="case-card__description">{description}</p>
      </div>
      <div className="case-card__preview">
        <img src={image} alt={`${title} preview`} className="case-card__image" />
      </div>
    </article>
  );
}

function NavButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? "cursor-pointer border-0 bg-transparent p-0 font-medium text-[#1d1d1f]"
          : "cursor-pointer border-0 bg-transparent p-0 text-[#86868b] transition-colors hover:text-[#1d1d1f]"
      }
    >
      {label}
    </button>
  );
}

function SiteNav({
  view,
  onNavigate,
}: {
  view: View;
  onNavigate: (view: View) => void;
}) {
  if (view === "sms-firewall") {
    return (
      <nav
        className="case-detail__breadcrumbs flex items-center justify-start gap-3 text-sm tracking-wide"
        aria-label="Main"
      >
        <NavButton
          label="about"
          isActive={false}
          onClick={() => onNavigate("about")}
        />
        <span className="text-[#d2d2d7]">/</span>
        <NavButton
          label="cases"
          isActive={false}
          onClick={() => onNavigate("cases")}
        />
        <span className="text-[#d2d2d7]">/</span>
        <span className="font-medium text-[#1d1d1f]">sms firewall</span>
      </nav>
    );
  }

  return (
    <nav
      className="flex items-center justify-center gap-3 text-sm tracking-wide"
      aria-label="Main"
    >
      <NavButton
        label="about"
        isActive={view === "about"}
        onClick={() => onNavigate("about")}
      />
      <span className="text-[#d2d2d7]">/</span>
      <NavButton
        label="cases"
        isActive={view === "cases"}
        onClick={() => onNavigate("cases")}
      />
    </nav>
  );
}

export default function HomePage() {
  const [view, setView] = useState<View>("about");

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1d1d1f]">
      <header className="pt-10">
        {view === "sms-firewall" ? (
          <div className="case-detail__nav-wrap">
            <SiteNav view={view} onNavigate={setView} />
          </div>
        ) : (
          <SiteNav view={view} onNavigate={setView} />
        )}
      </header>

      <main className="flex flex-1 flex-col">
        <div key={view} className="page-content">
          {view === "about" ? (
            <>
              <section className="profile-section flex flex-col items-center px-6 text-center">
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

              <section className="marquee-section pb-12" aria-hidden="true">
                <div className="marquee-viewport">
                  <div className="marquee-rows">
                    <MarqueeRow direction="right" images={topRowImages} />
                    <MarqueeRow direction="left" images={bottomRowImages} />
                  </div>
                </div>
              </section>
            </>
          ) : view === "cases" ? (
            <section className="cases-section">
              <div className="cases-list">
                {cases.map((caseItem, index) => (
                  <CaseCard
                    key={caseItem.number}
                    {...caseItem}
                    animationDelay={index * 70}
                    onClick={
                      caseItem.slug === "sms-firewall"
                        ? () => setView("sms-firewall")
                        : undefined
                    }
                  />
                ))}
              </div>
            </section>
          ) : (
            <SmsFirewallCase />
          )}
        </div>
      </main>

      <footer className="mt-auto pb-10 text-center text-sm text-[#86868b]">
        blamesvdeszx.design
      </footer>
    </div>
  );
}
