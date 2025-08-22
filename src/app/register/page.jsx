// app/signup/page.jsx  (Next.js 13+ App Router)
// or pages/signup.jsx (Next.js Pages Router)

import Image from "next/image";
import signupIllustration from "../../../public/assets/images/login/login.svg";
import RegisterFrom from "./components/RegisterFrom";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex max-w-5xl w-full">
        {/* Left Side Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <Image
            src={signupIllustration}
            alt="Sign Up Illustration"
            className="max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
          <RegisterFrom></RegisterFrom>
        </div>
      </div>
    </div>
  );
}
