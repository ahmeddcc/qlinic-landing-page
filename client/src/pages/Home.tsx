import { useState, useEffect } from "react";

const CONTENT = {
  ar: {
    // Navigation
    nav_logo: "QLINIC SYSTEM",
    nav_features: "المميزات",
    nav_why: "لماذا QLINIC",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل معنا",
    nav_cta: "احجز عرضاً توضيحياً",
    nav_lang_toggle: "EN",

    // Hero
    hero_title: "عيادتك بلا فوضى — بلا ورق — بلا فوضى مالية",
    hero_subtitle:
      "QLINIC SYSTEM نظام إدارة عيادة الأسنان الفردية الذي يتولى المهام المتكررة عنك — ويُبقيك دائماً في السيطرة الكاملة.",
    hero_btn_features: "شاهد المميزات",
    hero_btn_contact: "تواصل معنا",
    hero_card_1_title: "مرضى اليوم",
    hero_card_1_value: "12 مريض",
    hero_card_2_title: "إيرادات هذا الشهر",
    hero_card_2_value: "18,500 ج.م",
    hero_card_3_title: "تذكير واتساب",
    hero_card_3_value: "تم الإرسال ✓",

    // Problem Solution
    problem_solution_title: "ماذا تحل QLINIC؟",
    problems: [
      {
        problem: "سجلات ورقية تضيع وتتلف",
        solution: "ملف رقمي لكل مريض — محفوظ ومنظم دائماً",
      },
      {
        problem: "ترسل تذكيرات واتساب يدوياً",
        solution: "النظام يرسلها تلقائياً بدونك",
      },
      {
        problem: "لا تعرف من دفع ومن لم يدفع",
        solution: "نظام مالي دقيق يتتبع كل جنيه لكل مريض",
      },
      {
        problem: "أوراق أوصاف طبية تضيع",
        solution: "روشتة رقمية تُحفظ وتُرسل على واتساب",
      },
      {
        problem: "لا رؤية واضحة للإيرادات",
        solution: "تقارير يومية وشهرية في ثوانٍ",
      },
      {
        problem: "المرضى ينسون مواعيدهم",
        solution: "تذكير آلي يصلهم قبل الموعد",
      },
    ],

    // Features
    features_title: "كل ما تحتاجه في مكان واحد",
    features_subtitle: "10 مميزات مصممة خصيصاً لعيادة الأسنان الفردية",
    features: [
      {
        title: "موقع العيادة الإلكتروني المدمج",
        description:
          "موقع جاهز يعرض معلومات عيادتك ويستقبل حجوزات المرضى مباشرة — بدون أي تكلفة موقع منفصل.",
      },
      {
        title: "حجز المواعيد من 3 مصادر",
        description:
          "المريض يحجز من الموقع، الاستقبال يدخله مباشرة، أو عبر بوت تيليجرام — كل ذلك في نظام واحد.",
      },
      {
        title: "تذكير آلي عبر الواتساب",
        description:
          "رسالة تأكيد فور الحجز، وتذكير تلقائي قبل الموعد — يقلل غياب المرضى بشكل ملموس.",
      },
      {
        title: "الملف الرقمي الشامل للمريض",
        description:
          "التاريخ الطبي، تفاصيل كل جلسة، الروشتات السابقة، والحساب المالي — كل ذلك في شاشة واحدة.",
      },
      {
        title: "روشتات طبية رقمية",
        description:
          "اكتب الروشتة، احفظها في ملف المريض، واطبعها أو أرسلها لواتساب المريض — في ثوانٍ.",
      },
      {
        title: "إدارة قائمة الانتظار",
        description:
          "الاستقبال يتابع من وصل ومن في الداخل. الطبيب يُعلَم تلقائياً. لا فوضى، لا تداخل.",
      },
      {
        title: "نظام مالي واضح",
        description:
          "سجّل الخدمات وتكاليفها، تتبع المدفوعات لكل مريض، وأدخل المصروفات — كل ذلك في تقارير مالية فورية.",
      },
      {
        title: "التحكم في صلاحيات فريقك",
        description:
          "أنت تحدد من يرى الأرقام المالية ومن لا يراها. كل موظف يصل فقط لما يحتاجه.",
      },
      {
        title: "بوت تيليجرام لمتابعتك من أي مكان",
        description:
          "تابع الحجوزات وتلقَّ إشعارات فورية على تيليجرام — حتى وأنت خارج العيادة.",
      },
      {
        title: "عربي وإنجليزي بالكامل",
        description:
          "النظام يعمل بالعربية والإنجليزية. تخصيص كامل لمعلومات العيادة من لوحة إعدادات بسيطة.",
      },
    ],

    // Why QLINIC
    why_title: "لماذا QLINIC وليس غيره؟",
    why_cards: [
      {
        title: "مصمم لعيادة الأسنان الفردية تحديداً",
        description: "ليس نظاماً عاماً تم تعديله. بُني من الصفر لهذا الغرض.",
      },
      {
        title: "يعمل من المتصفح — أي جهاز",
        description: "لا تثبيت، لا متطلبات تقنية. كمبيوتر، تابلت، أو هاتف.",
      },
      {
        title: "يتواصل مع مرضاك تلقائياً",
        description: "واتساب وتيليجرام مدمجان — التذكيرات تعمل وحدها.",
      },
      {
        title: "فريقك يتعلمه بسرعة",
        description: "واجهة بديهية وبسيطة. لا تدريب مطول، لا تعقيد.",
      },
    ],

    // FAQ
    faq_title: "أسئلة شائعة",
    faqs: [
      {
        q: "هل يمكنني منع موظف الاستقبال من رؤية الأرقام المالية؟",
        a: "نعم. أنت من يحدد صلاحية كل موظف بدقة كاملة — يرى فقط ما تسمح له به.",
      },
      {
        q: "كيف يقلل النظام من تغيب المرضى؟",
        a: "يرسل تذكيراً آلياً عبر الواتساب قبل الموعد — بدون أي تدخل منك.",
      },
      {
        q: "هل يناسب العيادات الكبيرة؟",
        a: "QLINIC مصمم خصيصاً للعيادة الفردية — ليمنحها إمكانيات وكفاءة المجمعات الكبيرة.",
      },
      {
        q: "هل يحتاج أجهزة أو برامج خاصة؟",
        a: "لا. يعمل من أي متصفح على أي جهاز — كمبيوتر، تابلت، أو هاتف.",
      },
      {
        q: "هل تدريب الموظفين صعب؟",
        a: "الواجهة بسيطة وبديهية. فريقك يتأقلم بسرعة دون الحاجة لأي خبرة تقنية.",
      },
    ],

    // Final CTA
    final_cta_title: "جاهز لتحويل عيادتك رقمياً؟",
    final_cta_subtitle: "يعمل من المتصفح. لا تثبيت. لا تعقيد.",
    final_cta_btn: "تواصل معنا الآن ←",

    // Footer
    footer_copyright: "© 2024 QLINIC SYSTEM. جميع الحقوق محفوظة.",
  },
  en: {
    // Navigation
    nav_logo: "QLINIC SYSTEM",
    nav_features: "Features",
    nav_why: "Why QLINIC",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_cta: "Book a Demo",
    nav_lang_toggle: "عربي",

    // Hero
    hero_title: "Your Clinic. Zero Chaos. Zero Paperwork. Zero Financial Mess.",
    hero_subtitle:
      "QLINIC SYSTEM is the dental clinic management platform that handles the repetitive work for you — and keeps you fully in control.",
    hero_btn_features: "See the Features",
    hero_btn_contact: "Contact Us",
    hero_card_1_title: "Today's Patients",
    hero_card_1_value: "12",
    hero_card_2_title: "This Month's Revenue",
    hero_card_2_value: "18,500",
    hero_card_3_title: "WhatsApp Reminder",
    hero_card_3_value: "Sent ✓",

    // Problem Solution
    problem_solution_title: "What Does QLINIC Solve?",
    problems: [
      {
        problem: "Paper records that get lost",
        solution: "A digital file per patient — always organized",
      },
      {
        problem: "Manually sending WhatsApp reminders",
        solution: "System sends them automatically",
      },
      {
        problem: "No idea who paid and who owes",
        solution: "Precise financial tracker per patient",
      },
      {
        problem: "Prescriptions patients lose or can't read",
        solution: "Digital prescriptions saved & sent via WhatsApp",
      },
      {
        problem: "No clear picture of revenue",
        solution: "Daily & monthly reports ready in seconds",
      },
      {
        problem: "Patients forgetting appointments",
        solution: "Automated reminders before each visit",
      },
    ],

    // Features
    features_title: "Everything You Need in One Place",
    features_subtitle: "10 features purpose-built for solo dental clinics",
    features: [
      {
        title: "Built-in Clinic Website",
        description:
          "A ready-made public page showcasing your clinic and accepting patient bookings — no separate website needed.",
      },
      {
        title: "Appointments from 3 Channels",
        description:
          "Patients book via the website, reception adds them directly, or via Telegram bot — all in one system.",
      },
      {
        title: "Automated WhatsApp Reminders",
        description:
          "Confirmation on booking and an automatic reminder before the visit — noticeably reduces no-shows.",
      },
      {
        title: "Complete Digital Patient File",
        description:
          "Medical history, session notes, past prescriptions, and financial record — all in one screen.",
      },
      {
        title: "Digital Prescriptions",
        description:
          "Write the prescription, save it, then print or send it to the patient via WhatsApp — in seconds.",
      },
      {
        title: "Queue Management",
        description:
          "Reception tracks who arrived and who is inside. Doctor is notified in real time. No confusion.",
      },
      {
        title: "Clear Financial System",
        description:
          "Log services and costs, track payments per patient, record expenses — all reflected in instant reports.",
      },
      {
        title: "Staff Permission Control",
        description:
          "You decide who sees financial data. Every staff member accesses only what they need.",
      },
      {
        title: "Telegram Bot for Remote Monitoring",
        description:
          "Follow bookings and get instant Telegram notifications — even when you're away from the clinic.",
      },
      {
        title: "Full Arabic & English Support",
        description:
          "The system runs in both Arabic and English. Full clinic customization from a simple settings panel.",
      },
    ],

    // Why QLINIC
    why_title: "Why QLINIC and Not Something Else?",
    why_cards: [
      {
        title: "Built Specifically for Solo Dental Clinics",
        description: "Not a generic system repurposed. Built from the ground up for this purpose.",
      },
      {
        title: "Browser-Based — Any Device",
        description: "No installation, no technical requirements. Desktop, tablet, or phone.",
      },
      {
        title: "Communicates with Patients Automatically",
        description: "WhatsApp and Telegram built in — reminders run on their own.",
      },
      {
        title: "Your Team Learns It Fast",
        description: "Intuitive, clean interface. No lengthy training, no complexity.",
      },
    ],

    // FAQ
    faq_title: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can I stop reception staff from seeing financial data?",
        a: "Yes. You control each staff member's access with full precision — they see only what you allow.",
      },
      {
        q: "How does the system reduce patient no-shows?",
        a: "It automatically sends a WhatsApp reminder before each appointment — no action needed from you.",
      },
      {
        q: "Is it suitable for larger clinics?",
        a: "QLINIC is designed for solo clinics — giving them the power and efficiency of large multi-doctor practices.",
      },
      {
        q: "Does it require special hardware or software?",
        a: "No. It runs from any browser on any device — desktop, tablet, or phone.",
      },
      {
        q: "Is training staff difficult?",
        a: "The interface is clean and intuitive. Your team gets comfortable with it quickly, no technical background needed.",
      },
    ],

    // Final CTA
    final_cta_title: "Ready to Take Your Clinic Digital?",
    final_cta_subtitle: "Browser-based. No installation. No complexity.",
    final_cta_btn: "Get in Touch →",

    // Footer
    footer_copyright: "© 2024 QLINIC SYSTEM. All rights reserved.",
  },
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const content = CONTENT[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    setCurrentLang(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div dir={currentLang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="font-bold text-[#1E3A5F] hidden sm:inline">
                {content.nav_logo}
              </span>
            </div>

            {/* Center Nav Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_features}
              </button>
              <button
                onClick={() => scrollToSection("why")}
                className="text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_why}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_faq}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_contact}
              </button>
            </div>

            {/* Right side - Language toggle and CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 bg-[#F8FAFC] text-[#1E3A5F] rounded-full text-xs font-semibold hover:bg-[#E2E8F0] transition-colors"
              >
                {content.nav_lang_toggle}
              </button>
              <button className="px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-semibold hover:bg-[#059669] transition-colors hidden sm:inline-block">
                {content.nav_cta}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight">
                {content.hero_title}
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {content.hero_subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="px-6 py-3 bg-[#1E3A5F] text-white rounded-lg font-semibold hover:bg-[#152847] transition-colors"
                >
                  {content.hero_btn_features}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 border-2 border-[#1E3A5F] text-[#1E3A5F] rounded-lg font-semibold hover:bg-[#F8FAFC] transition-colors"
                >
                  {content.hero_btn_contact}
                </button>
              </div>
            </div>

            {/* Right - Floating Cards */}
            <div className="relative h-96 hidden md:block">
              {/* Card 1 */}
              <div className="absolute top-0 left-0 w-64 bg-white rounded-xl shadow-lg p-6 border border-[#E2E8F0] animate-float"
                style={{ animationDelay: "0s" }}>
                <div className="text-sm text-[#64748B]">{content.hero_card_1_title}</div>
                <div className="text-2xl font-bold text-[#1E3A5F] mt-2">
                  {content.hero_card_1_value}
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute top-32 left-20 w-64 bg-white rounded-xl shadow-lg p-6 border border-[#E2E8F0] animate-float"
                style={{ animationDelay: "0.5s" }}>
                <div className="text-sm text-[#64748B]">{content.hero_card_2_title}</div>
                <div className="text-2xl font-bold text-[#10B981] mt-2">
                  {content.hero_card_2_value}
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute top-64 left-0 w-64 bg-white rounded-xl shadow-lg p-6 border border-[#E2E8F0] animate-float"
                style={{ animationDelay: "1s" }}>
                <div className="text-sm text-[#64748B]">{content.hero_card_3_title}</div>
                <div className="text-2xl font-bold text-[#10B981] mt-2">
                  {content.hero_card_3_value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            {content.problem_solution_title}
          </h2>

          <div className="space-y-4">
            {content.problems.map((item, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-8 p-6 rounded-lg transition-colors ${
                  idx % 2 === 0 ? "bg-[#2A4A7C]" : "bg-[#253D6B]"
                }`}
              >
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">✕</div>
                  <div>
                    <p className="font-semibold">{item.problem}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#10B981]">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              {content.features_title}
            </h2>
            <p className="text-lg text-[#64748B]">{content.features_subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border border-[#E2E8F0] rounded-lg hover:shadow-lg transition-shadow bg-[#F8FAFC]"
              >
                <div className="w-12 h-12 bg-[#10B981] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QLINIC Section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] text-center mb-16">
            {content.why_title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {content.why_cards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-lg border-l-4 border-[#10B981] shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] text-center mb-16">
            {content.faq_title}
          </h2>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E2E8F0] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 text-left bg-[#F8FAFC] hover:bg-[#E2E8F0] transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-[#1E3A5F]">{faq.q}</span>
                  <span
                    className={`text-[#10B981] font-bold transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="p-6 bg-white border-t border-[#E2E8F0]">
                    <p className="text-[#64748B] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#10B981]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {content.final_cta_title}
          </h2>
          <p className="text-lg text-white/90 mb-8">{content.final_cta_subtitle}</p>
          <button className="px-8 py-4 bg-white text-[#10B981] rounded-lg font-bold text-lg hover:bg-[#F0FDF4] transition-colors">
            {content.final_cta_btn}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white/70">{content.footer_copyright}</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
