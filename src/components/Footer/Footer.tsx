import { Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "../../data/company";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacts"
      className="footer"
      aria-labelledby="footer-heading"
    >
      <Container className="footer__inner">
        <h2 id="footer-heading" className="sr-only">
          Контакты ООО «РТК»
        </h2>

        <div className="footer__header">
          <Logo size="lg" />
          <span className="footer__step">
            04 / 04
          </span>
        </div>

        <div className="footer__content">
          <div className="footer__contacts">
            <p className="footer__contacts-label">
              Связаться
            </p>
            <a
              href={company.phoneHref}
              className="footer__phone"
            >
              <PhoneCall
                className="footer__phone-icon"
                aria-hidden="true"
              />
              <span className="footer__phone-number tabular-nums">{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="footer__email"
            >
              <Mail className="footer__email-icon" aria-hidden="true" />
              {company.email}
            </a>
          </div>

          <div className="footer__info">
            <div className="footer__info-block">
              <p className="footer__info-label">
                Офис
              </p>
              <p className="footer__address">
                <MapPin
                  className="footer__address-icon"
                  aria-hidden="true"
                />
                <span>
                  Санкт-Петербург,
                  <br />
                  наб. Обводного канала, 93А
                </span>
              </p>
            </div>
            <div className="footer__info-block">
              <p className="footer__info-label">
                Компания
              </p>
              <p className="footer__company-text">
                ООО «РТК»
                <br />
                Аренда и оперирование
                <br />
                грузовым подвижным составом
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {company.shortName}. ОГРН {company.ogrn} · ИНН{" "}
            {company.inn}
          </p>
          <p className="footer__credits">
            Фото:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:VL80S-1059_with_freight_train_Dzerzhinsk.jpg"
              target="_blank"
              rel="noreferrer"
              className="footer__credit-link"
            >
              Anakin / Wikimedia Commons, CC BY 3.0
            </a>
            {" · "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Intermodal_Freight_Containers_on_Flat_Cars_-_Knoxville,_Tennessee_-_November_8,_2014.jpg"
              target="_blank"
              rel="noreferrer"
              className="footer__credit-link"
            >
              Lee Ann Ratledge, CC BY 4.0
            </a>
            {" · "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Brampton_ON_CN-Rail_Freight-Train_Tank-Car_CBTX-745305_2025-07-30.jpg"
              target="_blank"
              rel="noreferrer"
              className="footer__credit-link"
            >
              Milan Suvajac, CC BY-SA 4.0
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
