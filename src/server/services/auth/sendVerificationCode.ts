import { VerifyIdentityEmail } from "~/server/lib/emails/VerifyIdentityEmail";
import { send } from "~/server/lib/resend";
import { addMinutes } from "date-fns";
import { generateVerificationCode } from "~/server/services/auth/utils/generateVerificationCode";
import { type SendVerificationCodeSchema } from "~/server/api/routers/auth";
import { type z } from "zod";
import { type Context } from "~/server/api/trpc";

export const sendVerificationCode = async ({
  input,
  ctx,
}: {
  input: z.infer<typeof SendVerificationCodeSchema>;
  ctx: Context;
}) => {
  const { code } = await ctx.prisma.verificationCode.create({
    data: {
      code: generateVerificationCode(),
      email: input.email,
      expireAt: addMinutes(new Date(), 5),
    },
  });

  await send(VerifyIdentityEmail, {
    subject: "Verify your email",
    to: input.email,
    variables: {
      email: input.email,
      validationCode: code,
    },
  });

  return { success: true };
};
