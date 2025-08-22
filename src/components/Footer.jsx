import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer className="footer flex flex-col md:flex-row justify-around sm:footer-horizontal text-black p-10 gap-10">
        <aside>
          <Link href={"/"} className="text-xl">
            <Image src={"/assets/logo.png"} width={87} height={87} alt="logo" />
          </Link>
          <p>Smart gadgets, trusted electronics.</p>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a href="/" className="link link-hover">Home</a>
          <a href="/products" className="link link-hover">Products</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/munim9munim" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/__munim__" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </nav>
      </footer>

      {/* All Rights Reserved Section */}
      <div className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Electro-Mart. All Rights Reserved.
      </div>
    </div>
  );
}