import type { FleetTab } from "../../lib/quote";
import "./Blueprint.css";

const drawingMeta: Record<
  FleetTab,
  { code: string; title: string; items: Array<{ label: string; value: string }> }
> = {
  platforms: {
    code: "Схема 01",
    title: "Фитинговая платформа 80′",
    items: [
      { label: "Контейнеры", value: "20 / 40 / 45′ HC" },
      { label: "Нагрузка", value: "до 60 т" },
      { label: "Оси / скорость", value: "8 / 120 км/ч" },
    ],
  },
  cisterns: {
    code: "Схема 02",
    title: "Цистерна для жидкого пека",
    items: [
      { label: "Объём котла", value: "до 54 м³" },
      { label: "Обогрев", value: "паровая рубашка" },
      { label: "Слив", value: "нижний клапан" },
    ],
  },
};

function PlatformDrawing() {
  return (
    <svg
      viewBox="0 0 640 320"
      className="h-auto w-full"
      fill="none"
      role="img"
      aria-label="Схема фитинговой платформы длиной 80 футов с контейнерами 20, 40 и 45 футов"
    >
      <defs>
        <pattern
          id="platform-ribs"
          width="12"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
        </pattern>
      </defs>

      <text x="50" y="30" fill="#64748b" fontSize="9" letterSpacing="2">
        ВИД СБОКУ / ПРОЕКЦИЯ
      </text>
      <text
        x="590"
        y="30"
        fill="#94a3b8"
        fontSize="9"
        letterSpacing="1.5"
        textAnchor="end"
      >
        80 FT
      </text>

      <line
        x1="50"
        y1="48"
        x2="590"
        y2="48"
        stroke="#475569"
        strokeWidth="1"
      />
      <line x1="50" y1="43" x2="50" y2="53" stroke="#475569" />
      <line x1="590" y1="43" x2="590" y2="53" stroke="#475569" />
      <text
        x="320"
        y="41"
        fill="#94a3b8"
        fontSize="9"
        letterSpacing="1.8"
        textAnchor="middle"
      >
        ДЛИНА 80′ / 24,4 М
      </text>

      <rect
        x="64"
        y="98"
        width="100"
        height="77"
        fill="url(#platform-ribs)"
        stroke="#94a3b8"
        strokeOpacity="0.65"
      />
      <rect
        x="184"
        y="98"
        width="200"
        height="77"
        fill="url(#platform-ribs)"
        stroke="#94a3b8"
        strokeOpacity="0.65"
      />
      <rect
        x="404"
        y="88"
        width="170"
        height="87"
        fill="url(#platform-ribs)"
        stroke="#cbd5e1"
        strokeOpacity="0.8"
      />

      <text
        x="114"
        y="141"
        fill="#ffffff"
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        20′
      </text>
      <text
        x="284"
        y="141"
        fill="#ffffff"
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        40′
      </text>
      <text
        x="489"
        y="136"
        fill="#ffffff"
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        45′ HC
      </text>
      <text
        x="114"
        y="158"
        fill="#64748b"
        fontSize="7"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        CONTAINER
      </text>
      <text
        x="284"
        y="158"
        fill="#64748b"
        fontSize="7"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        CONTAINER
      </text>
      <text
        x="489"
        y="153"
        fill="#64748b"
        fontSize="7"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        HIGH CUBE
      </text>

      {[64, 160, 184, 380, 404, 570].map((x) => (
        <rect
          key={x}
          x={x}
          y="168"
          width="4"
          height="7"
          fill="#dc2626"
        />
      ))}

      <rect
        x="50"
        y="175"
        width="540"
        height="14"
        fill="#ffffff"
        fillOpacity="0.05"
        stroke="#cbd5e1"
        strokeOpacity="0.8"
      />
      <line
        x1="50"
        y1="189"
        x2="590"
        y2="189"
        stroke="#64748b"
        strokeDasharray="3 4"
      />

      {[
        [92, 130],
        [246, 284],
        [356, 394],
        [506, 544],
      ].map(([x1, x2]) => (
        <g key={x1}>
          <line
            x1={x1}
            y1="205"
            x2={x2}
            y2="205"
            stroke="#64748b"
            strokeWidth="2"
          />
          <line x1={(x1 + x2) / 2} y1="189" x2={(x1 + x2) / 2} y2="205" stroke="#475569" />
          <circle
            cx={x1}
            cy="224"
            r="15"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          <circle cx={x1} cy="224" r="4" fill="#475569" />
          <circle
            cx={x2}
            cy="224"
            r="15"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          <circle cx={x2} cy="224" r="4" fill="#475569" />
        </g>
      ))}

      <line x1="30" y1="266" x2="610" y2="266" stroke="#475569" />
      {Array.from({ length: 24 }, (_, index) => {
        const x = 40 + index * 25;
        return (
          <line
            key={x}
            x1={x}
            y1="266"
            x2={x - 7}
            y2="274"
            stroke="#334155"
            strokeWidth="2"
          />
        );
      })}

      <text
        x="50"
        y="300"
        fill="#94a3b8"
        fontSize="8"
        letterSpacing="1.4"
      >
        ОБЪЁМ ДО 54 М³ · НАГРУЗКА ДО 64 Т
      </text>
      <text
        x="590"
        y="300"
        fill="#64748b"
        fontSize="7"
        letterSpacing="1.1"
        textAnchor="end"
      >
        СХЕМАТИЧНО · НЕ ДЛЯ ПРОИЗВОДСТВА
      </text>
    </svg>
  );
}

