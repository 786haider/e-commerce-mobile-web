"use client"
import Link from "next/link";
import { useState } from "react";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import SearchBox from "./searchbox";
import HeartButton from "./heartButton";
import { FaShopify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white  flex-wrap">
      <div className="flex items-center justify-start mx-auto">
        <h1 className="text-black text-4xl ml-5 md:ml-10">
          <b>
            <i>
              <span className="text-gray-600 text-5xl">C</span>yber
            </i>
          </b>
        </h1>
        <SearchBox />
        <div className="hidden md:flex justify-center ml-40 mr-24 gap-10 text-xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/gallery"}>About</Link>
          <Link href={"/contact"}>Contact</Link>           
          <Link href={"/blog"}>Blog</Link>
          <HeartButton />
          <button title="Shop Now" className="text-black  text-2xl"><FaShopify/></button>
          <button title="Your Profile" className="text-black text-3xl ml-1"><CgProfile/></button>
        </div>
      
        <div className="relative">
          <button
            className="md:hidden text-3xl ml-44"
            onClick={toggleMenu}
          >
            <RiMenuUnfold4Fill />
          </button>

          {/* Sliding dropdown menu */}
          <div
            className={`absolute right-0 top-8 transition-transform duration-300 ease-in-out ${
              isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}
            style={{
              backgroundColor: 'black',
              color: 'white',
              zIndex: 1000,
              paddingBottom: '0', // Remove any extra padding
            }}
          >
            <div
              className={`bg-black text-white flex flex-col gap-3 p-6 ${
                isOpen ? 'block' : 'hidden'
              }`}
              onClick={() => setIsOpen(false)} // Close the menu on item click
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/gallery"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/blog"}>Blog</Link>
              <HeartButton/>
               <button className="text-white text-2xl"><FaShopify/></button>
               <button title="Your Profile" className="text-white text-3xl mt-2"><CgProfile/></button>
            </div>
          </div>
        </div>
      </div>

      {/* This div pushes the content down when the menu is open */}
      {isOpen && <div style={{ height: '200px', backgroundColor: 'transparent' }} />}
    </nav>
  );
}
