
// welcome side (første side) velkomstskærm

"use client";
import Image from "next/image";
import welcomeback from "../../public/welcomeback.jpg";
import welcomecenter from "../../public/welcomecenter.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-1/2">
        <Image
          src={welcomeback}
          className="w-full h-[70vh] object-cover rounded-lg"
          alt="Welcome Back"
        />

        {/* Gradient Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute top-1/3 left-5 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Believe <span className="block">Yourself</span>
          </h1>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t -ml-5 border-white"></div>
            <span className="flex-shrink my-5 pl-6 text-white">Train like a pro</span> </div>

        </div>
      </div>

      {/* Foreground Image and Button */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={welcomecenter}
          className="w-full h-full object-cover rounded-lg"
          alt="Welcome Center"
        />

        {/* Call-to-Action Button */}
        <div className="absolute bottom-5 right-[-6rem] transform -translate-x-1/2">
          <Link href="/home">
            <button className="rounded-lg  bg-white text-black px-6 py-3 text-lg
             font-semibold shadow-xl hover:bg-gray-200 transition-all duration-300">
              Start Training
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

