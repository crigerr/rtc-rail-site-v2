import { ArrowUpRight, PhoneCall } from "lucide-react";
import { company, navItems } from "../../data/company";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import "./Header.css";

export function Header() {
  return (
    <header id="top" className="header">
      <Container className="header__inner">
        <div className="header__brand">
          <Logo />
          <span className="header__divider" aria-hidden="true" />
          <span className="header__tagline">Региональная транспортная компания</span>
        </div>

        <nav className="header__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="header__nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            href={company.phoneHref}
            className="header__phone-link"
          >
            <PhoneCall className="header__phone-icon" aria-hidden="true" />
            <span className="header__phone-number">{company.phone}</span>
          </a>
          <a
            href="#contacts"
            className="header__contact-link"
          >
            Связаться
            <ArrowUpRight className="header__contact-icon" aria-hidden="true" />
          </a>
          <a
            href={company.phoneHref}
            aria-label={`Позвонить ${company.phone}`}
            className="header__mobile-phone"
          >
            <PhoneCall className="header__mobile-phone-icon" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </header>
  );
}
