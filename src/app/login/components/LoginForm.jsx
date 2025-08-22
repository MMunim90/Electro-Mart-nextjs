"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting.....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      //console.log({email, password});
      if (response.ok) {
        toast.success("Logged In SuccessFully");
        router.push("/");
        form.reset();
      } else {
        toast.error("Failed to Logged In");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to Logged In");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Confirm Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
      >
        Sign In
      </button>

      {/* Social Login */}
      <p className="text-center">Or Sign In With</p>
      <SocialLogin></SocialLogin>

      {/* Sign Up Link */}
      <p className="text-center text-sm mt-6">
        Have an account?{" "}
        <a href="/register" className="text-orange-500 hover:underline">
          Sign In
        </a>
      </p>
    </form>
  );
}
