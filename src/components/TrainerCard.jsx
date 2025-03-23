
// components/TrainerCard.jsx
import Image from "next/image"

export default async function TrainerCard({id}) {
    const trainer = await fetch(`http://localhost:4000/api/v1/trainers/${id}`)
    const trainerDetails = await trainer.json();
    return (
        <article className="flex gap-4">
            <Image src={trainerDetails?.asset?.url || "/placeholder.jpg"} 
            width={250} height={300}  alt="trainerName"
            className="w-28 h-28 rounded-lg object-cover" />
            <h2 className="text-base">{trainerDetails.trainerName}</h2>
        </article>
    )
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