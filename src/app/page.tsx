import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import InsertBook from "@/components/actionComponents/insertBook";

export default async function HomePage() {
  const { user } = await validateRequest();

  // Redirect to login if not authenticated
  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>You are logged in.</p>
      <form action="/api/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
      <InsertBook/>
    </div>
  );
}