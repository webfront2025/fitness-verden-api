// src/app/(main)/search/page.jsx
// gammel kode---Brain kode
import ClassesCard from "@/components/Classes-card";
import SearchForm from "@/components/SearchForm";
import TrainerCard from "@/components/TrainerCard";
import { serverFetch } from "@/lib/server-fetch";
import { redirect } from "next/navigation";
import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
import { Triangle } from 'lucide-react';

export default async function Search({ searchParams }) {
  const params = await searchParams;  //  Await before using searchParams
  // let searchQuery = params?.searchResult;
  //W3SCHOL.com
  let searchQuery = params.searchResult?.toLowerCase() || '';
  const searchTerms = searchQuery.split(' ')
    const searchableFields = [
        "className",
        "classDescription",
        "classDay",
        "classTime",
        "trainer.trainerName",
    ]
    function getValue(obj, key) {
      return key.split('.').reduce((acc, part) => acc && acc[part], obj);
  }
 
  let alleAktiviter = await serverFetch("http://localhost:4000/api/v1/classes");
  let alleTrainer = await serverFetch(" http://localhost:4000/api/v1/trainers");
// console.log("allllee",alleTrainer);
  // const searchResults = alleAktiviter.filter((classes) =>
  //   searchTerms.some((term) =>
  //       searchableFields.some((field) => {
  //           const value = getValue(classes, field);
  //           return value?.toLowerCase().includes(term);
  //       })    ))
  function searchFilter(items, terms, fields) {
    return items.filter(function (item) {
        return terms.some(function (term) {
            return fields.some(function (field) {
                const value = getValue(item, field);
                return value?.toLowerCase().includes(term);
            });
        });
    });
}
const searchResultsClasses = searchFilter(alleAktiviter, searchTerms, searchableFields);
const searchResultsTrainer = searchFilter(alleTrainer, searchTerms, searchableFields);

// console.log("TTTTrain",searchResultsTrainer);
  return (
    <main className='absolute inset-0 flex flex-col justify-between'>
                    <div className='w-full flex  h-6 justify-between p-1'>
                        <Link href='/home' className="text-red-300 flex gap-2 items-center">
                            <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
                            Back
                        </Link>
                        <BurgerMenu />
                        </div>
            <h1 className="text-lg b-0 ">Search</h1>
      <div className="bg-gray-300">
        <h1 className="text-white --font-sans: ui-sans-serif, system-ui, sans-serif,Arial text-[36px] ml-12">Search</h1>
        <SearchForm />   
        </div>
          {searchResultsClasses.length > 0 ? (
  <section>
    <h2>Popular classes</h2>
      <ul className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
  {searchResultsClasses.map((aktiv) => (  
    <li key={aktiv.id} className="flex-shrink-0">
      <ClassesCard activity={aktiv} />
    </li>
  ))}
</ul>
  </section>
  
  
) : (
  <p className="text-gray-500">Your search did not give any results. Try to search for something else.</p>
)}
{searchResultsTrainer.length > 0 ? (
<section>
    <h2>Popular Trainer</h2>
      <ul className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
  {searchResultsTrainer.map((aktiv) => (  
    <li key={aktiv.id} className="flex-shrink-0">
      <ClassesCard activity={aktiv} />
    </li>
  ))}
</ul>
  </section>
  ) : (
    <p className="text-gray-500">Your search did not give any results. Try to search for something else.</p>
  )}
{/* komponent har error / fejl */}
 {/* {alleTrainer.map((aktiv) => (
              <div className="flex ">
                <TrainerCard key={aktiv.id} aktiv={aktiv} /> 
                <TrainerCard
                </div>
              ))} */}
    
      </main>
    
  );
}
