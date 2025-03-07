// src/components/searchForm.js
// Brain kode---- gammel kode
'use client'
import { useState } from "react";
import Image from "next/image";
import search from "../../public/search.png";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export default function SearchForm() {
	const [searchQuery, setSearchQuery] = useState("");
	// const router = useRouter(); 

	function handelSearch(event) {
		event.preventDefault()
		redirect("/search?searchResult="+searchQuery)
		// router.push(`/search?searchResult=${searchQuery}`);
	}
    	return (
    		<form onSubmit={handelSearch} className="py-6  w-[85%] mx-auto relative" >
    			{/* <p className="text-lg font-semibold mb-4">Søg </p> */}
    			{/* <label className="flex flex-col" htmlFor="keyword">
    			</label> */}
				<div className="relative flex justify-center  w-full">

    			<input
    				type="search"
    				name="search"
    				// placeholder="Søg på fx. aktiviter, timer og eller lignende"
    				className="bg-gray-400 text-white opacity-50  border rounded-sm py-1 w-[85%]"
    				value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
    			/>
    			{/* <button type="submit" className="bg-[#162A41] text-white ml-[1%] py-1 w-[14%] rounded-sm">Søg</button> */}
				  <Image src={search} width={22} height={20} alt="search" 
				  className="absolute right-7 top-1/2 transform -translate-y-1/2 invert"/>
				</div>

    		</form>
)
}


















// import SearchForm from "./search-form"

// export default async function Search() {
// 	const response = await fetch("https://dinmaegler.onrender.com/homes")
// 	const data = await response.json()

// 	const images = data.reduce((accumulator, currentValue) => [...accumulator, currentValue.images[0].url], [])
	
// 	return (
// 		<section
// 			style={{backgroundImage: `url(${images[Math.floor(Math.random()*images.length)]})`}}
// 			className="z-[1] h-[40rem] bg-cover bg-center relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[hsla(0,_0%,_0%,_0.7)] before:z-[2]"
// 		>
// 			<div className="container flex flex-col justify-center h-full z-[10] relative">
// 				<h2 className="text-2xl font-bold text-center text-white mb-10">Søg efter din drømmebolig</h2>
// 				<SearchForm />
// 			</div>
// 		</section>
// 	)
// }


// export default function SearchForm() {
// 	return (
// 		<form className="bg-white py-6 px-6 w-[60%] mx-auto" action="/search" method="GET">
// 			<p className="text-lg font-semibold mb-4">Søg blandt X boliger til salg i X butikker</p>
// 			<label className="flex flex-col" htmlFor="keyword">
// 				Hvad skal din næste bolig indeholde?
// 			</label>
// 			<input
// 				type="search"
// 				id="keyword"
// 				name="q"
// 				placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
// 				className="border rounded-sm py-1 px-4 w-[85%]"
// 				defaultValue=""
// 			/>
// 			<button type="submit" className="bg-[#162A41] text-white ml-[1%] py-1 w-[14%] rounded-sm">Søg</button>
// 		</form>
// 	)
// }