import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import "./Hero.css";

export function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-heading"
    >
      <img
        src="/images/hero-freight.jpg"
        srcSet="/images/hero-freight-1200.jpg 1200w, /images/hero-freight.jpg 2200w"
        sizes="100vw"
        alt="Грузовой поезд с цистернами на железной дороге"
        fetchPriority="high"
        className="hero__background"
      />
      <div
        className="hero__overlay-gradient"
        aria-hidden="true"
      />
      <div
        className="hero__overlay-fade"
        aria-hidden="true"
      />

      <Container className="hero__content">
        <div className="hero__main">
          <Reveal>
            <div className="hero__badge">
              <span className="hero__badge-line" aria-hidden="true" />
              Грузовой подвижной состав{" "}
              <span className="hero__badge-text">· сеть 1520</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="hero__heading"
            >
              <span className="hero__heading-label">
                ООО «РТК» —
              </span>{" "}
              Аренда и оперирование грузовым подвижным составом
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="hero__cta-group">
              <a
                href="#contacts"
                className="btn btn--white btn--lg hero__cta-button"
              >
                Связаться
                <ArrowUpRight
                  className="hero__cta-icon"
                  aria-hidden="true"
                />
              </a>
              <span className="hero__location">
                Санкт-Петербург · 1520
              </span>
            </div>
          </Reveal>
        </div>

        <div className="hero__footer">
          <span>01 / 04</span>
          <span>Аренда и техническое сопровождение</span>
        </div>
      </Container>
    </section>
  );
}
