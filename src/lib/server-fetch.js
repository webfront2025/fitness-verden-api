
// src/lib/server-fetch.js
// import { API_BASE_URL } from "@/constants";
// import fetchErrorHandling from "./fetch-error-handling";
import { USERS_URL } from "@/constants"

// fetch data/URL fra API
export async function serverFetch(url) {
	try {
		const response = await fetch(url, { cache: "no-store" })
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}

export async function signupUserToClass({ classId, action, userId, token }) {
	try {
	  const response = await fetch(
		`${USERS_URL}/${userId}/classes/${classId}`,
		{
		  method: action,
		  headers: {
			Authorization: "Bearer " + token,
			"content-type": "application/json",
		  },
		}
	  );  
	  // console.log("response", response);
	  return response;
	} catch (error) {
	  throw new Error(error);
	}
  }