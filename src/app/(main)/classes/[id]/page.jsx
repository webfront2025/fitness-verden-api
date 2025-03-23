// import { serverFetch } from "@/lib/server-fetch";
// import BurgerMenu from "@/components/BurgerMenu";
// // import BackButton from "@/components/BackButton";
// import Image from "next/image";
// import { Triangle } from 'lucide-react';
// import { API_BASE_URL } from "@/constants"
// import Link from 'next/link';
// import SignupButton from "@/components/SignupButton";


// export default async function generateMetadata({ params }) {
// 	const aktId = (await params).id
// console.log(aktId);


// // Fetch classe detailer / side med detaljer for de enkelte hold
// // gammel kode
// const aktivites = await serverFetch(`http://localhost:4000/api/v1/classes/${aktId}`);
// //   console.log(aktivites);
// const ratings = await fetch(`http://localhost:4000/api/v1/classes/${id}/ratings`).then(r => r.json())

// const trainerId = aktivites.trainer.id;
// //    console.log("trainerId",trainerIdd);
// const trainerFetch = await serverFetch(`http://localhost:4000/api/v1/trainers/${trainerId}`);
// console.log(trainerFetch);

// const user = await getCurrentUser()

// const userIsSignedUp = user?.classes?.some((cls) => cls.id == id)
// return (
//   <main>
//             <section className="relative w-full h-[50vh] flex flex-col">
//         <Image 
//           src={aktivites.asset.url}
//           width={600}
//           height={300}
//           className="w-full h-full object-cover rounded-lg"
//           alt=""
//         />
//         <div className='absolute inset-0 flex flex-col justify-between'>
//                     <div className='w-full flex justify-between p-4'>
//                         <Link href='/home' className="text-red-300 flex gap-2 items-center">
//                             <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
//                             Back
//                         </Link>
//                         <BurgerMenu />
//                         </div>
//                     <div className='pl-4 grid grid-cols-2 grid-rows-[1fr_1fr_40px] pb-6'>

//                         <h1 className="text-[42px] leading-[3rem] text-white font-bold mb-2 
//                                     col-span-2 col-start-1 row-start-1 row-span-2 self-center">
//                             {aktivites.className}
//                         </h1>
//                         <div className='flex flex-col items-start gap-2 
//                             row-start-3 col-start-1'>
//                             {/* <Ratings classId={id} />
//                             <RatingModal classId={id} className={details.className} ratings={ratings} /> */}
//                         </div>

//                         <div className=' row-start-2 col-start-2 justify-self-end mt-2'>
//                             <SignupButton classId={aktId} classDay={aktivites.classDay} user={user} userIsSignedUp={userIsSignedUp} />
                            
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className='p-4'>
//                 <h2 className='text-lg/6'>Schedule</h2>
//                 <p className='flex justify-between text-xs'>{aktivites.classDay} <span>{aktivites.classTime}</span></p>
//                 <p className='text-base pt-4'>{aktivites.classDescription}</p>
//             </section>

//             <section className='px-4 pb-4'>
//                 <h2 className='text-lg'>Trainer</h2>
//                 {/* <CardTrainer id={details.trainerId} /> */}
//                 <Image 
//           src={trainerFetch.asset.url}
//           width={100}
//           height={150}
//           className="rounded-lg"
//           alt=""
//         />
//         {/* </div> */}
//         <p className="mt-2">{trainerFetch.trainerName}</p>
//             </section>

//         </main>
//     )
//     //  <BackButton />
//     //  <h1>Detailes</h1>
//     //    <BurgerMenu />
//     // <div className="bg-white">
//     //  {/* classes Image med Tilmeld knap */}
//     //   <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
//     //     <button className="absolute bottom-4 w-[11em] left-1/3 transform -translate-x-1/2b bg-[#5E2E53] text-white py-2 px-5 rounded-lg">
//     //       Sign up
//     //     </button>
//     //   </div>

//     //   {/* Activity Details */}
//     //   <div className="mt-5 p-3 text-black ">
//     //     <h1 className="text-xl font-bold">{aktivites.className}</h1>
//     //     <p>Schedule</p>
//     //     <p className="">{aktivites.classDay} </p>
//     //     <span className="">{aktivites.classTime}</span>
//     //     <p className="mt-2">{aktivites.classDescription}</p>
//     //     <p>Trainer</p>
//     //     {/* <div className="relative w-full h-[20em] rounded-lg overflow-hidden"> */}
//     //     <Image 
//     //       src={trainerFetch.asset.url}
//     //       width={100}
//     //       height={150}
//     //       className="rounded-lg"
//     //       alt=""
//     //     />
//     //     {/* </div> */}
//     //     <p className="mt-2">{trainerFetch.trainerName}</p>
//     //   </div>
//     // </div>
  
