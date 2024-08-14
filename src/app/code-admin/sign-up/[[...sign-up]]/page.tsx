import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
      />
    </main>
  );
}
