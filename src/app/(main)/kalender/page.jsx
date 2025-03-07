

// import { cookies } from "next/headers"

// export const metadata = { title: "Kalender" }

// export default async function UserCalender() {


//   const cookieStore = await cookies()
//   const token = cookieStore.get('trainer_token')
//   const userId = cookieStore.get('user_id')

//   if (!token || !userId) {
//       return null
//     }
//   const user = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
//       method: 'GET',
//       headers: {
//           'Content-type': 'application/json',
//           'Authorization': `Bearer ${token.value}`
//       }
//     })
//     const userDetails = await user.json();
// console.log("calenderDetails",userDetails);
//     return (
//       <main className="px-4">
//             <h1 className="text-xl">My Schedule</h1>
//             <ul>
//                 {userDetails.classes.map(cls => (
//                     <li key={cls.id} className="w-full border-b border-black border-dashed py-4">
//                         <Link href={`/classes/${cls.id}`}>
//                             <p className="flex justify-between text-sm pb-4">{cls.classDay} <span>{cls.classTime}</span></p>
//                             <h2 className="text-lg/6">{cls.className}</h2>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </main>
//     )
// }


import Link from "next/link";
import { currentUser } from "@/lib/currentUser";
import BurgerMenu from "@/components/BurgerMenu";
import { Triangle } from 'lucide-react';

export default async function MySchedule() {
    const user = await currentUser()

    return (
        <main className="px-4">
            <div className="relative w-full h-[10vh] flex flex-col">
                <div className='absolute inset-0 flex flex-col justify-between'>
                    <div className='w-full flex justify-between p-4'>
                        <Link href='/home' className="text-red-300 flex gap-2 items-center">
                            <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
                            Back
                        </Link>
                        <BurgerMenu />
                        </div>
                        </div>
                    </div>
            <h1 className="text-3xl text-center">My Schedule</h1>
            <ul>
                {user.classes.map(cls => (
                    <li key={cls.id} className="w-full border-b border-black border-dashed py-4">
                        <Link href={`/classes/${cls.id}`}>
                            <p className="flex justify-between text-sm pb-4">{cls.classDay} <span>{cls.classTime}</span></p>
                            <h2 className="text-lg/6">{cls.className}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}