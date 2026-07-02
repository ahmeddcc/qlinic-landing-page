import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";

const CONTENT = {
  ar: {
    // Navigation
    nav_logo: "QLINIC SYSTEM",
    nav_features: "المميزات",
    nav_why: "لماذا QLINIC",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل معنا",
    nav_cta: "احجز عرضاً توضيحياً",
    booking_modal_title: "احجز عرضاً توضيحياً",
    booking_modal_subtitle: "سيتصل بك فريقنا للتأكيد",
    booking_form_name: "الاسم",
    booking_form_email: "البريد الإلكتروني",
    booking_form_phone: "رقم الهاتف",
    booking_form_date: "التاريخ المفضل",
    booking_form_time: "الوقت المفضل",
    booking_form_submit: "تأكيد الحجز",
    booking_form_cancel: "إلغاء",
    booking_success_title: "تم إرسال رسالتك بنجاح!",
    booking_success_message: "شكراً لاهتمامك. سيتصل بك فريقنا قريباً.",
    nav_lang_toggle: "EN",

    // Hero
    hero_title: "عيادتك بلا فوضى — بلا ورق — بلا فوضى مالية",
    hero_subtitle:
      "QLINIC SYSTEM نظام إدارة عيادة الأسنان الفردية الذي يتولى المهام المتكررة عنك — ويُبقيك دائماً في السيطرة الكاملة.",
    hero_btn_features: "شاهد المميزات",
    hero_btn_contact: "تواصل معنا",
    hero_btn_booking: "احجز عرضاً توضيحياً",
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

    // Footer
    footer_copyright: "© 2024 QLINIC SYSTEM - احدى تطبيقات Noor App. جميع الحقوق محفوظة.",
  },
  en: {
    // Navigation
    nav_logo: "QLINIC SYSTEM",
    nav_features: "Features",
    nav_why: "Why QLINIC",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_cta: "Book a Demo",
    nav_lang_toggle: "AR",

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
    booking_modal_title: "Book a Demo",
    booking_modal_subtitle: "Our team will contact you to confirm",
    booking_form_name: "Name",
    booking_form_email: "Email",
    booking_form_phone: "Phone",
    booking_form_date: "Preferred Date",
    booking_form_time: "Preferred Time",
    booking_form_submit: "Confirm Booking",
    booking_form_cancel: "Cancel",
    booking_success_title: "Message Sent Successfully!",
    booking_success_message: "Thank you for your interest. Our team will contact you soon.",

    // Footer
    footer_copyright: "© 2024 QLINIC SYSTEM - A Noor App Application. All rights reserved.",
  },
};

