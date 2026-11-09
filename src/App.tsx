import { CompanyDetails } from "./components/CompanyDetails";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main-content"
        className="sr-only z-[120] bg-signal px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Перейти к содержимому
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <CompanyDetails />
      </main>

      <Footer />
    </div>
  );
}
