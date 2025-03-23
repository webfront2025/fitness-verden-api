// "use client"

// import Loginn from "@/actions/loginn";
// import { useActionState, useEffect } from "react";

// export default function LoginForm() {
  
//   const [formState, formAction] = useActionState(Loginn, null);

//   useEffect(function() {
//     console.log("formState", formState);
//     if (!formState) return;

//     if (!formState.success) {
//       alert("Der er desværre sket en fejl!");
//     }

//     if (formState.success) {
//       redirect("/kalender");
//     }
//   }, [formState]); 

//   return (
//     <form action={formAction} method="POST" className="space-y-4 absolute z-40">
//       <div className="z-40">
//         <h1 className="text-[40px] text-white mb-2">Login</h1>
//         <input
//           type="text"
//           name="username"
//           className="w-[90%] px-4 py-2 border border-gray-300 bg-white/20 text-gray placeholder-gray-200 focus:outline-none focus:ring-2"
//           placeholder="brugernavn"
//         />
//         <span className="text-red-400 text-sm">
//           {formState?.errors?.username?._errors}
//         </span>
//       </div>

//       <div>
//         <input
//           type="password"
//           name="password"
//           className="w-full px-4 py-2 border border-gray-100 bg-white text-black placeholder-white focus:outline-none focus:ring-2"
//           placeholder="adgangskode"
//         />
//         <span className="text-red-400 text-sm">
//           {formState?.errors?.password?._errors}
//         </span>
//       </div>

//       <button
//         disabled={formState?.isPending}
//         type="submit"
//         className="flex justify-center w-[90%] py-2 bg-[#5E2E53] hover:bg-[#5E2E53] disabled:bg-gray-500 text-white rounded-xl text-lg font-semibold transition"
//       >
//         {formState?.isPending ? "Logger ind..." : "Log ind"}
//       </button>
//       <span>{formState?.errors}</span>
//     </form>
//   );
// }


// "use client"

// import Loginn from "@/actions/loginn";
// import { useActionState, useEffect } from "react";

// export default function LoginForm() {
  
//   const [formState, formAction] = useActionState(Loginn, null);

//   useEffect(function() {
//     console.log("formState", formState);
//     if (!formState) return;

//     if (!formState.success) {
//       alert("Der er desværre sket en fejl!");
//     }

//     if (formState.success) {
//       redirect("/kalender");
//     }
//   }, [formState]); 

//   return (
//     <form action={formAction} method="POST" className="space-y-4 absolute z-40">
//       <div className="z-40">
//         <h1 className="text-[40px] text-white mb-2">Login</h1>
//         <input
//           type="text"
//           name="username"
//           className="w-[90%] px-4 py-2 border border-gray-300 bg-white/20 text-gray placeholder-gray-200 focus:outline-none focus:ring-2"
//           placeholder="brugernavn"
//         />
//         <span className="text-red-400 text-sm">
//           {formState?.errors?.username?._errors}
//         </span>
//       </div>

//       <div>
//         <input
//           type="password"
//           name="password"
//           className="w-full px-4 py-2 border border-gray-100 bg-white text-black placeholder-white focus:outline-none focus:ring-2"
//           placeholder="adgangskode"
//         />
//         <span className="text-red-400 text-sm">
//           {formState?.errors?.password?._errors}
//         </span>
//       </div>

//       <button
//         disabled={formState?.isPending}
//         type="submit"
//         className="flex justify-center w-[90%] py-2 bg-[#5E2E53] hover:bg-[#5E2E53] disabled:bg-gray-500 text-white rounded-xl text-lg font-semibold transition"
//       >
//         {formState?.isPending ? "Logger ind..." : "Log ind"}
//       </button>
//       <span>{formState?.errors}</span>
//     </form>
//   );
// }

// 17:15
'use client'
import { useActionState } from "react"
import signIn from "@/actions/signIn"
import { useRef, useEffect } from "react"
import Link from "next/link"


export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(signIn)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        if (formState?.formData) {
            usernameRef.current.value = formState.formData.username || ''
            passwordRef.current.value = formState.formData.password || ''
        }
    }, [formState?.formData])
    
    return (
        <form action={formAction} className="col-start-1 row-start-2 w-full flex flex-col p-6 pt-14">
            <h1 className="text-5xl mb-4">Log in</h1>
            <div className="mb-4 flex flex-col">
                <input
                    type="text"
                    name="username"
                    ref={usernameRef}
                    placeholder="User Name"
                    className={`p-4 bg-gray-400 text-black text-lg rounded placeholder:text-black ${formState?.errors?.username?._errors && 'border-t-2 border-x-2 rounded-b-none border-red-500'}`}
                />
                {formState?.errors?.username?._errors &&
                    <span className="text-red-500 text-lg border-b-2 border-x-2 border-red-500 bg-black/70 pl-2 rounded-b">{formState?.errors?.username._errors}</span>
                }
            </div>
            <div className="mb-4 flex flex-col">
                <input
                    type="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Password"
                    className={`p-4 bg-gray-400 text-black text-lg rounded placeholder:text-black ${formState?.errors?.password?._errors && 'border-t-2 border-x-2 rounded-b-none border-red-500'}`}
                />
                {formState?.errors?.password?._errors &&
                    <span className="text-red-500 text-lg border-b-2 border-x-2 border-red-500 bg-black/70 pl-2 rounded-b">{formState?.errors?.password._errors}</span>
                }
            </div>

            <button disabled={isPending} type="submit" className={` text-black bg-gray-600 text-lg rounded-lg px-20 py-4 shadow-2xl ${isPending ? 'bg-gray' : 'bg-purple'}`}>
                {isPending ? 'Logging in...' : 'Log in'}
            </button>

            {/* {formState?.errors &&
                <span className="text-red-500 mt-2 p-2 bg-black/50 rounded">{formState?.errors}</span>
            } */}

            <div className="text-center pt-2">
                <p className="text-lg/4 my-2">Do not have a user? </p>
                <Link href="/register" className="underline text-lg/3">Register here</Link>
            </div>

        </form>
    )
}


