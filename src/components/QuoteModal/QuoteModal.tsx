import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, PhoneCall, X } from "lucide-react";
import { company } from "../../data/company";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import type { VehicleType } from "../../lib/quote";
import { QuoteForm } from "../QuoteForm";
import "./QuoteModal.css";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  initialVehicle: VehicleType;
}

export function QuoteModal({
  open,
  onClose,
  initialVehicle,
}: QuoteModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    }, 120);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal__overlay fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <motion.div
            className="modal__overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            aria-describedby="quote-modal-description"
            className="modal__panel"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="modal__top-accent" />

            <div className="modal__top-bar">
              <div className="modal__header">
                <p className="modal__header-label">
                  Коммерческое предложение
                </p>
                <h2
                  id="quote-modal-title"
                  className="modal__header-title"
                >
                  Запросить КП
                </h2>
                <p
                  id="quote-modal-description"
                  className="modal__header-description"
                >
                  Укажите маршрут — подберём платформы или цистерны под задачу.
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Закрыть форму запроса КП"
                className="modal__close"
              >
                <X className="modal__close-icon" aria-hidden="true" />
              </button>
            </div>

            <div className="modal__body">
              <QuoteForm key={initialVehicle} initialVehicle={initialVehicle} />
            </div>

            <div className="modal__footer">
              <span className="modal__footer-label">Коммерческий отдел РТК</span>
              <div className="modal__footer-contacts">
                <a
                  href={company.phoneHref}
                  className="modal__footer-contact"
                >
                  <PhoneCall className="modal__footer-contact-icon" aria-hidden="true" />
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="modal__footer-contact"
                >
                  <Mail className="modal__footer-contact-icon" aria-hidden="true" />
                  {company.email}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
