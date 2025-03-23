// 'use client'
// import { useState} from "react"
// import { X } from "lucide-react"

// export default function SignupButton({ classId, classDay, userIsSignedUp, user }) {
//     const [isSignedUp, setIsSignedUp] = useState(userIsSignedUp)
//     const [message, setMessage] = useState("")
    
//     async function addClass() {
//         const hasConflict = user?.classes?.some((cls) => cls.classDay === classDay)
//         if (hasConflict) {
//             setMessage("You can only sign up for one class per day.")
//             return
//         }
//         try {
//             const response = await fetch('http://localhost:4000/api/v1/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ classId , user}),
//                 // body: JSON.stringify({ classId, userId: user.id }),

//             })

//             if (!response.ok) {
//                 const error = await response.text()
//                 console.error('Sign-up failed:', error)
//             } else {
//                 console.log(`Successfully signed up for class ${classId}`)
//                 setIsSignedUp(true)
//             }
//         } catch (error) {
//             console.error('Error during sign-up:', error)
//         }
//     }

//     async function removeClass() {
//         try {
//             const response = await fetch('http://localhost:4000/api/v1/classes', {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ classId }),
//             })

//             if (!response.ok) {
//                 const error = await response.text()
//                 console.error('cancellation failed:', error)
//             } else {
//                 console.log('Successfully cancelled sign up for class')
//                 setIsSignedUp(false)
//             }
//         } catch (error) {
//             console.error('Error during cancellation:', error)
//         }
//     }

//     if (!user) {
//         return null
//     }


//     return (
//         <>
//             {message &&
//                 <div className="fixed inset-0 z-20 bg-white/70 h-screen flex flex-col">
//                     <section className="bg-white p-4 flex flex-col items-center h-[50vh]">
//                         <button onClick={() => setMessage(null)} className="self-end"><X size={40} /></button>
//                         <h2 className="text-xl">We're sorry!</h2>
//                         <p className="text-lg text-red-600 text-center">{message}</p>
//                         <button onClick={() => setMessage(null)} className="text-base pt-10">close this message</button>
//                     </section>
//                 </div>
//             }
//             {isSignedUp ?
//                 <button className={`bg-white rounded-l-xl text-[26px] p-4 whitespace-nowrap self-end min-w-[120px]`}
//                     onClick={() => removeClass()}>
//                     Leave
//                 </button>

//                 :
//                 <button className={`bg-white rounded-l-xl text-[26px] p-4 self-end `}
//                     onClick={() => addClass()}>
//                     Sign up
//                 </button>

//             }
//         </>

//     )
// }

"use client";
import { currentUser } from "@/lib/currentUser";
import { signupUserToClass } from "@/lib/server-fetch";
import { getCookie } from "cookies-next";
import { useState } from "react";

//   <SignupButton classId={aktId} classDay={aktivites.classDay} user={user} userIsSignedUp={userIsSignedUp} />
//   <SignupButton classId={aktId} classDay={aktivites.classDay} user={user} userIsSignedUp={userIsSignedUp} aktivites={singleClass} />
//   <SignUpButton classId={classId} isSignedUp={isSignedUp} singleClass={singleClass} />
  export default function SignUpButton({ classId, classDay, user, userIsSignedUp, singleClass }) {
  const [isSignedUpDone, setIsSignedUpDone] = useState(userIsSignedUp);
  const [samedaySignUp, setSamedaySignup] = useState(false);

  async function handleSignUp() {
    //import { getCookie } from "cookies-next" fordi den er client side.
    const token = getCookie("trainer_token");
    const userId = getCookie("trainer_uid");
    


    const action = isSignedUpDone ? "DELETE" : "POST";

    if (action === "POST") {
      const singleUserInfo = await currentUser();
      // const singleUserInfo = user
      console.log("userrrr",singleUserInfo);
      const signedUpSameClassDay = singleUserInfo.classes.filter(
        // (clsDay) => singleClass.classDay == clsDay.classDay
        (clsDay) => classDay == clsDay.classDay
      );

      if (signedUpSameClassDay.length > 0) {
        setSamedaySignup(true);
      } else {
        const signUpToUser = await signupUserToClass({classId,action,userId,token,});
        if (signUpToUser) {
          setIsSignedUpDone(!isSignedUpDone);
        }
      }
    } else {
      const signUpToUser = await signupUserToClass({classId,action,userId,token,});
      if (signUpToUser) {
        setIsSignedUpDone(!isSignedUpDone);
      }
    }
  }

  return (
    <>
      <div
        onClick={handleSignUp}
        className="h-[1.8em] w-[5em] text-[25px] flex justify-center items-center bg-white rounded-2xl overflow-y-hidden"
      >
        {isSignedUpDone ? <button >Leave</button> : <button >Sign up</button>}
      </div>
      {samedaySignUp ? (
        <div className="text-red-400 text-[1.2em] text-center">
          same day issue
        </div>
      ) : (
        ""
      )}
    </>
  );
}
