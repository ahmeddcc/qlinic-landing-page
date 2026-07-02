import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { LogOut, Calendar, Mail, Phone, Clock, User } from "lucide-react";

export default function AdminDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(true);
  const { data: bookings, isLoading } = trpc.booking.getBookings.useQuery(
    undefined,
    { enabled: isAuthorized }
  );

  const ADMIN_PASSWORD = "QLINIC2024";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      setShowPasswordForm(false);
      localStorage.setItem("adminAuth", "true");
    } else {
      alert("كلمة المرور غير صحيحة");
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    setPassword("");
    setShowPasswordForm(true);
    localStorage.removeItem("adminAuth");
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth") === "true";
    if (isAuth) {
      setIsAuthorized(true);
      setShowPasswordForm(false);
    }
  }, []);

  if (showPasswordForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1E3A5F] to-[#0F1F3C] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#0F1F3C] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-black text-2xl">Q</span>
            </div>
            <h1 className="text-2xl font-black text-[#1E3A5F]">QLINIC SYSTEM</h1>
            <p className="text-[#64748B] text-sm mt-2">لوحة التحكم الإدارية</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#1E3A5F] to-[#0F1F3C] text-white rounded-lg font-bold hover:shadow-lg transition-all"
            >
              دخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#0F1F3C] text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">Q</span>
            </div>
            <div>
              <h1 className="text-2xl font-black">QLINIC SYSTEM</h1>
              <p className="text-white/70 text-sm">لوحة التحكم الإدارية</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-[#1E3A5F] mb-2">
            طلبات الحجز
          </h2>
          <p className="text-[#64748B]">
            إجمالي الطلبات: <span className="font-bold text-[#10B981]">{bookings?.length || 0}</span>
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-[#E2E8F0] border-t-[#10B981] rounded-full animate-spin"></div>
            </div>
            <p className="text-[#64748B] mt-4">جاري التحميل...</p>
          </div>
        ) : bookings && bookings.length > 0 ? (
          <div className="grid gap-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-[#10B981]"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User size={18} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748B] font-medium">الاسم</p>
                        <p className="font-bold text-[#1E3A5F]">{booking.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748B] font-medium">البريد الإلكتروني</p>
                        <p className="font-bold text-[#1E3A5F] break-all">{booking.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748B] font-medium">رقم الهاتف</p>
                        <p className="font-bold text-[#1E3A5F]">{booking.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar size={18} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748B] font-medium">التاريخ المفضل</p>
                        <p className="font-bold text-[#1E3A5F]">{booking.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748B] font-medium">الوقت المفضل</p>
                        <p className="font-bold text-[#1E3A5F]">{booking.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : booking.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {booking.status === "pending"
                          ? "قيد الانتظار"
                          : booking.status === "confirmed"
                          ? "مؤكد"
                          : booking.status}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {new Date(booking.createdAt).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-[#E2E8F0]">
            <p className="text-[#64748B] text-lg">لا توجد طلبات حجز حتى الآن</p>
          </div>
        )}
      </div>
    </div>
  );
}
