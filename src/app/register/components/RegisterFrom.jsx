"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import React from "react";

export default function RegisterFrom() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    await registerUser({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

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
        Sign Up
      </button>

      <p className="text-center">Or Sign Up With</p>
      {/* Social Sign Up */}
      <SocialLogin></SocialLogin>
      {/* Login Link */}
      <p className="text-center text-sm mt-6">
        Already have an account?{" "}
        <a href="/login" className="text-orange-500 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}
