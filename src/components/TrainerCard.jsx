
// components/TrainerCard.jsx
import Image from "next/image";
import { API_BASE_URL } from "@/constants";

export default async function TrainerCard({id}) {
 if (!API_BASE_URL) return <div>Missing NEXT_PUBLIC_API_URL</div>;
  if (!id) return <div>Missing trainer id</div>;

  try {
    // If your API is like /api/v1/trainers/:id
    const res = await fetch(`${API_BASE_URL}/trainers/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const trainer = await res.json();

    const img = trainer?.asset?.url ?? "/placeholder.jpg";
    const name = trainer?.trainerName ?? "Trainer";

    return (
      <article className="flex gap-4">
        <Image
          src={img}
          width={250}
          height={300}
          alt={name}
          className="w-28 h-28 rounded-lg object-cover"
        />
        <h2 className="text-base">{name}</h2>
      </article>
    );
  } catch {
    return <div>Unable to load trainer.</div>;
  }
}



// 								contexts/ContProvider.jsx

// 'use client'
// import { createContext, useContext, useEffect, useState } from "react"

// const ContContext = createContext()

// export function ContProvider({ children }) {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     async function fetchUser() {
//         try {
//             const response = await fetch('/api/users', { method: 'GET' })
//             if (response.ok) {
//                 const { authenticated, id, username, classes } = await response.json()
//                 if (authenticated) {
//                     setUser({ id, username, classes })
//                 } else {
//                     setUser(null)
//                 }
//             } else {
//                 setUser(null)
//             }
//         } catch (error) {
//             console.error('Error fetching user:', error)
//             setUser(null)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchUser()
//     }, [])

//     return (
//         <ContContext.Provider value={{ user, setUser, loading, refreshUser: fetchUser }}>
//             {children}
//         </ContContext.Provider>
//     )
// }

// export function conAuth() {
//     return useContext(ContContext)
// }