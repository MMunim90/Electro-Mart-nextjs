import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/assets/banner.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Hello there
          </h1>
          <p className="mb-5">
            Discover the latest gadgets, home appliances, and accessories at
            unbeatable prices. At Electro-Mart, we bring you trusted brands and
            fast delivery so you can shop smarter and live better.
          </p>
            <Link className="btn" href={'/products'}>Shop Now</Link>
        </div>
      </div>
    </div>
  );
}
