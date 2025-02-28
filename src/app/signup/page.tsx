"use client";

export default function SignupPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" required />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}