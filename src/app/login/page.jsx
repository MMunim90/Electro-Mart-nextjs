// app/login/page.jsx  (Next.js 13+ App Router)
// or pages/login.jsx (Next.js Pages Router)

import Image from "next/image";
import loginIllustration from "../../../public/assets/images/login/login.svg"; 
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex max-w-5xl w-full">
        {/* Left Side Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <Image
            src={loginIllustration}
            alt="Login Illustration"
            className="max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
}
