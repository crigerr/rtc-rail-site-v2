import { Check, Mail, PhoneCall } from "lucide-react";
import { company } from "../../data/company";
import { Container } from "../ui/Container";
import { QuoteForm } from "../QuoteForm";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./QuoteSection.css";

const benefits = [
  "Подтвердим доступность подвижного состава",
  "Проверим станции и маршрут по сети 1520",
  "Зафиксируем условия в коммерческом предложении",
];

export function QuoteSection() {
  return (
    <section
      id="quote"
      className="quote"
      aria-labelledby="quote-heading"
    >
      <div
        className="quote__grid-bg technical-grid"
        aria-hidden="true"
      />
      <Container className="quote__container">
        <div className="quote__header">
          <Reveal>
            <SectionLabel>Экспресс-запрос</SectionLabel>
            <h2
              id="quote-heading"
              className="quote__heading"
            >
              Расчёт ставки
              <span className="quote__heading-accent">за 2 часа</span>
            </h2>
            <p className="quote__description">
              Укажите тип подвижного состава и маршрут. Подготовим расчёт
              доступности и стоимости аренды без лишней переписки.
            </p>

            <ul className="quote__benefits">
              {benefits.map((benefit) => (
                <li key={benefit} className="quote__benefit">
                  <span className="quote__benefit-icon" aria-hidden="true">
                    <Check className="h-3 w-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="quote__contacts">
              <p className="quote__contacts-label">
                Связаться с коммерческим отделом
              </p>
              <a
                href={company.phoneHref}
                className="quote__phone"
              >
                <PhoneCall className="quote__phone-icon" aria-hidden="true" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="quote__email"
              >
                <Mail className="quote__email-icon" aria-hidden="true" />
                {company.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="quote__form-wrapper">
            <div className="quote__form-card">
              <div className="quote__form-header">
                <p className="quote__form-label">
                  Запрос доступности
                </p>
                <h3 className="quote__form-title">
                  Сообщите параметры маршрута
                </h3>
                <p className="quote__form-subtitle">
                  Поля со звёздочкой обязательны для расчёта.
                </p>
              </div>
              <div className="quote__form-body">
                <QuoteForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
