'use client'

import { useActionState, useRef, useEffect, useState } from "react"
import { signUp } from "@/actions/signUp"
import Link from "next/link"

export default function SignUpForm() {
    const [formState, formAction, isPending] = useActionState(signUp)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null) // New reference for confirmation
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const birthdateRef = useRef(null)
    const [passwordError, setPasswordError] = useState("") // State to store password mismatch error

    useEffect(() => {
        if (formState?.formData) {
            usernameRef.current.value = formState.formData.username || ''
            passwordRef.current.value = formState.formData.password || ''
            confirmPasswordRef.current.value = '' // Reset confirm password field
            firstnameRef.current.value = formState.formData.firstname || ''
            lastnameRef.current.value = formState.formData.lastname || ''
            birthdateRef.current.value = formState.formData.birthdate || ''
        }
    }, [formState?.formData])

    function handleSubmit(event) {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            event.preventDefault() // Prevent form submission
            setPasswordError("Passwords do not match!") // Show error message
            return
        }
        setPasswordError("") // Clear error if passwords match
    }

    return (
        <form action={formAction} onSubmit={handleSubmit} className="flex bg-gray-200 flex-col mb-10 gap-4 p-6 pt-2">
            <label className="flex flex-col gap-1">
                <span>Brugernavn</span>
                <input ref={usernameRef} type="text" name="username" placeholder="Username" className="p-3 text-black bg-blue-50" />
            </label>

            <label className="flex flex-col gap-1">
                <span>Adgangskode</span>
                <input ref={passwordRef} type="password" name="password" placeholder="Password" className="p-3 text-black bg-blue-50" />
            </label>

            <label className="flex flex-col gap-1">
                <span>Re-enter Password</span>
                <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" className="p-3 text-black bg-blue-50" />
                {passwordError && <span className="text-red-500">{passwordError}</span>}
            </label>

            <label className="flex flex-col gap-1">
                <span>Fornavn</span>
                <input ref={firstnameRef} type="text" name="firstname" placeholder="First Name" className="p-3 text-black bg-blue-50" />
            </label>

            <label className="flex flex-col gap-1">
                <span>Efternavn</span>
                <input ref={lastnameRef} type="text" name="lastname" placeholder="Last Name" className="p-3 text-black bg-blue-50" />
            </label>

            <label className="flex flex-col gap-1">
                <span>Fødselsdato</span>
                <input ref={birthdateRef} type="date" name="birthdate" className="p-3 text-black bg-blue-50" />
            </label>

            <button type="submit" disabled={isPending} className="bg-blue-900 text-white text-lg rounded-2xl px-20 py-4 mt-2 shadow-2xl">
                {isPending ? 'Creating...' : 'Create New User'}
            </button>

            <p className="text-center mb-4 text-cyan-800 text-lg/4">or go to <Link href="/loginForm" className="underline">Login</Link></p>
        </form>
    )
}