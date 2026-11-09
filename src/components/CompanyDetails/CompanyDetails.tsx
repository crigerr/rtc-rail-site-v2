import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { company } from "../../data/company";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import "./CompanyDetails.css";

const details = [
  {
    label: "Полное наименование",
    value: company.fullName,
    wide: true,
  },
  { label: "ИНН", value: company.inn },
  { label: "ОГРН", value: company.ogrn },
  { label: "КПП", value: company.kpp },
  { label: "ОКПО", value: company.okpo },
  { label: "ОКВЭД", value: company.okved },
  { label: "Банк", value: company.bank },
  {
    label: "Юридический адрес",
    value: company.address,
    wide: true,
  },
];

const requestLink = `mailto:${company.email}?subject=${encodeURIComponent(
  "Запрос банковских реквизитов",
)}`;

export function CompanyDetails() {
  return (
    <section
      id="details"
      className="details"
      aria-labelledby="details-heading"
    >
      <Container>
        <div className="details__header">
          <div>
            <div className="details__label-group">
              <div className="details__label">
                <span className="details__label-line" aria-hidden="true" />
                Проверка контрагента
              </div>
              <span className="details__step">
                03 / 04
              </span>
            </div>

            <Reveal>
              <h2
                id="details-heading"
                className="details__heading"
              >
                Реквизиты и СБ
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="details__description">
                Официальные данные компании для проверки контрагента и
                взаимодействия со службой безопасности.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="details__cta-block">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="details__cta-icon"
                    aria-hidden="true"
                  />
                  <p className="details__cta-text">
                    Банковские реквизиты и закрывающие документы предоставляются
                    по запросу.
                  </p>
                </div>
                <a
                  href={requestLink}
                  className="details__cta-link"
                >
                  Запросить у СБ
                  <ArrowUpRight className="details__cta-link-icon" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <dl className="details__grid">
              {details.map((item) => (
                <div
                  key={item.label}
                  className={`details__item ${item.wide ? "details__item--wide" : ""}`}
                >
                  <dt className="details__label">
                    {item.label}
                  </dt>
                  <dd
                    className={`details__value ${
                      item.wide
                        ? "details__value--wide"
                        : "details__value--narrow"
                    }`}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