//     //  </>
// }

import { serverFetch } from "@/lib/server-fetch";
import BurgerMenu from "@/components/BurgerMenu";
import Image from "next/image";
import { Triangle } from 'lucide-react';
import Link from 'next/link';
import SignupButton from "@/components/SignupButton";
import { currentUser } from "@/lib/currentUser";
import Rating from "@/components/Rating";

export default async function generateMetadata({ params }) {
	const aktId = (await params).id
// Fetch classe detailer / side med detaljer for de enkelte hold
// gammel kode
const aktivites = await serverFetch(`http://localhost:4000/api/v1/classes/${aktId}`);
const trainerId = aktivites.trainer.id;
const trainerFetch = await serverFetch(`http://localhost:4000/api/v1/trainers/${trainerId}`);
const user = await currentUser();

const userIsSignedUp = user?.classes?.some((cls) => cls.id == aktId);
return (
  <main>
            <section className="relative w-full h-[50vh] flex flex-col">
        <Image 
          src={aktivites.asset.url}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
        <div className='absolute inset-0 flex flex-col justify-between'>
                    <div className='w-full flex justify-between p-4'>
                        <Link href='/classes' className="text-red-300 flex gap-2 items-center">
                            <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
                            Back
                        </Link>
                        <BurgerMenu />
                        </div>
                    <div className='pl-4 grid grid-cols-2 grid-rows-[1fr_1fr_40px] pb-6'>

                        <h1 className="text-[42px] leading-[3rem] text-white font-bold mb-2 
                                    col-span-2 col-start-1 row-start-1 row-span-2 self-center">
                            {aktivites.className}
                        </h1>
                        <div className='flex flex-col items-start gap-2 
                            row-start-3 col-start-1'>
                            <Rating classId={aktId} />
                            {/* <RatingModal classId={id} className={details.className} ratings={ratings} /> */}
                        </div>

                        <div className=' row-start-2 col-start-2 justify-self-end mt-2'>
                            <SignupButton classId={aktId} classDay={aktivites.classDay} user={user} userIsSignedUp={userIsSignedUp} singleClass={aktivites} />
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-4'>
                <h2 className='text-lg/6'>Schedule</h2>
                <p className='flex justify-between text-xs'>{aktivites.classDay} <span>{aktivites.classTime}</span></p>
                <p className='text-base pt-4'>{aktivites.classDescription}</p>
            </section>

            <section className='px-4 pb-4'>
                <h2 className='text-lg'>Trainer</h2>
                {/* <TrainerCard id={aktivites.aktId} /> */}
                <Image 
          src={trainerFetch.asset.url}
          width={100}
          height={150}
          className="rounded-lg"
          alt=""
        />
         {/* </div>  */}
        <p className="mt-2">{trainerFetch.trainerName}</p>
            </section>

        </main>
    )
    //  <BackButton />
    //  <h1>Detailes</h1>
    //    <BurgerMenu />
    // <div className="bg-white">
    //  {/* classes Image med Tilmeld knap */}
    //   <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
    //     <button className="absolute bottom-4 w-[11em] left-1/3 transform -translate-x-1/2b bg-[#5E2E53] text-white py-2 px-5 rounded-lg">
    //       Sign up
    //     </button>
    //   </div>

    //   {/* Activity Details */}
    //   <div className="mt-5 p-3 text-black ">
    //     <h1 className="text-xl font-bold">{aktivites.className}</h1>
    //     <p>Schedule</p>
    //     <p className="">{aktivites.classDay} </p>
    //     <span className="">{aktivites.classTime}</span>
    //     <p className="mt-2">{aktivites.classDescription}</p>
    //     <p>Trainer</p>
    //     {/* <div className="relative w-full h-[20em] rounded-lg overflow-hidden"> */}
    //     <Image 
    //       src={trainerFetch.asset.url}
    //       width={100}
    //       height={150}
    //       className="rounded-lg"
    //       alt=""
    //     />
    //     {/* </div> */}
    //     <p className="mt-2">{trainerFetch.trainerName}</p>
    //   </div>
    // </div>
  
    //  </>
}