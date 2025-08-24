"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const session = useSession();
  const { data: cookie, status } = session;
  //   console.log(session);
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          {status == "authenticated" ? (<Link href={"/dashboard/addProduct"}>Add Product</Link>) : (<Link href={"/login"}>Add Product</Link>)}
        </li>
      </>
    );
  };
  return (
    <div className="navbar bg-white shadow-sm px-3 md:px-6 lg:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image src={"/assets/logo.png"} width={87} height={87} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-black">
        <ul className="menu menu-horizontal px-1 text-lg">{navMenu()}</ul>
      </div>
      <div className="navbar-end">
        <ul className="flex mr-4 gap-4 text-lg">
          {status == "authenticated" ? (
            <div className="flex items-center justify-center gap-4">
            <li>
                <Image
                  className="rounded-full border-2 border-gray-800"
                  src={cookie?.user?.image || "/assets/avater.png"}
                  width={45}
                  height={45}
                  alt="user-image"
                />
              </li>
              <li
                onClick={() => signOut()}
                className="btn btn-outline rounded text-gray-800 hover:bg-gray-800 hover:text-white"
              >
                Logout
              </li>
            </div>
          ) : (
            <>
              <li className="btn btn-outline rounded text-gray-800 hover:bg-gray-800 hover:text-white">
                <Link href={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
