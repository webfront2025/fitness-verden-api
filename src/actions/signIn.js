// src/actions/login.jsx
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

export default async function signIn(prevState, formData) {
	const username = formData.get("username")
	const password = formData.get("password")
    // console.log("userrrrrrr",username);
    // console.log("userrrrrrr",password);
	const schema = z.object({
		username: z.string().min(1, { message: "Username is required" }),
		password: z.string().min(1, { message: "password is required" })
	})

	const validate = schema.safeParse({ username, password })

	if (!validate.success) {
		return {
			formData: { username, password },
			errors: validate.error.format()
		}
	}

	try {
		const base = (process.env.AUTH_API_URL || "").replace(/\/+$/, "");
    if (!base) {
      return { formData: { username, password }, error: "Missing AUTH_API_URL" };
    }
		const response = await fetch(`${base}/auth/token`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({ username, password })
		})

		if (response.status === 400) {
			return {formData: { username, password },
					error: "Forkert brugernavn eller adgangskode"
			}
		 }
    if (!response.ok) {
      return { formData: { username, password }, error: `Login failed (${response.status})` };
    }

		const data = await response.json()

		const cookieStore = await cookies()
		cookieStore.set("fitness_token", data.token)
		cookieStore.set("fitness_uid", data.userId)
		} catch (error) {
		throw new Error(error)
	}
	redirect("/kalender")
	
}

