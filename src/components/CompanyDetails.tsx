import { company } from "../data/company";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

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
  { label: "БИК", value: company.bankBik },
  { label: "Банк", value: company.bank, wide: true },
  {
    label: "Юридический адрес",
    value: company.address,
    wide: true,
  },
];

export function CompanyDetails() {
  return (
    <section
      id="details"
      className="scroll-mt-24 bg-sand py-16 sm:py-20 lg:py-28"
      aria-labelledby="details-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <span className="h-px w-8 bg-signal" aria-hidden="true" />
                Проверка контрагента
              </div>
            </div>

            <Reveal>
              <h2
                id="details-heading"
                className="mt-6 max-w-[520px] text-[clamp(2.4rem,3.9vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-ink"
              >
                Реквизиты
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[330px] text-[14px] leading-relaxed text-slate-500">
                Официальные данные компании.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <dl className="grid grid-cols-2 gap-px border border-line bg-line">
              {details.map((item) => (
                <div
                  key={item.label}
                  className={`bg-white p-4 sm:p-6 ${
                    item.wide ? "col-span-2" : ""
                  }`}
                >
                  <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-400 sm:text-[9px] sm:tracking-[0.18em]">
                    {item.label}
                  </dt>
                  <dd
                    className={`mt-2.5 font-semibold tracking-[-0.02em] text-ink sm:mt-3 break-words ${
                      item.wide
                        ? "max-w-[720px] leading-relaxed text-[clamp(11px,2.2vw,13px)]"
                        : "tabular-nums text-[clamp(13px,2.5vw,17px)]"
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
