import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { sendVerificationCode } from "~/server/services/auth/sendVerificationCode";

export const SendVerificationCodeSchema = z.object({
  email: z.string().email(),
});

export const authRouter = createTRPCRouter({
  sendVerificationCode: publicProcedure
    .input(SendVerificationCodeSchema)
    .mutation(sendVerificationCode),
});
