// src/app/(main)/login/page.jsx
// import Login from "@/actions/login";
import LoginForm from "@/components/LoginForm";
// import Image from "next/image";
// import Rectangle from "../../../assets/Rectangle.png";
// import Link from "next/link";
export default async function Loginn() {
	return (
		<>
        {/* <div className="bg-[url(/splash-image.jpg)] bg-cover bg-center bg-no-repeat h-screen overflow-hidden">
        <div className="flex justify-center"></div> */}
		{/* <div className=" bg-[url(/splash-image.jpg)] relative h-screen flex items-center  justify-center bg-cover bg-center ">     */}
		 <div className="absolute w-full h-full bg-opacity-90  -translate-x mb-10"> 
		
		{/* </div>  */}
		{/* <div className="bg-[url(/splash-image.jpg)] bg-cover bg-center h-screen bg-no-repeat">
          <div className="flex justify-center items-center h-screen">
            <div className="h-full w-full bg-[#4e3949] opacity-30 rotate-45 block"></div>
          </div>
        </div> */}
			{/* <h1>Log ind</h1> */}
			<LoginForm />
            </div>
		</>
	)
}