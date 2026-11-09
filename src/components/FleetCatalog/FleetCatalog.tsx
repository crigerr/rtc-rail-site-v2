import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Container as ContainerIcon,
  Droplets,
  Info,
} from "lucide-react";
import type { FleetTab, VehicleType } from "../../lib/quote";
import { cn } from "../../lib/utils";
import { Blueprint } from "../Blueprint";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./FleetCatalog.css";

interface FleetTabConfig {
  id: FleetTab;
  index: string;
  label: string;
  subtitle: string;
  description: string;
  note: string;
  chips: string[];
  specs: Array<{ label: string; value: string }>;
  cta: string;
  vehicle: VehicleType;
  icon: typeof ContainerIcon;
}

const fleetTabs: FleetTabConfig[] = [
  {
    id: "platforms",
    index: "01",
    label: "Фитинговые платформы",
    subtitle: "Для контейнеров 20, 40 и 45 футов",
    description:
      "Платформы с фитинговыми упорами для крупнотоннажных контейнеров High Cube. Рассчитаны на регулярную эксплуатацию в составе контейнерных поездов и стабильную загрузку по всей сети 1520.",
    note: "Оптимальный выбор для регулярных контейнерных поездов и долгосрочных контрактов на перевозку.",
    chips: ["20′", "40′", "45′ HC", "Контейнерные поезда"],
    specs: [
      { label: "Совместимость", value: "20′ / 40′ / 45′ High Cube" },
      { label: "Максимальная грузоподъёмность", value: "до 60 т" },
      { label: "Осевая нагрузка", value: "23,5 тс" },
      { label: "Количество осей", value: "8" },
      { label: "Длина платформы", value: "80 футов" },
      { label: "Скорость в составе", value: "до 120 км/ч" },
    ],
    cta: "Запросить платформы",
    vehicle: "platform",
    icon: ContainerIcon,
  },
  {
    id: "cisterns",
    index: "02",
    label: "Цистерны для жидкого пека",
    subtitle: "Специализированный подвижной состав",
    description:
      "Котлы с теплоизоляцией и паровой рубашкой для перевозки жидкого каменноугольного пека. Обогрев и нижний сливной клапан с паровым сопровождением предотвращают застывание груза при транспортировке и выгрузке.",
    note: "Конструкция рассчитана на вязкие и опасные грузы: поддерживает температуру пека и снижает потери при сливе.",
    chips: ["Теплоизоляция", "Паровая рубашка", "Нижний слив", "Опасные грузы"],
    specs: [
      { label: "Назначение", value: "жидкий каменноугольный пек" },
      { label: "Объём котла", value: "до 54 м³" },
      { label: "Максимальная грузоподъёмность", value: "до 64 т" },
      { label: "Теплоизоляция", value: "кожух + минеральная вата" },
      { label: "Обогрев", value: "паровая рубашка" },
      { label: "Слив", value: "нижний клапан с обогревом" },
    ],
    cta: "Заказать цистерны под пек",
    vehicle: "cistern",
    icon: Droplets,
  },
];

interface FleetCatalogProps {
  activeTab: FleetTab;
  onTabChange: (tab: FleetTab) => void;
  onRequestQuote: (vehicle: VehicleType) => void;
}

export function FleetCatalog({
  activeTab,
  onTabChange,
  onRequestQuote,
}: FleetCatalogProps) {
  const active = fleetTabs.find((tab) => tab.id === activeTab) ?? fleetTabs[0];

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + fleetTabs.length) % fleetTabs.length;
    const nextTab = fleetTabs[nextIndex];
    onTabChange(nextTab.id);
    document.getElementById(`fleet-tab-${nextTab.id}`)?.focus();
  };

  return (
    <section
      id="fleet"
      className="fleet"
      aria-labelledby="fleet-heading"
    >
      <Container>
        <div className="fleet__header">
          <Reveal>
            <SectionLabel>Услуги и парк</SectionLabel>
            <h2
              id="fleet-heading"
              className="fleet__heading"
            >
              Выберите тип подвижного состава
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="fleet__description">
              Мы берём все технические и ремонтные риски на себя. Плановое ТО,
              дефектовка и ремонт — в одном контуре ответственности, чтобы
              исключить простои клиента.
            </p>
          </Reveal>
        </div>

        <div className="fleet__tabs" role="tablist" aria-label="Типы подвижного состава">
          <Reveal delay={0.12}>
            {fleetTabs.map((tab, index) => {
              const isActive = tab.id === active.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  id={`fleet-tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`fleet-panel-${tab.id}`}
                  onClick={() => onTabChange(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={cn("fleet__tab", isActive && "fleet__tab--active")}
                >
                  <div className="fleet__tab-header">
                    <span
                      className={cn(
                        "fleet__tab-icon",
                        isActive ? "fleet__tab-icon--active" : "fleet__tab-icon--inactive",
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="fleet__tab-label-group">
                      <span
                        className={cn(
                          "fleet__tab-title",
                          isActive ? "fleet__tab-title--active" : "fleet__tab-title--inactive",
                        )}
                      >
                        {tab.label}
                      </span>
                      <span
                        className={cn(
                          "fleet__tab-index",
                          isActive ? "fleet__tab-index--active" : "fleet__tab-index--inactive",
                        )}
                      >
                        {tab.index}
                      </span>
                    </span>
                  </div>
                  <span className="fleet__tab-subtitle">{tab.subtitle}</span>
                </button>
              );
            })}
          </Reveal>
        </div>

        <div className="fleet__panels">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id={`fleet-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`fleet-tab-${active.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fleet__panel"
            >
              <div className="fleet__panel-content">
                <div className="fleet__panel-header">
                  <div>
                    <p className="fleet__panel-meta">
                      Услуга {active.index} / {active.subtitle}
                    </p>
                    <h3 className="fleet__panel-title">
                      {active.label}
                    </h3>
                  </div>
                  <span className="fleet__panel-badge">
                    РТК / Парк
                  </span>
                </div>

                <p className="fleet__panel-description">
                  {active.description}
                </p>

                <div className="fleet__panel-chips">
                  {active.chips.map((chip) => (
                    <span key={chip} className="fleet__chip">
                      {chip}
                    </span>
                  ))}
                </div>

                <dl className="fleet__panel-specs">
                  {active.specs.map((spec) => (
                    <div key={spec.label} className="fleet__spec">
                      <dt className="fleet__spec-label">
                        {spec.label}
                      </dt>
                      <dd className="fleet__spec-value">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="fleet__panel-note">
                  <Info
                    className="fleet__note-icon"
                    aria-hidden="true"
                  />
                  <p className="fleet__note-text">
                    {active.note}
                  </p>
                </div>

                <div className="fleet__panel-actions">
                  <Button
                    onClick={() => onRequestQuote(active.vehicle)}
                    className="fleet__panel-cta btn-group"
                  >
                    {active.cta}
                    <ArrowUpRight
                      className="btn-group__icon"
                      aria-hidden="true"
                    />
                  </Button>
                  <p className="fleet__panel-disclaimer">
                    Технические параметры и ставка — в коммерческом предложении.
                  </p>
                </div>
              </div>

              <Blueprint kind={active.id} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
