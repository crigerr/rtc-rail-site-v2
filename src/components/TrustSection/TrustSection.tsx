import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { company } from "../../data/company";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./TrustSection.css";

const credentials = [
  {
    index: "01",
    metric: "ОКВЭД 77.39.12",
    lead: "Легальная аренда",
    description:
      "Официальная деятельность по аренде железнодорожного транспорта. Вид деятельности подтверждён в ЕГРЮЛ.",
    icon: FileCheck2,
  },
  {
    index: "02",
    metric: "До 7 лет",
    lead: "Возраст парка",
    description:
      "Средний возраст нашего подвижного состава. Плановое ТО и деповские ремонты — строго по регламенту.",
    icon: Gauge,
  },
  {
    index: "03",
    metric: "ТО-2 и деповской ремонт",
    lead: "Полное содержание",
    description:
      "Все вагоны застрахованы от коммерческого брака. Технические риски и устранение неисправностей берём на себя.",
    icon: Wrench,
  },
  {
    index: "04",
    metric: "Проверка по ИНН",
    lead: "Открытые данные",
    description:
      "Реквизиты опубликованы для службы безопасности контрагентов. Проверка компании доступна онлайн.",
    icon: ShieldCheck,
  },
];

const requisites = [
  { label: "ИНН", value: company.inn },
  { label: "ОГРН", value: company.ogrn },
  { label: "КПП", value: company.kpp },
];

export function TrustSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyRequisites = async () => {
    const text = `${company.shortName} · ИНН ${company.inn} · КПП ${company.kpp} · ОГРН ${company.ogrn}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="about"
      className="trust"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="trust__header">
          <Reveal>
            <SectionLabel>О компании</SectionLabel>
            <h2
              id="about-heading"
              className="trust__heading"
            >
              Надёжность, которую можно проверить
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="trust__description">
              РТК — оператор специализированного подвижного состава.
              Работаем официально, поддерживаем парк в исправном состоянии
              и публикуем данные, необходимые для проверки контрагента.
            </p>
            <a
              href="#contacts"
              className="trust__link"
            >
              Реквизиты и контакты
              <ArrowRight
                className="trust__link-icon"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="trust__credentials">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.metric}
                delay={index * 0.06}
                className="trust__credential group"
              >
                <div className="flex items-center justify-between">
                  <span className="trust__credential-index">
                    {item.index}
                  </span>
                  <Icon
                    className="trust__credential-icon"
                    aria-hidden="true"
                  />
                </div>
                <p className="trust__credential-metric">
                  {item.metric}
                </p>
                <p className="trust__credential-lead">
                  {item.lead}
                </p>
                <p className="trust__credential-text">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="trust__footer">
            <div className="trust__footer-info">
              <span className="trust__footer-icon">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="trust__footer-title">
                  Реквизиты для службы безопасности
                </p>
                <p className="trust__footer-subtitle">
                  Сверьте данные перед заключением договора
                </p>
              </div>
            </div>

            <div className="trust__footer-requisites">
              {requisites.map((item) => (
                <div key={item.label} className="trust__requisite">
                  <p className="trust__requisite-label">
                    {item.label}
                  </p>
                  <p className="trust__requisite-value">
                    {item.value}
                  </p>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={copyRequisites}
                className={cn("trust__copy-button", copied && "trust__copy-button--copied")}
                aria-live="polite"
              >
                {copied ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? "Скопировано" : "Копировать"}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
