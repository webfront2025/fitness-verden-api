"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaSearch,
  FaCalendarAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';

export default function BurgerMenu() {
  const token = getCookie("fitness_token");
  const userId = getCookie("fitness_uid");
  

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  function handleLogOut() {
    deleteCookie("fitness_token");
    deleteCookie("fitness_uid");    
    setIsOpen(false);
    router.push("/loginForm"); 
  }

  return (
    <>
      {/* Burger Icon (☰) */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-black text-3xl h-1 p-3">
        <FaBars size={22} fill="#808080" />
      </button>

      {/* Sidebar */}
      <div
        className={`absolute inset-0 bg-white flex flex-col w-full h-[100vh] z-30 
          ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Close Button (X) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <FaTimes size={24} />
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col items-center mt-16 space-y-6 text-lg font-semibold text-black">
          <Link href="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/search" onClick={() => setIsOpen(false)}>
            Search
          </Link>
          {token ? (
          <Link href="/kalender" onClick={() => setIsOpen(false)}>
            My Schedule
          </Link>
          ): (
            <></>
          )}
          {token && userId ? (
            <Link href="" onClick={handleLogOut}>
            Log out
          </Link>
          ) : (
          <Link href="/loginForm" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          )}
        </nav>
      </div>
      {/* Overlay (Click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}></div>
      )}
       {isOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

// "use client";
// import { useState } from "react";
// import { useContext } from "react";
// import Link from "next/link";
// // import { conAuth } from "@/contexts/ContProvider";
// import { logOut } from "@/lib/logOut";
// import LoginForm  from "@/components/LoginForm";
// import {FaBars,FaTimes} from "react-icons/fa";
// import { ContContext } from "@/contexts/ContProvider";


// export default function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false)
//   const { user, refreshUser } = useContext(ContContext);

//   function handleShowLoginForm() {
//     setShowLoginForm(true)
// }


// async function handleLogout() {
//     await logOut()
//     await refreshUser()
// }
//   return (
//     <>
//       {/* Burger Icon (☰) */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="text-black text-3xl h-1 p-3">
//         <FaBars size={22} fill="#808080" />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`absolute inset-0 bg-white flex flex-col w-full h-[100vh] z-30 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}>
//         {/* Close Button (X) */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black">
//           <FaTimes size={24} />
//         </button>

//         {/* Menu Links */}
//         <nav className="flex flex-col items-center mt-16 space-y-6 text-lg font-semibold text-black">
//           <Link href="/home" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link href="/search" onClick={() => setIsOpen(false)}>
//             Search
//           </Link>

//           {user ?
//                 <ul className="text-lg text-center flex flex-col gap-6">
//                     <li><Link href="/kalender" onClick={() => setIsOpen(false)}>
//             My Schedule
//           </Link></li>
//                     <li><button onClick={handleLogout}>Log out</button></li>
//                 </ul>
//                 : <li><button onClick={handleShowLoginForm}>Log in</button></li>
//             }
//           {/* <Link href="/kalender" onClick={() => setIsOpen(false)}>
//             My Schedule
//           </Link> */}
//           {/* <Link href="/loginForm" onClick={() => setIsOpen(false)}>
//             Login </Link> */}
//            {/* <li><button onClick={handleLogout}>Log out</button></li>
//           : <li><button onClick={handleShowLoginForm}>Log in</button></li> */}
//         </nav>
//       </div>
//       {/* Overlay (Click outside to close) */}
//       {showLoginForm && !user &&
//         <LoginForm
//         setShowMenu={setShowMenu}
//         setShowLoginForm={setShowLoginForm} onClick={() => setIsOpen(false)}
//     />
//       //   <div
//       //     className="fixed inset-0 bg-black opacity-50"
//       //     onClick={() => setIsOpen(false)}></div>
//        }
//     </>
//   );	  }	