import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import InsertBook from "@/components/actionComponents/insertBook";
import MobileNavbar from "@/components/mobileComponents/mobileNavbar";

export default async function HomePage() {
  const { user } = await validateRequest();

  // Redirect to login if not authenticated
  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="w-[100px] h-[100px] bg-red-500 ">
      {/* <h1>Welcome, {user.username}!</h1>
      <p>You are logged in.</p>
      <form action="/api/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
      <InsertBook/> */}
      
    </main>
  );
}