const WHATSAPP_NUMBER = "201014093162";
const WHATSAPP_MESSAGE = "مرحباً، أود معرفة المزيد عن QLINIC SYSTEM";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const content = CONTENT[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = currentLang === "ar" 
      ? `مرحباً، أود حجز عرض توضيحي لـ QLINIC SYSTEM\n\nالاسم: ${bookingData.name}\nالبريد الإلكتروني: ${bookingData.email}\nرقم الهاتف: ${bookingData.phone}\nالتاريخ المفضل: ${bookingData.date}\nالوقت المفضل: ${bookingData.time}`
      : `Hello, I would like to book a demo for QLINIC SYSTEM\n\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nPhone: ${bookingData.phone}\nPreferred Date: ${bookingData.date}\nPreferred Time: ${bookingData.time}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setBookingSuccess(true);
    setBookingData({ name: "", email: "", phone: "", date: "", time: "" });
    
    setTimeout(() => {
      setIsBookingModalOpen(false);
      setBookingSuccess(false);
    }, 3000);
  };

  const toggleLang = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    setCurrentLang(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = currentLang === "ar" ? WHATSAPP_MESSAGE : "Hi, I'd like to know more about QLINIC SYSTEM";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div dir={currentLang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-xl"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#0F1F3C] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">Q</span>
              </div>
              <span className="font-bold text-[#1E3A5F] hidden sm:inline text-sm">
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
            </div>

            {/* Right side - Language toggle, WhatsApp and CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 bg-[#F8FAFC] text-[#1E3A5F] rounded-full text-xs font-semibold hover:bg-[#E2E8F0] transition-colors"
              >
                {content.nav_lang_toggle}
              </button>
              <button
                onClick={openWhatsApp}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#1DA851] transition-colors shadow-lg"
              >
                <MessageCircle size={16} />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg text-sm font-semibold hover:bg-[#152847] transition-colors hidden sm:inline-block shadow-lg"
              >
                {content.nav_cta}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#1E3A5F]"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-[#E2E8F0]">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_features}
              </button>
              <button
                onClick={() => scrollToSection("why")}
                className="block w-full text-left px-4 py-2 text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_why}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-[#64748B] hover:text-[#1E3A5F] transition-colors font-medium text-sm"
              >
                {content.nav_faq}
              </button>
              <button
                onClick={openWhatsApp}
                className="block w-full mt-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#1DA851] transition-colors"
              >
                {content.nav_contact}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F4F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block">
              <span className="px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-semibold">
                {currentLang === 'ar' ? '✨ الحل الكامل لعيادتك' : '✨ Complete Solution for Your Clinic'}
              </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A5F] leading-tight">
                {content.hero_title}
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-xl">
                {content.hero_subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => scrollToSection("features")}
                  className="px-6 py-3 bg-gradient-to-r from-[#1E3A5F] to-[#0F1F3C] text-white rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
                >
                  {content.hero_btn_features}
                </button>
                <button
                  onClick={openWhatsApp}
                  className="px-6 py-3 border-2 border-[#25D366] text-[#25D366] rounded-lg font-bold hover:bg-[#25D366]/10 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {content.hero_btn_contact}
                </button>
              </div>
            </div>

            {/* Right - Floating Cards */}
            <div className="relative h-96 hidden md:block order-1 md:order-2">
              {/* Card 1 */}
              <div className="absolute top-0 left-0 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-[#E2E8F0] animate-float backdrop-blur-sm"
                style={{ animationDelay: "0s" }}>
                <div className="text-sm text-[#64748B] font-medium">{content.hero_card_1_title}</div>
                <div className="text-3xl font-black text-[#1E3A5F] mt-3">
                  {content.hero_card_1_value}
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute top-32 left-20 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-[#E2E8F0] animate-float backdrop-blur-sm"
                style={{ animationDelay: "0.5s" }}>
                <div className="text-sm text-[#64748B] font-medium">{content.hero_card_2_title}</div>
                <div className="text-3xl font-black text-[#10B981] mt-3">
                  {content.hero_card_2_value}
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute top-64 left-0 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-[#E2E8F0] animate-float backdrop-blur-sm"
                style={{ animationDelay: "1s" }}>
                <div className="text-sm text-[#64748B] font-medium">{content.hero_card_3_title}</div>
                <div className="text-3xl font-black text-[#10B981] mt-3">
                  {content.hero_card_3_value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1E3A5F] to-[#0F1F3C] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">
            {content.problem_solution_title}
          </h2>

          <div className="space-y-4">
            {content.problems.map((item, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-8 p-8 rounded-2xl transition-all hover:shadow-xl ${
                  idx % 2 === 0 ? "bg-[#2A4A7C]" : "bg-[#253D6B]"
                }`}
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0 font-black">✕</div>
                  <div>
                    <p className="font-bold text-lg">{item.problem}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0 font-black">✓</div>
                  <div>
                    <p className="font-bold text-lg text-[#10B981]">{item.solution}</p>
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
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] mb-4">
              {content.features_title}
            </h2>
            <p className="text-lg text-[#64748B]">{content.features_subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 border-2 border-[#E2E8F0] rounded-2xl hover:shadow-2xl hover:border-[#10B981] transition-all bg-gradient-to-br from-[#F8FAFC] to-white group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <span className="text-white font-black text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QLINIC Section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] text-center mb-16">
            {content.why_title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {content.why_cards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border-l-4 border-[#10B981] shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981]/30 transition-colors">
                    <span className="text-[#10B981] font-black">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#64748B] leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] text-center mb-16">
            {content.faq_title}
          </h2>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-[#E2E8F0] rounded-xl overflow-hidden hover:border-[#10B981] transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 text-left bg-gradient-to-r from-[#F8FAFC] to-white hover:from-[#F0F4F8] hover:to-[#F8FAFC] transition-colors flex items-center justify-between"
                >
                  <span className="font-bold text-[#1E3A5F]">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#10B981] transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="p-6 bg-white border-t-2 border-[#E2E8F0]">
                    <p className="text-[#64748B] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#10B981] to-[#059669]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {content.final_cta_title}
          </h2>
          <p className="text-lg text-white/90 mb-8">{content.final_cta_subtitle}</p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="px-8 py-4 bg-white text-[#10B981] rounded-lg font-black text-lg hover:bg-[#F0FDF4] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 mx-auto"
          >
            <MessageCircle size={20} />
            {content.nav_cta}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1E3A5F] to-[#0F1F3C] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white/70">{content.footer_copyright}</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 space-y-6">
            {bookingSuccess ? (
              <div className="text-center py-8">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#1E3A5F] mb-2">
                  {content.booking_success_title}
                </h3>
                <p className="text-[#64748B] text-sm">
                  {content.booking_success_message}
                </p>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-black text-[#1E3A5F]">
                    {content.booking_modal_title}
                  </h3>
                  <p className="text-[#64748B] text-sm mt-2">
                    {content.booking_modal_subtitle}
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_form_name}
                </label>
                <input
                  type="text"
                  required
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                  placeholder={currentLang === "ar" ? "أحمد محمد" : "John Doe"}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_form_email}
                </label>
                <input
                  type="email"
                  required
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_form_phone}
                </label>
                <input
                  type="tel"
                  required
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                  placeholder="01012345678"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_form_date}
                </label>
                <input
                  type="date"
                  required
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_form_time}
                </label>
                <input
                  type="time"
                  required
                  value={bookingData.time}
                  onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-colors font-bold"
                >
                  {content.booking_form_submit}
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-[#E2E8F0] text-[#1E3A5F] rounded-lg hover:bg-[#F8FAFC] transition-colors font-bold"
                >
                  {content.booking_form_cancel}
                </button>
              </div>
            </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1DA851] transition-all transform hover:scale-110 flex items-center justify-center z-40 animate-pulse"
      >
        <MessageCircle size={24} />
      </button>

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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
