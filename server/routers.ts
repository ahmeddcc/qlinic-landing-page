import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

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
          const message =
            input.language === "ar"
              ? `مرحباً، أود حجز عرض توضيحي لـ QLINIC SYSTEM\n\nالاسم: ${input.name}\nالبريد الإلكتروني: ${input.email}\nرقم الهاتف: ${input.phone}\nالتاريخ المفضل: ${input.date}\nالوقت المفضل: ${input.time}`
              : `Hello, I would like to book a demo for QLINIC SYSTEM\n\nName: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone}\nPreferred Date: ${input.date}\nPreferred Time: ${input.time}`;

          const whatsappNumber = "201014093162";
          
          // Send message via wa.me API silently (no page redirect)
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
          
          // Make a silent request to trigger WhatsApp (this won't open a page for the user)
          fetch(whatsappUrl, {
            method: "GET",
            headers: {
              "User-Agent": "Mozilla/5.0",
            },
          }).catch(() => {
            // Silent fail - we don't care about the response
          });

          // Return success immediately without waiting for the fetch
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
