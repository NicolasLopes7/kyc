import Head from "next/head";
import { type FormEvent } from "react";
import { api } from "~/utils/api";

export default function Home() {
  const { mutate: sendVerificationCode } =
    api.auth.sendVerificationCode.useMutation({
      onSuccess: () => {
        alert("An email has been sent to your inbox");
      },
      onError: (error) => {
        alert(`Something went wrong\n${error.message}`);
      },
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendVerificationCode({
      // @ts-ignore: form handling will be done later
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      email: e.target.email.value,
    });
  };
  return (
    <>
      <Head>
        <title>Onboarding</title>
        <meta name="description" content="Welcome onboard ACME!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome onboard ACME!</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" id="email" name="email" />
          <button type="submit">Click here to send an email</button>
        </form>
      </main>
    </>
  );
}
