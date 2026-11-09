import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const services = [
  {
    number: "01",
    title: "Фитинговые платформы",
    description:
      "Долгосрочная аренда под крупнотоннажные контейнеры. Организация техсодержания.",
    image: "/images/service-platforms.jpg",
    imageSmall: "/images/service-platforms-700.jpg",
    alt: "Фитинговая платформа с крупнотоннажными контейнерами",
  },
  {
    number: "02",
    title: "Цистерны для жидкого пека",
    description:
      "Специализированный транспорт для перевозки каменноугольного пека с температурным режимом.",
    image: "/images/service-tanks.jpg",
    imageSmall: "/images/service-tanks-700.jpg",
    alt: "Специализированная цистерна для перевозки жидкого пека",
  },
];

export function Services() {
  return (
    <section
      id="fleet"
      className="scroll-mt-24 border-b border-line bg-white py-16 sm:py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              <span className="h-px w-8 bg-signal" aria-hidden="true" />
              Подвижной состав
            </div>
            <h2
              id="services-heading"
              className="mt-5 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-ink"
            >
              Парк и услуги
            </h2>
          </div>
          <span className="hidden pb-1 font-mono text-[10px] tracking-[0.18em] text-slate-400 sm:block">
            02 / 04
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <img
                    src={service.image}
                    srcSet={`${service.imageSmall} 700w, ${service.image} 1400w`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.88] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.18em] text-white/65 sm:left-6 sm:top-6">
                    {service.number} / 02
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="max-w-[440px] text-[clamp(1.55rem,2.6vw,2.15rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col border-x border-b border-line bg-white p-5 sm:p-6">
                  <p className="max-w-[480px] text-[14px] leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <a
                    href="#contacts"
                    className="mt-7 inline-flex items-center gap-2 self-start text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-signal"
                  >
                    Обсудить проект
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
