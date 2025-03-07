// import BurgerMenu from "@/components/BurgerMenu";

// export default async function navigationMenu() {
//     return(
      
//        <BurgerMenu />
     
       
//     )
// }

"use client";
import { useState } from "react";
import Link from "next/link";
// import { X, Menu } from "lucide-react"; // React Icons
// import { CiMenuBurger } from "react-icons/ci";
import { FaHome, FaSearch, FaCalendarAlt, FaSignOutAlt, FaBars, FaTimes} from "react-icons/fa";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger Icon (☰) */}
      <button onClick={() => setIsOpen(true)} className="text-black text-3xl p-3">
  <FaBars size={32} />
</button>


      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (X) */}
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
  <FaTimes size={24} />
</button>

        {/* Menu Links */}
        <nav className="flex flex-col items-center mt-16 space-y-6 text-lg font-semibold text-black">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/search" onClick={() => setIsOpen(false)}>Search</Link>
          <Link href="/schedule" onClick={() => setIsOpen(false)}>My Schedule</Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </nav>
        {/* <nav className="flex flex-col items-center mt-16 space-y-6 text-lg font-semibold text-black">
  <Link href="/" className="flex items-center space-x-2">
    <FaHome /> <span>Home</span>
  </Link>
  <Link href="/search" className="flex items-center space-x-2">
    <FaSearch /> <span>Search</span>
  </Link>
  <Link href="/schedule" className="flex items-center space-x-2">
    <FaCalendarAlt /> <span>My Schedule</span>
  </Link>
  <Link href="/logout" className="flex items-center space-x-2">
    <FaSignOutAlt /> <span>Log out</span>
  </Link>
</nav> */}

      </div>

      {/* Overlay (Click outside to close) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}