import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getAllBookings } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  booking: router({
    getBookings: publicProcedure.query(async () => {
      return await getAllBookings();
    }),
    sendMessage: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().min(1),
          date: z.string().min(1),
          time: z.string().min(1),
          language: z.enum(["ar", "en"]),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const botToken = process.env.TELEGRAM_BOT_TOKEN;
          const chatId = process.env.TELEGRAM_CHAT_ID;

          if (!botToken || !chatId) {
            console.error("[Booking] Missing Telegram credentials");
            return {
              success: false,
              message: input.language === "ar"
                ? "حدث خطأ في الإعدادات. يرجى المحاولة لاحقاً."
                : "Configuration error. Please try again later.",
            };
          }

          const message =
            input.language === "ar"
              ? `🎯 *QLINIC SYSTEM - طلب حجز عرض توضيحي جديد*\n\n📝 *الاسم:* ${input.name}\n📧 *البريد:* ${input.email}\n📱 *الهاتف:* ${input.phone}\n📅 *التاريخ:* ${input.date}\n⏰ *الوقت:* ${input.time}`
              : `🎯 *QLINIC SYSTEM - New Demo Booking Request*\n\n📝 *Name:* ${input.name}\n📧 *Email:* ${input.email}\n📱 *Phone:* ${input.phone}\n📅 *Date:* ${input.date}\n⏰ *Time:* ${input.time}`;

          // Send message via Telegram Bot API
          const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
          
          const response = await fetch(telegramUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "Markdown",
            }),
          });

          const result = await response.json();

          if (!response.ok || !result.ok) {
            console.error("[Booking] Telegram API error:", result);
            return {
              success: false,
              message: input.language === "ar"
                ? "حدث خطأ في إرسال الرسالة. يرجى المحاولة لاحقاً."
                : "Failed to send message. Please try again.",
            };
          }

          // Save booking to database
          try {
            await createBooking({
              name: input.name,
              email: input.email,
              phone: input.phone,
              date: input.date,
              time: input.time,
              language: input.language,
              status: "pending",
            });
          } catch (dbError) {
            console.error("[Booking] Failed to save booking to database:", dbError);
          }

          return {
            success: true,
            message: input.language === "ar" 
              ? "تم إرسال رسالتك بنجاح! شكراً لاهتمامك. سيتصل بك فريقنا قريباً."
              : "Message sent successfully! Thank you for your interest. Our team will contact you soon.",
          };
        } catch (error) {
          console.error("[Booking] Error sending message:", error);
          return {
            success: false,
            message: input.language === "ar"
              ? "حدث خطأ في إرسال الرسالة. حاول مرة أخرى."
              : "Failed to send message. Please try again.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
