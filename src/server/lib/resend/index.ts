import { renderAsync } from "@react-email/components";
import React from "react";
import { env } from "~/env.mjs";

type SendOptions<T> = {
  variables?: T;
  to: string;
  subject: string;
};

export const send = async <T extends Record<string, unknown>>(
  EmailTemplate: React.FC<T>,
  options: SendOptions<T>
) => {
  const html = await renderAsync(
    React.createElement(EmailTemplate, options.variables)
  );

  const data = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      html,
      subject: options.subject,
      from: env.FROM_EMAIL,
      to: options.to,
    }),
  });

  return data.json();
};
