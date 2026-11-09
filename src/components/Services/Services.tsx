import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import "./Services.css";

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
      className="services"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="services__header">
          <div className="services__label-group">
            <div className="services__label">
              <span className="services__label-line" aria-hidden="true" />
              Подвижной состав
            </div>
            <h2
              id="services-heading"
              className="services__heading"
            >
              Парк и услуги
            </h2>
          </div>
          <span className="services__step">
            02 / 04
          </span>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              className="services__card"
            >
              <article className="group flex h-full flex-col">
                <div className="services__image-wrapper">
                  <img
                    src={service.image}
                    srcSet={`${service.imageSmall} 700w, ${service.image} 1400w`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt={service.alt}
                    loading="lazy"
                    className="services__image"
                  />
                  <div
                    className="services__image-overlay"
                    aria-hidden="true"
                  />
                  <span className="services__image-number">
                    {service.number} / 02
                  </span>
                  <div className="services__image-title">
                    <h3 className="services__image-title-text">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="services__content">
                  <p className="services__description">
                    {service.description}
                  </p>
                  <a
                    href="#contacts"
                    className="services__link"
                  >
                    Обсудить проект
                    <ArrowUpRight
                      className="services__link-icon"
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
