// src/app/(main)/search/page.jsx
// gammel kode---Brain kode
import ClassesCard from "@/components/Classes-card";
import SearchForm from "@/components/SearchForm";
import TrainerCard from "@/components/TrainerCard";
import { serverFetch } from "@/lib/server-fetch";
import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
import { Triangle } from "lucide-react";
import { CLASSES_URL, TRAINERS_URL } from "@/constants";

export const metadata = {
  title: "Search",
  description: "Search different training classes.",
};

export default async function Search({ searchParams }) {
  
  let searchQuery = (await searchParams).search;
  let alleAktiviter = await serverFetch(CLASSES_URL);
  let alleTrainers = await serverFetch(TRAINERS_URL);
console.log("ssearchh:",searchQuery);


  let allSearchedResults = [];
  if (searchQuery) {
    allSearchedResults = alleAktiviter.filter(
      (activity) =>
         activity.className.toLowerCase().includes(searchQuery.toLowerCase())  // filter by name
      || activity.classDay.toLowerCase().includes(searchQuery.toLowerCase())  // filter by weeek
      || activity.classDescription.toLowerCase().includes(searchQuery.toLowerCase())  // filter by description
      || activity.trainer.trainerName.toLowerCase().includes(searchQuery.toLowerCase()) // filter by trainer name
    );
  } else {
    allSearchedResults = [];
  }
  return (
    <main className="flex flex-col min-h-screen px-4">
      <div className="w-full flex  h-6 justify-between p-1">
        <Link href="/home" className="text-red-300 flex gap-2 items-center">
          <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
          Back
        </Link>
        <BurgerMenu />
      </div>
      <h1 className="text-lg">Search</h1>
      <div className="bg-gray-300 mb-0  mt-0">
        <SearchForm />
      </div>
      {!searchQuery ? (
        <div className="px-[1em] mt-0">
        <h2 className="text-[1em]  mt-[0.2em] font-semibold">Popular classes</h2>
        <ul className="flex gap-4 overflow-scroll mb-[0.2em]">
          {alleAktiviter.map((activity) => (
            <ClassesCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
      ) :(
        <section>
        {allSearchedResults.length > 0 ? (
          <>
            <h2 className="text-[1em] mt-0 px-[1em] font-semibold">Classes for you</h2>
            <ul className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
              {allSearchedResults.map((activity) => (
                  <ClassesCard key={activity.id} activity={activity} />
              ))}
            </ul>
             </>
        ) : (
          <p className="text-gray-500 mb-0 text-[0.8em] ">
            Your search did not give any results. Try to search for something else.
          </p>
         )}
         </section>
       )}  
      {/* {searchQuery && ( */}
      {searchQuery && allSearchedResults.length > 0 && (
  <section  className="mt-0">
    <h2 className="text-[1em] mt-0 px-[1em] font-semibold">Trainers in Results</h2>
    <ul className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
      {[...new Set(allSearchedResults.map(a => a.trainer.id))].map((trainerId) => (
        <TrainerCard key={trainerId} id={trainerId} />
      ))}
    </ul>
  </section>
)}

    </main>
  );
}
