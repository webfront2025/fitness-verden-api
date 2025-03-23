// src/app/(main)/login/page.jsx
// import Login from "@/actions/login";
import BackButton from "@/components/BackButton";
import LoginForm from "@/components/LoginForm";
// import Image from "next/image";
// import Rectangle from "../../../assets/Rectangle.png";
// import Link from "next/link";
export default async function Loginn() {
	return (
		<>
		 <div className="absolute w-full h-full bg-opacity-90  -translate-x mb-10"> 
			<div className="ml-5">
			<BackButton />
			</div>
			<LoginForm />
            </div>
		</>
	)
}