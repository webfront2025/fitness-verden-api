// nextjs.org   ..... useRouter()   og    router.back()
"use client";
import { useRouter } from "next/navigation";
import { Triangle } from "lucide-react";

export default  function BackButton(){

  const router = useRouter();

  return (
    <>
      <a
        onClick={() => router.back()}
        className="flex gap-2 items-center">
        <Triangle size={20} fill="#F4A88E" className=" rotate-[270deg]" />
      </a>
    </>
  );
};


