import { ArrowUpRight } from "lucide-react";
import { buttonStyles } from "./ui/Button";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-72px)] overflow-hidden bg-ink lg:min-h-[calc(100svh-84px)]"
      aria-labelledby="hero-heading"
    >
      <img
        src="/images/hero-freight.jpg"
        srcSet="/images/hero-freight-1200.jpg 1200w, /images/hero-freight.jpg 2200w"
        sizes="100vw"
        alt="Грузовой поезд с цистернами на железной дороге"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] saturate-[0.8]"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,14,25,0.94)_0%,rgba(9,14,25,0.78)_34%,rgba(9,14,25,0.34)_68%,rgba(9,14,25,0.48)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/20 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative flex w-full flex-col justify-end pb-10 pt-32 sm:pb-14 lg:pb-16">
        <div className="max-w-[1060px]">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
              <span className="h-px w-8 bg-signal" aria-hidden="true" />
              Грузовой подвижной состав{" "}
              <span className="hidden sm:inline">· сеть 1520</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-7 text-balance text-[clamp(2.45rem,6vw,5.2rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-white sm:mt-8"
            >
              <span className="mb-3 block text-[0.32em] font-medium uppercase tracking-[0.2em] text-white/55">
                ООО «РТК» —
              </span>{" "}
              Аренда и оперирование грузовым подвижным составом
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10">
              <a
                href="#contacts"
                className={buttonStyles(
                  "white",
                  "lg",
                  "group min-w-[165px] border-transparent",
                )}
              >
                Связаться
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                Санкт-Петербург · 1520
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <span>01 / 04</span>
          <span>Аренда и техническое сопровождение</span>
        </div>
      </Container>
    </section>
  );
}
