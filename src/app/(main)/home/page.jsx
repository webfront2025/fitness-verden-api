import ClassesCard from "@/components/Classes-card";
import BurgerMenu from "@/components/BurgerMenu";
import { serverFetch } from "@/lib/server-fetch";
import { API_BASE_URL } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Triangle } from "lucide-react";

export const metadata = {
  title: "Popular Classes",
  description: "Popular training classes.",
};

// Fetch alle classer
// gammel kode
export default async function getAllClasses() {
  const classes = await serverFetch(`${API_BASE_URL}`);
  // console.log("classsss", classes);
  const randomIndex = Math.floor(Math.random() * classes.length);
  const randomClass = classes[randomIndex];

  return (
    <>
      <header className="flex flex-row justify-between items-center p-4">
        <Link href="/home" className="text-gray-400 flex gap-2 items-center">
          <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
          {/* Back */}
        </Link>
        <h1 className="text-lg text-center">Popular classes</h1>
        <BurgerMenu />
      </header>
      <main className="w-full">
        <section className="p-2">
          <Link href={`/classes/${randomClass?.id}`}>
            <div className="relative w-full h-[40vh]">
              <Image
                src={randomClass?.asset.url}
                width={500}
                height={400}
                alt="randomPhoto"
                className="w-full h-full object-cover rounded-xl filter"
              />
              <h2 className="absolute bottom-4 left-4 text-xl leading-[4rem] text-white font-bold">
                {randomClass?.className}
              </h2>
            </div>
          </Link>
        </section>
        <section>
          {/* Horizontal Scroll Container */}
          <h2 className="text-lg px-4">Classes for you</h2>
          <div className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
            {/* <div className="flex space-x-3 p-3"> */}
            {classes
              .filter((_, index) => index !== randomIndex) // Remove the random one
              .map((activity) => (
                <div
                  key={activity.id}
                  className="flex-shrink-0 min-h-fit space-x-3 p-3">
                  <ClassesCard activity={activity} />
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
