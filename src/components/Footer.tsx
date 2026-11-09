import { Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "../data/company";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacts"
      className="scroll-mt-24 overflow-hidden bg-ink text-white"
      aria-labelledby="footer-heading"
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <h2 id="footer-heading" className="sr-only">
          Контакты ООО «РТК»
        </h2>

        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-9">
          <Logo size="lg" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/30">
            04 / 04
          </span>
        </div>

        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Связаться
            </p>
            <a
              href={company.phoneHref}
              className="mt-5 flex items-start gap-3 text-[clamp(1.9rem,4.2vw,3.8rem)] font-semibold leading-none tracking-[-0.055em] text-white transition-colors hover:text-signal max-[359px]:text-[1.55rem]"
            >
              <PhoneCall
                className="mt-1 h-5 w-5 shrink-0 text-signal sm:h-6 sm:w-6"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap tabular-nums">{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 inline-flex items-center gap-3 text-base text-white/60 transition-colors hover:text-white sm:text-lg"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {company.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Офис
              </p>
              <p className="mt-4 flex items-start gap-3 text-[14px] leading-relaxed text-white/55">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/35"
                  aria-hidden="true"
                />
                <span>
                  Санкт-Петербург,
                  <br />
                  наб. Обводного канала, 93А
                </span>
              </p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Компания
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                ООО «РТК»
                <br />
                Аренда и оперирование
                <br />
                грузовым подвижным составом
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] leading-relaxed text-white/25 lg:flex-row lg:items-end lg:justify-between">
          <p>
            © {currentYear} {company.shortName}. ОГРН {company.ogrn} · ИНН{" "}
            {company.inn}
          </p>
          <p className="lg:text-right">
            Фото:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:VL80S-1059_with_freight_train_Dzerzhinsk.jpg"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/55"
            >
              Anakin / Wikimedia Commons, CC BY 3.0
            </a>
            {" · "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Intermodal_Freight_Containers_on_Flat_Cars_-_Knoxville,_Tennessee_-_November_8,_2014.jpg"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/55"
            >
              Lee Ann Ratledge, CC BY 4.0
            </a>
            {" · "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Brampton_ON_CN-Rail_Freight-Train_Tank-Car_CBTX-745305_2025-07-30.jpg"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/55"
            >
              Milan Suvajac, CC BY-SA 4.0
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
