import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h2>Home</h2>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </main>
  );
}
