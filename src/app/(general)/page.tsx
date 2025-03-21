import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import Charts from "./_components/Charts";

export default async function HomePage() {
  const { user } = await validateRequest();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className='w-full h-full flex justify-center items-center'>
        <div className='h-full w-full sm:w-[90%] sm:h-[80%] flex flex-col gap-5 justify-start items-start sm:items-center bg-white sm:rounded-lg '>
          <Charts/>
        </div>
      </main> 
  );
}