
// src/lib/server-fetch.js
// import { API_BASE_URL } from "@/constants";
// import fetchErrorHandling from "./fetch-error-handling";

// fetch data/URL fra API
export async function serverFetch(url) {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}
    