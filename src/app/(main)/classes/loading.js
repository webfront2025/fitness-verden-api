import Image from "next/image";
import placeholderImg from "@/assets/placeholderImg.jpg";

export default async function Loading() {
    return(
        <>
        <Image src={placeholderImg} height={400} width={400} alt="..."/>
        <div className=" h-15 w-full bg-gray-400"></div>
       
        </>
    )
}