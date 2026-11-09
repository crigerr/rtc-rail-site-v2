import { ArrowUpRight, PhoneCall } from "lucide-react";
import { company, navItems } from "../data/company";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 h-[72px] border-b border-line/80 bg-white/95 backdrop-blur-xl lg:h-[84px]"
    >
      <Container className="flex h-full items-center justify-between gap-8">
        <div className="flex min-w-0 items-center gap-4">
          <Logo />
          <span
            className="hidden h-8 w-px shrink-0 bg-line xl:block"
            aria-hidden="true"
          />
          <span className="hidden max-w-[190px] text-[9px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-slate-400 xl:block">
            Региональная транспортная компания
          </span>
        </div>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 text-[13px] font-semibold tracking-tight text-ink transition-colors hover:text-signal md:inline-flex"
          >
            <PhoneCall className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
            <span className="tabular-nums">{company.phone}</span>
          </a>
          <a
            href="#contacts"
            className="hidden h-10 items-center gap-2 border border-ink/15 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white sm:inline-flex"
          >
            Связаться
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href={company.phoneHref}
            aria-label={`Позвонить ${company.phone}`}
            className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white sm:hidden"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </header>
  );
}
