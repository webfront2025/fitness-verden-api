'use server'
import { z } from "zod"
import { redirect } from 'next/navigation'

export async function signUp(formState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const birthdate = formData.get('birthdate')
    
  if (password !== confirmPassword) {
    return {
      success: false,
      formData: { username, firstname, lastname, birthdate },
      errors: { password: { _errors: ["Passwords do not match"] } },
    };
  }
    const schema = z.object({
        username: z.string().min(1, { message: "Username is required" }),
         password: z.string().min(1, { message: "Password is required" }),
        firstname: z.string().min(1, { message: "Firstname is required" }),
        lastname: z.string().min(1, { message: "Lastname is required" }),
        birthdate: z.string()
            .min(1, { message: "Fødselsdato er påkrævet" })
            .refine((val) => !isNaN(Date.parse(val)), { message: "Ugyldig dato" })
            .transform((val) => new Date(val))
    })

    const validated = schema.safeParse({ username, password, firstname, lastname, birthdate })

    if (!validated.success) {
        const errors = validated.error.format()
        // console.log('errors', errors);


        return {
            success: false,
            formData: {
                username,
                password,
                firstname,
                lastname,
                birthdate

            },
            errors
        }
    }

    function calculateAge(birthdate) {
        const today = new Date()
        const birthDate = new Date(birthdate)
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDifference = today.getMonth() - birthDate.getMonth()

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age
    }

    const age = calculateAge(birthdate)
    
    try {
        const base = (process.env.AUTH_API_URL || "").replace(/\/+$/, "");
        if (!base) {
            return { success: false, error: "Missing AUTH_API_URL" };
        }
        const response = await fetch(`${base}/api/v1/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            cache: "no-store",
            body: JSON.stringify({
                username,
                password,
                firstname,
                lastname,
                age,
                role: 'default',
            })
        })

        if (!response.ok) {
            throw new Error('Failed to sign up')
        }

        const result = await response.json()
        // console.log('Sign up successful', result)

        if (response.ok) {
            redirect('/loginForm')
        }

    } catch (e) {
        return { success: false, error: 'Internal server error' };
    }
}
