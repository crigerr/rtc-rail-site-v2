import {
  ArrowRight,
  ClipboardList,
  ScanSearch,
  ShieldCheck,
  TrainFront,
  Wrench,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./MaintenanceSection.css";

const steps = [
  {
    number: "01",
    title: "Заявка",
    description:
      "Фиксируем маршрут, тип груза и требования к подвижному составу.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Дефектовка",
    description:
      "Проводим осмотр и фиксируем объём работ до выхода состава на линию.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Ремонт в депо РЖД",
    description:
      "Устраняем неисправности в сертифицированных депо-партнёрах РЖД.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Выпуск на линию",
    description:
      "Передаём исправный состав под погрузку — без простоя клиента.",
    icon: TrainFront,
  },
];

export function MaintenanceSection() {
  return (
    <section
      id="maintenance"
      className="maintenance"
      aria-labelledby="maintenance-heading"
    >
      <div
        className="maintenance__grid-bg blueprint-grid"
        aria-hidden="true"
      />
      <div className="maintenance__top-line" aria-hidden="true" />
      <div className="maintenance__glow" aria-hidden="true" />

      <Container className="maintenance__container">
        <div className="maintenance__header">
          <Reveal>
            <SectionLabel tone="dark">Техсодержание</SectionLabel>
            <h2
              id="maintenance-heading"
              className="maintenance__heading"
            >
              Берём техническое состояние парка на себя
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="maintenance__lead">
              Мы берём все технические и ремонтные риски на себя. Плановое ТО,
              дефектовка и ремонт — в одном контуре ответственности, чтобы
              исключить простои клиента.
            </p>
          </Reveal>
        </div>

        <div className="maintenance__steps">
          <ol className="maintenance__steps-list">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="maintenance__step">
                  <Reveal delay={index * 0.08}>
                    <div className="relative">
                      <div className="relative z-10 mb-7 flex items-center gap-4">
                        <span className="maintenance__step-icon-wrapper">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="maintenance__step-number">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="maintenance__step-title">
                        {step.title}
                      </h3>
                      <p className="maintenance__step-text">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.12}>
          <div className="maintenance__guarantee">
            <div className="maintenance__guarantee-content">
              <span className="maintenance__guarantee-icon">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="maintenance__guarantee-title">
                  Технические риски — на нашей стороне
                </p>
                <p className="maintenance__guarantee-text">
                  ТО-2, деповской ремонт, страхование подвижного состава и
                  устранение неисправностей — в рамках одного договора аренды.
                </p>
              </div>
            </div>
            <a
              href="#quote"
              className="btn btn--light btn--md maintenance__guarantee-cta btn-group"
            >
              Обсудить условия
              <ArrowRight
                className="btn-group__icon"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
