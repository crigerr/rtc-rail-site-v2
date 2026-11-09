import { useId, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  Phone,

} from "lucide-react";
import {
  submitQuote,
  vehicleOptions,
  
  type QuotePayload,
  type VehicleType,
} from "../../lib/quote";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import "./QuoteForm.css";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FormErrors = Partial<Record<keyof QuotePayload | "consent", string>>;

interface QuoteFormProps {
  initialVehicle?: VehicleType;
  onSuccess?: () => void;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="quote-form__label"
      >
        {label}
        <span className="quote-form__label-required" aria-hidden="true">
          *
        </span>
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="quote-form__error"
        >
          <AlertCircle
            className="quote-form__error-icon"
            aria-hidden="true"
          />
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm({
  initialVehicle = "platform",
  onSuccess,
}: QuoteFormProps) {
  const formId = useId();
  const [values, setValues] = useState<QuotePayload>({
    vehicleType: initialVehicle,
    origin: "",
    destination: "",
    phone: "",
    email: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  // const [channel, setChannel] = useState<QuoteChannel>("endpoint");
  const [formError, setFormError] = useState("");

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  const validate = (vals: QuotePayload, consentGiven: boolean): FormErrors => {
    const errs: FormErrors = {};

    if (!vals.origin.trim()) {
      errs.origin = "Укажите станцию отправления";
    }

    if (!vals.destination.trim()) {
      errs.destination = "Укажите станцию назначения";
    } else if (
      vals.origin.trim() &&
      vals.origin.trim().toLowerCase() ===
        vals.destination.trim().toLowerCase()
    ) {
      errs.destination = "Станции отправления и назначения не должны совпадать";
    }

    const phoneDigits = vals.phone.replace(/\D/g, "");
    if (!vals.phone.trim()) {
      errs.phone = "Укажите контактный телефон";
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      errs.phone = "Проверьте номер телефона";
    }

    if (!vals.email.trim()) {
      errs.email = "Укажите корпоративный email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(vals.email.trim())) {
      errs.email = "Проверьте адрес электронной почты";
    }

    if (!consentGiven) {
      errs.consent = "Подтвердите согласие на обработку данных";
    }

    return errs;
  };

  const updateValue = <K extends keyof QuotePayload>(
    field: K,
    value: QuotePayload[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status === "error") {
      setStatus("idle");
      setFormError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values, consent);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstField}`)?.focus();
      return;
    }

    setStatus("submitting");
    setFormError("");

    try {
      await submitQuote({
        ...values,
        origin: values.origin.trim(),
        destination: values.destination.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
      });
      // setChannel(result.channel);
      setStatus("success");
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setFormError(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.",
      );
    }
  };

  if (isSuccess) {
    return (
      <div className="quote-form__success">
        <span className="quote-form__success-icon" aria-hidden="true">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="quote-form__success-title">Заявка принята</h3>
        <p className="quote-form__success-text">
          Мы подготовим коммерческое предложение и свяжемся с вами
          в течение 2 рабочих часов.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="quote-form" noValidate>
      <div className="quote-form__grid">
        <Field
          id={`${formId}-vehicleType`}
          label="Тип подвижного состава"
          error={errors.vehicleType}
        >
          <div className="quote-form__select-wrapper">
            <ChevronDown className="quote-form__select-icon" aria-hidden="true" />
            <select
              id={`${formId}-vehicleType`}
              name="vehicleType"
              value={values.vehicleType}
              onChange={(event) => updateValue("vehicleType", event.target.value as VehicleType)}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.vehicleType)}
              aria-describedby={
                errors.vehicleType ? `${formId}-vehicleType-error` : undefined
              }
              className={cn(
                "quote-form__select",
                errors.vehicleType && "quote-form__select--error",
              )}
            >
              {vehicleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </Field>

        <Field
          id={`${formId}-origin`}
          label="Станция отправления"
          error={errors.origin}
        >
          <div className="quote-form__input-wrapper">
            <MapPin className="quote-form__input-icon" aria-hidden="true" />
            <input
              id={`${formId}-origin`}
              name="origin"
              type="text"
              autoComplete="off"
              placeholder="Например: Москва-Сортировка"
              value={values.origin}
              onChange={(event) => updateValue("origin", event.target.value)}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.origin)}
              aria-describedby={
                errors.origin ? `${formId}-origin-error` : undefined
              }
              className={cn(
                "quote-form__input",
                errors.origin && "quote-form__input--error",
              )}
            />
          </div>
        </Field>

        <Field
          id={`${formId}-destination`}
          label="Станция назначения"
          error={errors.destination}
        >
          <div className="quote-form__input-wrapper">
            <MapPin className="quote-form__input-icon" aria-hidden="true" />
            <input
              id={`${formId}-destination`}
              name="destination"
              type="text"
              autoComplete="off"
              placeholder="Например: Новосибирск-Главный"
              value={values.destination}
              onChange={(event) => updateValue("destination", event.target.value)}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.destination)}
              aria-describedby={
                errors.destination ? `${formId}-destination-error` : undefined
              }
              className={cn(
                "quote-form__input",
                errors.destination && "quote-form__input--error",
              )}
            />
          </div>
        </Field>

        <Field
          id={`${formId}-phone`}
          label="Контактный телефон"
          error={errors.phone}
        >
          <div className="quote-form__input-wrapper">
            <Phone className="quote-form__input-icon" aria-hidden="true" />
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+7 (___) ___-__-__"
              value={values.phone}
              onChange={(event) => updateValue("phone", event.target.value)}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? `${formId}-phone-error` : undefined
              }
              className={cn(
                "quote-form__input",
                errors.phone && "quote-form__input--error",
              )}
            />
          </div>
        </Field>

        <Field
          id={`${formId}-email`}
          label="Корпоративный email"
          error={errors.email}
        >
          <div className="quote-form__input-wrapper">
            <Mail className="quote-form__input-icon" aria-hidden="true" />
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="name@company.ru"
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? `${formId}-email-error` : undefined
              }
              className={cn(
                "quote-form__input",
                errors.email && "quote-form__input--error",
              )}
            />
          </div>
        </Field>

        <div className="quote-form__field quote-form__consent quote-form__field--full">
          <label
            htmlFor={`${formId}-consent`}
            className="quote-form__consent-label"
          >
            <input
              id={`${formId}-consent`}
              name="consent"
              type="checkbox"
              checked={consent}
              onChange={(event) => {
                setConsent(event.target.checked);
                if (errors.consent) {
                  setErrors((current) => ({
                    ...current,
                    consent: undefined,
                  }));
                }
              }}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={
                errors.consent ? `${formId}-consent-error` : undefined
              }
              className="quote-form__consent-input"
            />
            <span className="quote-form__consent-text">
              Согласен на обработку персональных данных для подготовки
              коммерческого предложения.
            </span>
          </label>
          {errors.consent && (
            <p
              id={`${formId}-consent-error`}
              role="alert"
              className="quote-form__error"
            >
              <AlertCircle
                className="quote-form__error-icon"
                aria-hidden="true"
              />
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      {formError && (
        <div
          role="alert"
          className="quote-form__form-error"
        >
          <AlertCircle className="quote-form__form-error-icon" aria-hidden="true" />
          {formError}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="quote-form__submit btn-group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin quote-form__submit-icon" aria-hidden="true" />
            Отправляем заявку
          </>
        ) : (
          <>
            Получить расчёт ставки за 2 часа
            <ArrowRight
              className="h-4 w-4 quote-form__submit-icon"
              aria-hidden="true"
            />
          </>
        )}
      </Button>

      <p className="quote-form__disclaimer">
        Ответим в течение 2 рабочих часов. Без спама и рассылок.
      </p>
    </form>
  );
}
