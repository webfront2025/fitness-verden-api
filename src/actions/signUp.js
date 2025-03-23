'use server'
import z from 'zod'
import { redirect } from 'next/navigation'

export async function signUp(formState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const birthdate = formData.get('birthdate')
    

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

    const response = await fetch(`http://localhost:4000/api/v1/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        throw new Error('Failed to sign up',)
    }

    const result = await response.json()
    // console.log('Sign up successful', result)

    if (response.ok) {
        redirect('/loginForm')
    }

}

// import z from 'zod'
// import { redirect } from 'next/navigation'

// export async function signUp(formState, formData) {
//     const username = formData.get('username')
//     const password = formData.get('password')
//     const confirmPassword = formData.get('confirmPassword')
//     const firstname = formData.get('firstname')
//     const lastname = formData.get('lastname')
//     const birthdate = formData.get('birthdate')

//     if (password !== confirmPassword) {
//         return {
//             success: false,
//             errors: { password: { _errors: ["Passwords do not match!"] } }
//         }
//     }

//     const schema = z.object({
//         username: z.string().min(1, { message: "Username is required" }),
//         password: z.string().min(1, { message: "Password must be at least 6 characters long" }),
//         firstname: z.string().min(1, { message: "Firstname is required" }),
//         lastname: z.string().min(1, { message: "Lastname is required" }),
//         birthdate: z.string()
//             .min(1, { message: "Birthdate is required" })
//             .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" })
//             .transform((val) => new Date(val))
//     })

//     const validated = schema.safeParse({ username, password, firstname, lastname, birthdate })

//     if (!validated.success) {
//         return {
//             success: false,
//             errors: validated.error.format()
//         }
//     }

//     const response = await fetch(`http://localhost:4000/api/v1/users`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             username,
//             password,
//             firstname,
//             lastname,
//             role: 'default',
//         })
//     })

//     if (!response.ok) {
//         throw new Error('Failed to sign up')
//     }

//     return { success: true, redirectTo: '/loginForm' } // Return redirect URL instead
// }
