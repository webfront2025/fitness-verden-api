export const dynamic = 'force-dynamic'
import ClassesCard from "@/components/Classes-card";
import BurgerMenu from "@/components/BurgerMenu";
import { serverFetch } from "@/lib/server-fetch";
import { CLASSES_URL } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Triangle } from 'lucide-react';

// Fetch alle classer
// gammel kode
export default async function getAllClasses() {
  let classes = []
  try {
    classes = await serverFetch(CLASSES_URL);
  } catch (e) {
    classes = []
  }
  const hasClasses = Array.isArray(classes) && classes.length > 0
  const randomIndex = hasClasses ? Math.floor(Math.random() * classes.length) : 0
  const randomClass = hasClasses ? classes[randomIndex] : null

  return (
    <>
    <header className="flex flex-row justify-between items-center p-4">
      {/* <BackButton /> */}
      {/* <div className='w-full flex justify-between p-4'> */}
                        <Link href='/home' className="text-gray-400 flex gap-2 items-center">
                            <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
                            {/* Back */}
                        </Link>
      <h1 className="text-lg text-center">Popular classes</h1>
      <BurgerMenu />
    </header>
    <main className="w-full">
      {!hasClasses ? (
        <section className="p-6 text-center text-gray-500">
          No classes available right now. Please check back later.
        </section>
      ) : (
        <>
      <section className="p-2">
        {randomClass?.id ? (
          <Link href={`/classes/${randomClass.id}`}>
            <div className="relative w-full h-[40vh]">
            {randomClass?.asset?.url ? (
              <Image
                src={randomClass.asset.url}
                width={500}
                height={400}
                alt="random-photo"
                className="w-full h-full object-cover rounded-xl filter"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
              <h2 className="absolute bottom-4 left-4 text-xl leading-[4rem] text-white font-bold">
                {randomClass?.className || 'Class'}
              </h2>
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-[40vh]">
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">No featured class</span>
            </div>
          </div>
        )}
      </section>
      <section>
        {/* Horizontal Scroll Container */}
        <h2 className="text-lg px-4">Classes for you</h2>
        <div className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
          {Array.isArray(classes) && classes
            .filter((_, index) => index !== randomIndex)
            .map((activity) => (
              <div key={activity.id}  className="flex-shrink-0 min-h-fit space-x-3 p-3">
                <ClassesCard key={activity.id} activity={activity} />
              </div>
            ))}
        </div>
      </section>
      </>
      )}
    </main>
    </>
  );
}
