"use client";
import Link from "next/link";

export default function LoginPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) {
      window.location.href = "/";
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="w-full h-full bg-[#E5F6EE] flex justify-center items-center">
      <section className="w-full h-full bg-white flex justify-center items-center
      sm:w-[90%] sm:h-[90%] sm:border-1 sm:border-black sm:rounded-lg
      md:w-[70%] md:h-[80%] 
      lg:w-[700px]">
        <form onSubmit={handleSubmit} className="space-y-5 w-[90%]
        sm:w-[70%]">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="border-1 border-black rounded-md" id="email" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="border-1 border-black rounded-md" id="password" required />
          </div>
          <div className="w-full flex flex-col items-center gap-2 justify-center mt-10">
            <button type="submit" className="w-64 h-8 cursor-pointer rounded-md bg-[#081C14] text-white ">login</button>
            <Link href={'/signup'} className="w-64 h-8 rounded-md bg-white 
            text-[#081C14] border-1 border-[#081C14] flex justify-center items-center">signup</Link>
          </div>
        </form>
      </section>
    </div>
  );
}