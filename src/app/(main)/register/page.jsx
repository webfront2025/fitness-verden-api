import SignUpForm from "@/components/SignUpForm";
// import Image from "next/image";

export const metadata = {
    title: 'Register'
}

export default function Register() {
    return (
        <main className="relative mb-4">
            <h1 className="text-2xl px-6 pt-4">Create New User</h1>
            <SignUpForm />

            <div className="absolute inset-0 -z-10 h-4 bg-purple/50" />

        </main>

)
}
