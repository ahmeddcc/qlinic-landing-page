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
          const encodedMessage = encodeURIComponent(message);
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

          // Return the WhatsApp URL for the frontend to open directly
          return {
            success: true,
            message: "Booking prepared successfully",
            whatsappUrl: whatsappUrl,
          };
        } catch (error) {
          console.error("[Booking] Error preparing booking:", error);
          return {
            success: false,
            message: "Failed to prepare booking",
            whatsappUrl: null,
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
