"use client";

import { useState } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import SmsFirewallCase from "./sms-firewall-case";
import WalletAndPaymentCase from "./wallet-and-payment-case";
import CrmPanelCase from "./crm-panel-case";
import RocketCrashCase from "./rocket-crash-case";
import ThemeToggle from "./theme-toggle";
import CaseBackButton from "./case-back-button";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "500",
});

type View =
  | "about"
  | "cases"
  | "sms-firewall"
  | "wallet-and-payment"
  | "crm-panel"
  | "rocket-crash";

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
      "Редизайн enterprise-платформы для телеком-операторов: навигация, сценарии работы с правилами, обработка ошибок и новый визуальный редактор.",
    image: "/cases/previews/sms-firewall.png",
  },
  {
    number: "02",
    title: "Wallet and Payment",
    slug: "wallet-and-payment" as const,
    description:
      "Мобильный платежный сценарий: кошелек, балансы, депозит, вывод средств, история операций и подключение Web3 Wallet.",
    image: "/cases/previews/wallet-and-payment.png",
  },
  {
    number: "03",
    title: "CRM Panel",
    slug: "crm-panel" as const,
    description:
      "Админ-панель для управления пользователями, финансовыми операциями, заявками на вывод средств и внутренними рабочими процессами.",
    image: "/cases/previews/crm-panel.png",
  },
  {
    number: "04",
    title: "Rocket Crash",
    slug: "rocket-crash" as const,
    description:
      "Мобильная crash-игра с игровым сценарием, ставками, депозитами, выводом средств, личным кабинетом и партнерской программой.",
    image: "/cases/previews/rocket-crash.png",
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
  title,
  description,
  image,
  animationDelay,
  onClick,
}: {
  title: string;
  description: string;
  image: string;
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
      className={isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"}
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
  return (
    <nav className="site-nav" aria-label="Main">
      <NavButton
        label="about"
        isActive={view === "about"}
        onClick={() => onNavigate("about")}
      />
      <span className="site-nav__separator">/</span>
      <NavButton
        label="cases"
        isActive={view === "cases"}
        onClick={() => onNavigate("cases")}
      />
    </nav>
  );
}

function SiteHeader({
  view,
  onNavigate,
}: {
  view: View;
  onNavigate: (view: View) => void;
}) {
  const isCaseDetail =
    view === "sms-firewall" ||
    view === "wallet-and-payment" ||
    view === "crm-panel" ||
    view === "rocket-crash";

  return (
    <header className="site-header pt-10">
      <div className="site-header__inner">
        {!isCaseDetail ? (
          <SiteNav view={view} onNavigate={onNavigate} />
        ) : null}
      </div>
    </header>
  );
}

export default function HomePage() {
  const [view, setView] = useState<View>("about");
  const isCaseDetail =
    view === "sms-firewall" ||
    view === "wallet-and-payment" ||
    view === "crm-panel" ||
    view === "rocket-crash";

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <ThemeToggle />
      {isCaseDetail ? (
        <CaseBackButton onClick={() => setView("cases")} />
      ) : null}
      <SiteHeader view={view} onNavigate={setView} />

      <main className="flex flex-1 flex-col">
        <div key={view} className="page-content">
          {view === "about" ? (
            <>
              <section className="profile-section flex flex-col items-center px-6 text-center">
                <div className="profile-avatar-ring mb-5 flex size-[116px] items-center justify-center rounded-full border p-2">
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

                <p className="profile-tagline mt-2 max-w-sm text-sm leading-relaxed sm:text-[15px]">
                  product designer / enterprise ux / design systems
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-button rounded-full px-5 py-2 text-sm"
                  >
                    CV
                  </a>
                  <a
                    href="https://t.me/blamesvdeszx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-button rounded-full px-5 py-2 text-sm"
                  >
                    Telegram
                  </a>
                  <a
                    href="mailto:blamesv187@gmail.com"
                    className="profile-button rounded-full px-5 py-2 text-sm"
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
                        : caseItem.slug === "wallet-and-payment"
                          ? () => setView("wallet-and-payment")
                          : caseItem.slug === "crm-panel"
                            ? () => setView("crm-panel")
                            : caseItem.slug === "rocket-crash"
                              ? () => setView("rocket-crash")
                              : undefined
                    }
                  />
                ))}
              </div>
            </section>
          ) : view === "sms-firewall" ? (
            <SmsFirewallCase />
          ) : view === "wallet-and-payment" ? (
            <WalletAndPaymentCase />
          ) : view === "crm-panel" ? (
            <CrmPanelCase />
          ) : (
            <RocketCrashCase />
          )}
        </div>
      </main>

      <footer className="site-footer mt-auto pb-10 text-center text-sm">
        blamesvdeszx.design
      </footer>
    </div>
  );
}
