// import ClassesCard from "@/components/Classes-card";
// import BurgerMenu from "@/components/BurgerMenu";
// import BackButton from "@/components/BackButton";
// import { serverFetch } from "@/lib/server-fetch";
// import { API_BASE_URL } from "@/constants";
// import { IoTriangle } from "react-icons/io5";
// import { CiMenuBurger } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import Link from "next/link";
// import Image from "next/image";

// // Fetch alle classer
// // gammel kode
// export default async function getAllClasses() {
//   const classes = await serverFetch(`${API_BASE_URL}`);
//   console.log("classsss", classes);

//   const randomNumber = Math.floor(Math.random() * 3);
//   const randomImage = await serverFetch(
//     `http://localhost:4000/api/v1/classes/${randomNumber}`
//   );

//   return (
//     <>
//     <header className="flex flex-row justify-between items-center p-4">
//       <BackButton />
//       <h1 className="text-lg text-center">Popular classes</h1>
//       <BurgerMenu />
//     </header>
//     <main className="w-full">
      
//       <section className="p-2">
//         <Link href={`/classes/${randomImage.id}`}>
//           <div className="relative w-full h-[40vh]">
//             <Image
//               src={randomImage.asset.url}
//               width={500}
//               height={400}
//               alt="random-photo"
//               className="w-full h-full object-cover rounded-xl filter"
//             />
//             <h2 className="absolute bottom-4 left-4 text-xl leading-[4rem] text-white font-bold">
//               {randomImage.className}
//             </h2>
//           </div>
//         </Link>
//       </section>
//       <section>
//         {/* Horizontal Scroll Container */}
//         <h2 className="text-lg px-4">Classes for you</h2>
//         <div className="flex overflow-x-auto gap-4 w-full p-4 no-scrollbar">
//           {/* <div className="flex space-x-3 p-3"> */}
//           {classes
//             .filter((_, index) => index !== randomNumber - 1) // fejern  random billede
//             .map((activity) => (
//               <div className="flex-shrink-0 min-h-fit flex space-x-3 p-3">
//                 <ClassesCard key={activity.id} activity={activity} />
//               </div>
//             ))}
//         </div>
//       </section>
//     </main>
//     </>
//   );
// }

import ClassesCard from "@/components/Classes-card";
import BurgerMenu from "@/components/BurgerMenu";
import BackButton from "@/components/BackButton";
import { serverFetch } from "@/lib/server-fetch";
import { API_BASE_URL } from "@/constants";
import { IoTriangle } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

// Fetch alle classer
// gammel kode
export default async function getAllClasses() {
  const classes = await serverFetch(`${API_BASE_URL}`);
  // console.log("classsss", classes);

  const randomNumber = Math.floor(Math.random() * 3);
  const randomImage = await serverFetch(
    `http://localhost:4000/api/v1/classes/${randomNumber}`
  );

  return (
    <>
    <header className="flex flex-row justify-between items-center p-4">
      <BackButton />
      <h1 className="text-lg text-center">Popular classes</h1>
      <BurgerMenu />
    </header>
    <main className="w-full">
      
      <section className="p-2">
        <Link href={`/classes/${randomImage.id}`}>
          <div className="relative w-full h-[40vh]">
            <Image
              src={randomImage.asset.url}
              width={500}
              height={400}
              alt="random-photo"
              className="w-full h-full object-cover rounded-xl filter"
            />
            <h2 className="absolute bottom-4 left-4 text-xl leading-[4rem] text-white font-bold">
              {randomImage.className}
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
            .filter((_, index) => index !== randomNumber - 1) // fejern  random billede
            .map((activity) => (
              <div className="flex-shrink-0 min-h-fit flex space-x-3 p-3">
                <ClassesCard key={activity.id} activity={activity} />
              </div>
            ))}
        </div>
      </section>
    </main>
    </>
  );
}