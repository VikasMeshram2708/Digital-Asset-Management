import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2">
        <h2>Home</h2>
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      </div>
    </main>
  );
}
