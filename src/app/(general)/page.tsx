import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { user } = await validateRequest();

  // Redirect to login if not authenticated
  if (!user) {
    return redirect("/login");
  }

  return (
    <main className='w-full h-full flex justify-center items-center'>
        <div className='h-full w-[100%] sm:h-[90%] flex justify-center items-start sm:items-center '>
        </div>
    </main> 
  );
}