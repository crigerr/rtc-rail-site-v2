import { ArrowUpRight, ShieldCheck } from "lucide-react";
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
              <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400">
                03 / 04
              </span>
            </div>

            <Reveal>
              <h2
                id="details-heading"
                className="mt-6 max-w-[520px] text-[clamp(2.4rem,3.9vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-ink"
              >
                Реквизиты и СБ
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[330px] text-[14px] leading-relaxed text-slate-500">
                Официальные данные компании для проверки контрагента и
                взаимодействия со службой безопасности.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-9 border-t border-ink/10 pt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <p className="max-w-[300px] text-xs leading-relaxed text-slate-500">
                    Банковские реквизиты и закрывающие документы предоставляются
                    по запросу.
                  </p>
                </div>
                <a
                  href={requestLink}
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-signal"
                >
                  Запросить у СБ
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
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
                    className={`mt-2.5 font-semibold tracking-[-0.02em] text-ink sm:mt-3 ${
                      item.wide
                        ? "max-w-[720px] text-[12px] leading-relaxed sm:text-[13px]"
                        : "text-[15px] tabular-nums sm:text-[17px]"
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
