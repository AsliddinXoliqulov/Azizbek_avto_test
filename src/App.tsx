import { useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Download,
  Laptop,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { APP_CONFIG, DOWNLOAD_AVAILABLE } from "./config/appConfig";

const navigation = [
  { label: "Imkoniyatlar", href: "#imkoniyatlar" },
  { label: "Afzalliklar", href: "#afzalliklar" },
];

const features = [
  {
    icon: BookOpen,
    title: "Yo‘l harakati qoidalari",
    description:
      "Yo‘l harakati qoidalarini o‘rganish va bilimlaringizni mustahkamlash uchun qulay dastur.",
  },
  {
    icon: Laptop,
    title: "Kompyuterda ishlash",
    description:
      "Windows kompyuterida foydalanish uchun mo‘ljallangan desktop ilova.",
  },
  {
    icon: Check,
    title: "Qulay foydalanish",
    description:
      "Dasturdan foydalanishni boshlash uchun uni yuklab oling va kompyuteringizda ishga tushiring.",
  },
];

const steps = [
  {
    number: "01",
    title: "Yuklab oling",
    description: "Dasturning EXE faylini kompyuteringizga yuklab oling.",
  },
  {
    number: "02",
    title: "Dasturni ishga tushiring",
    description:
      "Yuklab olingan faylni oching va Windows ko‘rsatmalariga amal qiling.",
  },
  {
    number: "03",
    title: "Tayyorgarlikni boshlang",
    description:
      "Dastur imkoniyatlaridan foydalanib, nazariy bilimlaringizni mustahkamlang.",
  },
];

const questions = [
  {
    question: "Dasturni qanday yuklab olaman?",
    answer:
      "«Yuklab olish» bo‘limidagi tugmani bosing. Agar fayl hali taqdim etilmagan bo‘lsa, tugma mavjud bo‘lmaydi; dasturni ishlab chiquvchidan EXE faylini so‘rang.",
  },
  {
    question: "Dastur qaysi qurilmalar uchun mo‘ljallangan?",
    answer:
      "Avtotest Windows operatsion tizimida ishlaydigan kompyuterlar uchun mo‘ljallangan desktop ilovadir.",
  },
  {
    question: "EXE faylni qanday ishga tushiraman?",
    answer:
      "Faylni ishonchli manbadan yuklab olganingizga ishonch hosil qiling, so‘ng uni ochib, Windows ko‘rsatmalariga amal qiling.",
  },
  {
    question: "Windows xavfsizlik ogohlantirishi chiqsa nima qilish kerak?",
    answer:
      "Keng tarqalmagan ilovalar uchun Windows xavfsizlik ogohlantirishi ko‘rsatishi mumkin. Davom etishdan oldin fayl ishonchli manbadan olinganini tekshiring. Himoya vositalarini o‘chirib qo‘ymang.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className="brand" href="#bosh-sahifa" aria-label="Azizbek Avto Test — bosh sahifa">
      <img className="brand-image" src="/logo.jpg" alt="" />
      <span className="brand-name">AZIZBEK AVTO TEST</span>
      {footer && <span className="brand-region">UZ</span>}
    </a>
  );
}

function DownloadLink({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  if (!DOWNLOAD_AVAILABLE) {
    return (
      <a
        className={`${className} is-disabled`}
        href="#yuklab-olish"
        aria-disabled="true"
        onClick={(event) => event.preventDefault()}
        title="EXE fayli hali qo‘shilmagan"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={className}
      href={APP_CONFIG.downloadUrl}
      download="Avtotest-Uzbekistan.exe"
    >
      {children}
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="artwork" aria-hidden="true">
      <div className="artwork-glow" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="floating-label">
        <span className="label-dot" />
        Windows uchun desktop ilova
      </div>
      <div className="app-window">
        <div className="window-titlebar">
          <div className="window-brand">
            <span className="mini-brand-mark">A</span>
            <span>Avtotest</span>
          </div>
          <div className="window-controls">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="window-content">
          <div className="mock-sidebar">
            <span className="sidebar-logo">A</span>
            <span className="sidebar-icon active" />
            <span className="sidebar-icon" />
            <span className="sidebar-icon" />
            <span className="sidebar-icon" />
          </div>
          <div className="mock-map">
            <div className="map-grid" />
            <div className="map-road road-main">
              <span className="road-dashes" />
            </div>
            <div className="map-road road-cross">
              <span className="road-dashes" />
            </div>
            <div className="map-route" />
            <span className="map-pin pin-one" />
            <span className="map-pin pin-two" />
            <span className="traffic-sign sign-stop">STOP</span>
            <span className="traffic-light">
              <i />
              <i />
              <i />
            </span>
            <div className="map-caption">
              <span className="map-caption-dot" />
              Yo‘l harakati
            </div>
          </div>
        </div>
        <div className="window-footer">
          <span className="footer-status"><i /> Tayyorlanish vaqti</span>
          <span>Windows ilovasi</span>
        </div>
      </div>
      <div className="art-float-card">
        <span className="float-icon"><ShieldCheck size={17} /></span>
        <span><strong>Avtotest</strong><small>Windows ilovasi</small></span>
        <ArrowDownToLine className="float-download" size={16} />
      </div>
      <div className="art-spark spark-one" />
      <div className="art-spark spark-two" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-container">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav
            id="primary-navigation"
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Asosiy navigatsiya"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#yuklab-olish"
              onClick={closeMenu}
            >
              Dasturni yuklab olish <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-grid" id="bosh-sahifa">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span /> WINDOWS UCHUN DESKTOP ILOVA</div>
              <h1>
                Haydovchilik imtihoniga{" "}
                <span className="text-gradient">ishonch bilan</span>{" "}
                tayyorlaning.
              </h1>
              <p className="hero-description">
                Avtotest — yo‘l harakati qoidalarini o‘rganish va nazariy
                imtihonga tayyorlanish uchun Windows kompyuterlariga
                mo‘ljallangan dastur.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#yuklab-olish">
                  <ArrowDown size={17} />
                  Windows uchun yuklab olish
                </a>
                <a className="button button-secondary" href="#imkoniyatlar">
                  Dastur imkoniyatlari <ArrowRight size={16} />
                </a>
              </div>
              {!DOWNLOAD_AVAILABLE && (
                <p className="availability-note">
                  Yuklab olish uchun EXE fayli hali qo‘shilmagan.
                </p>
              )}
              <div className="hero-footnote">
                <span className="footnote-icon"><Check size={13} /></span>
                Windows kompyuterlari uchun
              </div>
            </div>
            <HeroArtwork />
          </div>
          <div className="hero-bottom container">
            <span>YO‘L HARAKATI QOIDALARINI O‘RGANING</span>
            <span className="hero-bottom-line" />
            <a href="#imkoniyatlar" aria-label="Imkoniyatlarga o‘tish">
              <ArrowDown size={16} />
            </a>
          </div>
        </section>

        <section className="features-section section-pad" id="imkoniyatlar">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow"><span /> AVTOTEST IMKONIYATLARI</div>
              <h2>Nazariy imtihonga tayyorgarlik — bir joyda</h2>
              <p>
                Bilimlaringizni mustahkamlash uchun kerakli vositalar —
                Windows kompyuteringizda.
              </p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, description }, index) => (
                <article className="feature-card" key={title}>
                  <div className="feature-topline">
                    <span className="feature-icon"><Icon size={20} /></span>
                    <span className="feature-index">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="feature-accent" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="steps-section section-pad" id="afzalliklar">
          <div className="container">
            <div className="steps-heading">
              <div>
                <div className="eyebrow"><span /> BOSHLASH OSON</div>
                <h2>Uch qadamda tayyorgarlikni boshlang</h2>
              </div>
              <p>
                Dasturdan foydalanishni boshlash uchun quyidagi oddiy
                bosqichlarni bajaring.
              </p>
            </div>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step-card" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  {index < steps.length - 1 && <div className="step-connector" />}
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="download-section section-pad" id="yuklab-olish">
          <div className="container">
            <div className="download-panel">
              <div className="download-decoration" aria-hidden="true" />
              <div className="download-info">
                <div className="eyebrow"><span /> YUKLAB OLISH</div>
                <h2>Tayyorgarlikni bugun boshlang.</h2>
                <p>
                  Avtotest dasturini Windows kompyuteringizga yuklab oling.
                </p>
                <div className="download-product">
                  <span className="windows-icon" aria-hidden="true">
                    <i /><i /><i /><i />
                  </span>
                  <span className="product-copy">
                    <strong>{APP_CONFIG.name}</strong>
                    <small>Windows executable (.exe)</small>
                  </span>
                  <span className="version-badge">Oxirgi versiya · v{APP_CONFIG.version}</span>
                </div>
              </div>
              <div className="download-action">
                {DOWNLOAD_AVAILABLE ? (
                  <DownloadLink className="button button-download">
                    <Download size={18} />
                    Dasturni yuklab olish
                  </DownloadLink>
                ) : (
                  <button className="button button-download is-disabled" disabled>
                    <Download size={18} />
                    Fayl hali mavjud emas
                  </button>
                )}
                <span className="download-platform">Windows kompyuterlari uchun</span>
                <span className="download-safety">
                  <ShieldCheck size={14} />
                  Dasturni faqat ishonchli manbadan yuklab oling.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="container faq-layout">
            <div className="faq-intro">
              <div className="eyebrow"><span /> YORDAM</div>
              <h2>Ko‘p beriladigan savollar</h2>
              <p>Avtotest dasturi haqida qisqacha ma’lumot.</p>
              <div className="faq-help"><CircleHelp size={17} /> Yana savolingiz bormi?</div>
            </div>
            <div className="faq-list">
              {questions.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>
                    <span>{item.question}</span>
                    <ChevronDown size={18} />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Avtotest Uzbekistan. Barcha huquqlar himoyalangan.</span>
            <span className="footer-note"><ShieldCheck size={13} /> Ishonchli manbadan yuklab oling</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
