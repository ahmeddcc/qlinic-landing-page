import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Calendar, Clock, User, Mail, Phone } from "lucide-react";

export default function Home() {
  const [currentLang, setCurrentLang] = useState("ar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "ar" ? "en" : "ar");
  };

  const content = currentLang === "ar" ? {
    // Navigation
    nav_logo: "QLINIC SYSTEM",
    nav_features: "المميزات",
    nav_why: "لماذا QLINIC",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "التواصل",
    nav_cta: "احجز عرضاً توضيحياً",
    nav_lang_toggle: "EN",

    // Hero
    hero_title: "نظام إدارة عيادة أسنان ذكي",
    hero_subtitle: "أتمتة كاملة لعيادتك • إدارة مرضى احترافية • تقارير مالية فورية • تذكيرات واتساب تلقائية",
    hero_cta_primary: "احجز عرضاً توضيحياً",
    hero_cta_secondary: "تواصل معنا",

    // Stats
    stats_title: "ثقة من أطباء الأسنان",
    stats: [
      { label: "عيادة مستخدمة", value: "500+" },
      { label: "ساعات موفرة شهرياً", value: "10,000+" },
      { label: "معدل الرضا", value: "98%" },
    ],

    // Problem Solution
    problem_solution_title: "المشاكل التي يحلها QLINIC",
    problems: [
      {
        problem: "سجلات ورقية تضيع",
        solution: "ملف رقمي منظم لكل مريض",
      },
      {
        problem: "تذكيرات يدوية متعبة",
        solution: "تذكيرات واتساب تلقائية",
      },
      {
        problem: "عدم معرفة من دفع ومن لم يدفع",
        solution: "نظام مالي دقيق وفوري",
      },
      {
        problem: "وصفات طبية تضيع",
        solution: "روشتات رقمية محفوظة",
      },
      {
        problem: "لا رؤية واضحة للإيرادات",
        solution: "تقارير يومية وشهرية",
      },
      {
        problem: "مرضى ينسون مواعيدهم",
        solution: "تذكير آلي قبل الموعد",
      },
    ],

    // Features
    features_title: "10 مميزات قوية",
    features_subtitle: "كل ما تحتاجه لإدارة عيادتك بكفاءة",
    features: [
      {
        title: "موقع عيادة مدمج",
        description: "موقع جاهز للعيادة يستقبل حجوزات المرضى مباشرة",
      },
      {
        title: "حجز المواعيد من 3 مصادر",
        description: "الموقع • الاستقبال المباشر • بوت تيليجرام",
      },
      {
        title: "تذكيرات واتساب آلية",
        description: "تأكيد الحجز وتذكير قبل الموعد",
      },
      {
        title: "ملف المريض الرقمي",
        description: "التاريخ الطبي • الجلسات • الروشتات • الحساب المالي",
      },
      {
        title: "روشتات رقمية",
        description: "اكتب وأرسل للمريض عبر واتساب",
      },
      {
        title: "إدارة قائمة الانتظار",
        description: "تتبع المرضى في الوقت الفعلي",
      },
      {
        title: "نظام مالي متقدم",
        description: "تتبع الخدمات والمدفوعات والمصروفات",
      },
      {
        title: "التحكم في الصلاحيات",
        description: "تحديد من يرى البيانات المالية",
      },
      {
        title: "بوت تيليجرام",
        description: "تابع عيادتك من أي مكان",
      },
      {
        title: "دعم كامل عربي وإنجليزي",
        description: "واجهة كاملة بلغتين",
      },
    ],

    // Why QLINIC
    why_title: "لماذا QLINIC؟",
    why_cards: [
      {
        title: "مصمم لعيادات الأسنان",
        description: "ليس نظام عام • بُني من الصفر لهذا الغرض",
      },
      {
        title: "يعمل من المتصفح",
        description: "لا تثبيت • لا متطلبات تقنية",
      },
      {
        title: "يتواصل مع مرضاك تلقائياً",
        description: "واتساب وتيليجرام مدمجان",
      },
      {
        title: "فريقك يتعلمه بسرعة",
        description: "واجهة بديهية وسهلة الاستخدام",
      },
    ],

    // FAQ
    faq_title: "أسئلة شائعة",
    faq: [
      {
        q: "هل يمكن منع موظفي الاستقبال من رؤية البيانات المالية؟",
        a: "نعم، لديك تحكم كامل في الصلاحيات. كل موظف يرى فقط ما يحتاجه.",
      },
      {
        q: "كيف يقلل النظام من تغيب المرضى؟",
        a: "تذكيرات واتساب تلقائية قبل الموعد بـ 24 ساعة و 1 ساعة.",
      },
      {
        q: "هل يناسب العيادات الكبيرة؟",
        a: "نعم، النظام قابل للتوسع ويدعم عدد غير محدود من المرضى والموظفين.",
      },
      {
        q: "هل يحتاج أجهزة أو برامج خاصة؟",
        a: "لا، يعمل من أي متصفح على أي جهاز (كمبيوتر، تابلت، هاتف).",
      },
      {
        q: "هل تدريب الموظفين صعب؟",
        a: "لا، الواجهة بديهية جداً. معظم الموظفين يتعلمونها في ساعات قليلة.",
      },
    ],

    // CTA
    cta_title: "جاهز لتحويل عيادتك؟",
    cta_subtitle: "ابدأ مع QLINIC اليوم وشاهد الفرق",
    cta_button: "احجز عرضاً توضيحياً الآن",

    // Booking Modal
    booking_title: "احجز عرضاً توضيحياً",
    booking_subtitle: "سيتصل بك فريقنا للتأكيد",
    booking_name: "الاسم",
    booking_email: "البريد الإلكتروني",
    booking_phone: "رقم الهاتف",
    booking_date: "التاريخ المفضل",
    booking_time: "الوقت المفضل",
    booking_submit: "تأكيد الحجز",
    booking_cancel: "إلغاء",

    // Footer
    footer_text: "© 2024 QLINIC SYSTEM - احدى تطبيقات Noor App. جميع الحقوق محفوظة.",
  } : {
    // Navigation
    nav_logo: "QLINIC SYSTEM",
    nav_features: "Features",
    nav_why: "Why QLINIC",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_cta: "Book a Demo",
    nav_lang_toggle: "AR",

    // Hero
    hero_title: "Smart Dental Clinic Management System",
    hero_subtitle: "Complete automation for your clinic • Professional patient management • Instant financial reports • Automatic WhatsApp reminders",
    hero_cta_primary: "Book a Demo",
    hero_cta_secondary: "Contact Us",

    // Stats
    stats_title: "Trusted by Dentists",
    stats: [
      { label: "Clinics Using", value: "500+" },
      { label: "Hours Saved Monthly", value: "10,000+" },
      { label: "Satisfaction Rate", value: "98%" },
    ],

    // Problem Solution
    problem_solution_title: "Problems QLINIC Solves",
    problems: [
      {
        problem: "Paper records get lost",
        solution: "Organized digital file for each patient",
      },
      {
        problem: "Manual reminder messages",
        solution: "Automatic WhatsApp reminders",
      },
      {
        problem: "Don't know who paid",
        solution: "Accurate financial tracking",
      },
      {
        problem: "Lost prescriptions",
        solution: "Digital prescriptions saved",
      },
      {
        problem: "No revenue visibility",
        solution: "Daily & monthly reports",
      },
      {
        problem: "Patients forget appointments",
        solution: "Automatic appointment reminders",
      },
    ],

    // Features
    features_title: "10 Powerful Features",
    features_subtitle: "Everything you need to run your clinic efficiently",
    features: [
      {
        title: "Built-in Clinic Website",
        description: "Ready-made website that accepts patient bookings",
      },
      {
        title: "Appointments from 3 Channels",
        description: "Website • Direct reception • Telegram bot",
      },
      {
        title: "Automatic WhatsApp Reminders",
        description: "Booking confirmation and pre-appointment reminder",
      },
      {
        title: "Complete Digital Patient File",
        description: "Medical history • Sessions • Prescriptions • Payments",
      },
      {
        title: "Digital Prescriptions",
        description: "Write and send to patient via WhatsApp",
      },
      {
        title: "Queue Management",
        description: "Real-time patient tracking",
      },
      {
        title: "Advanced Financial System",
        description: "Track services, payments, and expenses",
      },
      {
        title: "Permission Control",
        description: "Control who sees financial data",
      },
      {
        title: "Telegram Bot",
        description: "Monitor your clinic from anywhere",
      },
      {
        title: "Full Arabic & English Support",
        description: "Complete bilingual interface",
      },
    ],

    // Why QLINIC
    why_title: "Why QLINIC?",
    why_cards: [
      {
        title: "Built for Dental Clinics",
        description: "Not a generic system • Built from the ground up",
      },
      {
        title: "Browser-Based",
        description: "No installation • No technical requirements",
      },
      {
        title: "Automatic Patient Communication",
        description: "WhatsApp and Telegram built-in",
      },
      {
        title: "Easy to Learn",
        description: "Intuitive interface • Quick training",
      },
    ],

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq: [
      {
        q: "Can I prevent reception staff from seeing financial data?",
        a: "Yes, you have full control over permissions. Each staff member sees only what they need.",
      },
      {
        q: "How does the system reduce patient no-shows?",
        a: "Automatic WhatsApp reminders 24 hours and 1 hour before appointments.",
      },
      {
        q: "Is it suitable for larger clinics?",
        a: "Yes, the system is scalable and supports unlimited patients and staff.",
      },
      {
        q: "Does it require special hardware or software?",
        a: "No, it works from any browser on any device (computer, tablet, phone).",
      },
      {
        q: "Is staff training difficult?",
        a: "No, the interface is very intuitive. Most staff learn it in just a few hours.",
      },
    ],

    // CTA
    cta_title: "Ready to Transform Your Clinic?",
    cta_subtitle: "Start with QLINIC today and see the difference",
    cta_button: "Book a Demo Now",

    // Booking Modal
    booking_title: "Book a Demo",
    booking_subtitle: "Our team will contact you to confirm",
    booking_name: "Name",
    booking_email: "Email",
    booking_phone: "Phone Number",
    booking_date: "Preferred Date",
    booking_time: "Preferred Time",
    booking_submit: "Confirm Booking",
    booking_cancel: "Cancel",

    // Footer
    footer_text: "© 2024 QLINIC SYSTEM - A Noor App Application. All rights reserved.",
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `مرحباً، أود حجز عرض توضيحي لـ QLINIC SYSTEM\nالاسم: ${bookingData.name}\nالبريد: ${bookingData.email}\nالهاتف: ${bookingData.phone}\nالتاريخ المفضل: ${bookingData.date}\nالوقت المفضل: ${bookingData.time}`;
    const whatsappUrl = `https://wa.me/201014093162?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    setIsBookingOpen(false);
    setBookingData({ name: "", email: "", phone: "", date: "", time: "" });
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/201014093162", "_blank");
  };

  return (
    <div className="min-h-screen bg-white" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">Q</span>
              </div>
              <span className="font-black text-[#1E3A5F]">{content.nav_logo}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#64748B] hover:text-[#1E3A5F] transition-colors">{content.nav_features}</a>
              <a href="#why" className="text-[#64748B] hover:text-[#1E3A5F] transition-colors">{content.nav_why}</a>
              <a href="#faq" className="text-[#64748B] hover:text-[#1E3A5F] transition-colors">{content.nav_faq}</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 text-sm font-medium text-[#64748B] hover:text-[#1E3A5F] transition-colors"
              >
                {content.nav_lang_toggle}
              </button>
              <button
                onClick={handleWhatsappClick}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-colors font-medium"
              >
                WhatsApp
              </button>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="hidden md:block px-6 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#0F1F3C] transition-colors font-medium"
              >
                {content.nav_cta}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-[#64748B] hover:text-[#1E3A5F]">{content.nav_features}</a>
              <a href="#why" className="block text-[#64748B] hover:text-[#1E3A5F]">{content.nav_why}</a>
              <a href="#faq" className="block text-[#64748B] hover:text-[#1E3A5F]">{content.nav_faq}</a>
              <button
                onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}
                className="w-full px-4 py-2 bg-[#1E3A5F] text-white rounded-lg font-medium"
              >
                {content.nav_cta}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F4F8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-black text-[#1E3A5F] leading-tight">
                  {content.hero_title}
                </h1>
                <p className="text-lg text-[#64748B] leading-relaxed">
                  {content.hero_subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-bold text-lg"
                >
                  {content.hero_cta_primary}
                </button>
                <button
                  onClick={handleWhatsappClick}
                  className="px-8 py-4 border-2 border-[#1E3A5F] text-[#1E3A5F] rounded-xl hover:bg-[#1E3A5F] hover:text-white transition-colors font-bold text-lg"
                >
                  {content.hero_cta_secondary}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0]">
                {content.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-black text-[#10B981]">{stat.value}</div>
                    <div className="text-sm text-[#64748B]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-[#1E3A5F]/20 rounded-3xl"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-[#10B981]/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#1E3A5F]/20 rounded-full blur-3xl"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-[#64748B] font-medium">{content.stats_title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#1E3A5F] text-center mb-16">
            {content.problem_solution_title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {content.problems.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <div className="flex gap-4 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                  <p className="font-bold text-[#1E3A5F]">{item.problem}</p>
                </div>
                <div className="flex gap-4 pl-12">
                  <div className="w-8 h-8 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0 -ml-12">
                    <span className="text-[#10B981] font-bold">✓</span>
                  </div>
                  <p className="text-[#10B981] font-bold">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1E3A5F] mb-4">
              {content.features_title}
            </h2>
            <p className="text-lg text-[#64748B]">{content.features_subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#10B981] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center mb-5 text-white font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QLINIC Section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#1E3A5F] text-center mb-16">
            {content.why_title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {content.why_cards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl border-l-4 border-[#10B981] shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#64748B] text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-[#1E3A5F] text-center mb-16">
            {content.faq_title}
          </h2>

          <div className="space-y-4">
            {content.faq.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#10B981] to-[#059669]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            {content.cta_title}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {content.cta_subtitle}
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-8 py-4 bg-white text-[#10B981] rounded-xl hover:bg-[#F8FAFC] transition-colors font-bold text-lg"
          >
            {content.cta_button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#1E3A5F] text-white text-center">
        <p className="text-sm">{content.footer_text}</p>
      </footer>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-[#1E3A5F]">
                {content.booking_title}
              </h3>
              <p className="text-[#64748B] text-sm mt-2">
                {content.booking_subtitle}
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_name}
                </label>
                <input
                  type="text"
                  required
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                  placeholder="أحمد محمد"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_email}
                </label>
                <input
                  type="email"
                  required
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981]"
                  placeholder="ahmed@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                  {content.booking_phone}
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
                  {content.booking_date}
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
                  {content.booking_time}
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
                  {content.booking_submit}
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="flex-1 px-6 py-3 border border-[#E2E8F0] text-[#1E3A5F] rounded-lg hover:bg-[#F8FAFC] transition-colors font-bold"
                >
                  {content.booking_cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E2E8F0] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <span className="font-bold text-[#1E3A5F]">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#10B981] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <p className="text-[#64748B]">{answer}</p>
        </div>
      )}
    </div>
  );
}
