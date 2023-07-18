import Head from "next/head";
import { type FormEvent } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
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
      <main className="flex min-h-screen items-center justify-center gap-4 p-10">
        <section className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">Welcome to ACME!</h1>
              <h3 className="text-slate-400">
                Sign up or log in with your email address.
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                type="email"
                id="email"
                name="email"
                className=" max-w-sm rounded-lg"
                placeholder="hello@acme.com"
              />
              <Button type="submit" className="whitespace-nowrap rounded-xl">
                Continue
              </Button>
            </form>
          </div>
        </section>
        <section className="hidden w-1/2 lg:block">
          <img src="/onboarding-bg.jpeg" />
        </section>
      </main>
    </>
  );
}