function CisternDrawing() {
  return (
    <svg
      viewBox="0 0 640 320"
      className="h-auto w-full"
      fill="none"
      role="img"
      aria-label="Схема цистерны для перевозки жидкого пека с паровой рубашкой и нижним сливом"
    >
      <defs>
        <pattern
          id="cistern-insulation"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="4" cy="4" r="1.5" fill="#ffffff" fillOpacity="0.06" />
        </pattern>
      </defs>

      <text x="50" y="30" fill="#64748b" fontSize="9" letterSpacing="2">
        ВИД СБОКУ / РАЗРЕЗ
      </text>
      <text
        x="590"
        y="30"
        fill="#94a3b8"
        fontSize="9"
        letterSpacing="1.5"
        textAnchor="end"
      >
        4-АКСИАЛЬНАЯ
      </text>

      <line
        x1="50"
        y1="48"
        x2="590"
        y2="48"
        stroke="#475569"
        strokeWidth="1"
      />
      <line x1="50" y1="43" x2="50" y2="53" stroke="#475569" />
      <line x1="590" y1="43" x2="590" y2="53" stroke="#475569" />
      <text
        x="320"
        y="41"
        fill="#94a3b8"
        fontSize="9"
        letterSpacing="1.8"
        textAnchor="middle"
      >
        ДЛИНА ~16,5 М
      </text>

      <ellipse
        cx="320"
        cy="130"
        rx="210"
        ry="65"
        fill="url(#cistern-insulation)"
        stroke="#94a3b8"
        strokeOpacity="0.65"
      />
      <ellipse
        cx="320"
        cy="130"
        rx="190"
        ry="45"
        fill="#0f172a"
        stroke="#94a3b8"
        strokeOpacity="0.4"
      />

      <ellipse
        cx="320"
        cy="130"
        rx="170"
        ry="40"
        stroke="#dc2626"
        strokeWidth="2"
        strokeDasharray="8 4"
      />
      <text
        x="320"
        y="134"
        fill="#fca5a5"
        fontSize="8"
        letterSpacing="1.4"
        textAnchor="middle"
      >
        ПАРОВАЯ РУБАШКА
      </text>

      <path
        d="M110 130 Q130 90 170 130 Q210 170 320 130 Q430 90 470 130"
        stroke="#f87171"
        strokeOpacity="0.65"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M170 185 L175 175 L180 190 L185 175 L190 190 L195 175 L200 190 L205 175 L210 190 L215 175 L220 185"
        stroke="#f87171"
        strokeOpacity="0.65"
      />
      <path
        d="M430 185 L435 175 L440 190 L445 175 L450 190 L455 175 L460 190 L465 175 L470 190 L475 175 L480 185"
        stroke="#f87171"
        strokeOpacity="0.65"
      />

      <rect x="112" y="117" width="6" height="66" rx="3" fill="#dc2626" />
      <text
        x="78"
        y="145"
        fill="#94a3b8"
        fontSize="7"
        letterSpacing="1.2"
        transform="rotate(-90 78 145)"
      >
        ПАРОВАЯ РУБАШКА
      </text>
      <line x1="100" y1="144" x2="112" y2="144" stroke="#dc2626" />

      <line x1="325" y1="208" x2="325" y2="232" stroke="#cbd5e1" />
      <rect x="315" y="230" width="20" height="10" fill="#dc2626" />
      <line x1="335" y1="235" x2="370" y2="235" stroke="#dc2626" />
      <path d="M370 229 L382 235 L370 241" stroke="#dc2626" />
      <line
        x1="338"
        y1="243"
        x2="440"
        y2="284"
        stroke="#64748b"
        strokeDasharray="3 4"
      />
      <text
        x="448"
        y="288"
        fill="#fca5a5"
        fontSize="8"
        letterSpacing="1.4"
      >
        НИЖНИЙ СЛИВ С ОБОГРЕВОМ
      </text>

      <line x1="90" y1="236" x2="570" y2="236" stroke="#cbd5e1" strokeOpacity="0.75" />

      {[
        [162, 198],
        [438, 474],
      ].map(([x1, x2]) => (
        <g key={x1}>
          <line
            x1={x1}
            y1="234"
            x2={x2}
            y2="234"
            stroke="#64748b"
            strokeWidth="2"
          />
          <line x1={(x1 + x2) / 2} y1="208" x2={(x1 + x2) / 2} y2="234" stroke="#475569" />
          <circle
            cx={x1}
            cy="252"
            r="14"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          <circle cx={x1} cy="252" r="4" fill="#475569" />
          <circle
            cx={x2}
            cy="252"
            r="14"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          <circle cx={x2} cy="252" r="4" fill="#475569" />
        </g>
      ))}

      <line x1="30" y1="266" x2="610" y2="266" stroke="#475569" />
      {Array.from({ length: 24 }, (_, index) => {
        const x = 40 + index * 25;
        return (
          <line
            key={x}
            x1={x}
            y1="266"
            x2={x - 7}
            y2="274"
            stroke="#334155"
            strokeWidth="2"
          />
        );
      })}

      <text
        x="50"
        y="300"
        fill="#94a3b8"
        fontSize="8"
        letterSpacing="1.4"
      >
        ОБЪЁМ ДО 54 М³ · НАГРУЗКА ДО 64 Т
      </text>
      <text
        x="590"
        y="300"
        fill="#64748b"
        fontSize="7"
        letterSpacing="1.1"
        textAnchor="end"
      >
        СХЕМАТИЧНО · НЕ ДЛЯ ПРОИЗВОДСТВА
      </text>
    </svg>
  );
}

interface BlueprintProps {
  kind: FleetTab;
}

export function Blueprint({ kind }: BlueprintProps) {
  const meta = drawingMeta[kind];

  return (
    <div className="blueprint">
      <div
        className="blueprint__grid-bg blueprint-grid"
        aria-hidden="true"
      />
      <div
        className="blueprint__fade"
        aria-hidden="true"
      />

      <div className="blueprint__header">
        <span className="blueprint__code">
          {meta.code}
        </span>
        <span className="blueprint__label">
          <span className="blueprint__label-dot" aria-hidden="true" />
          Технический чертёж
        </span>
      </div>

      <div className="blueprint__drawing">
        {kind === "platforms" ? <PlatformDrawing /> : <CisternDrawing />}
      </div>

      <div className="blueprint__footer">
        <p className="blueprint__title">
          {meta.title}
        </p>
        <div className="blueprint__specs">
          {meta.items.map((item) => (
            <div key={item.label} className="blueprint__spec">
              <p className="blueprint__spec-label">
                {item.label}
              </p>
              <p className="blueprint__spec-value">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
