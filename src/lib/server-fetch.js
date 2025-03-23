
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

export async function signupUserToClass({ classId, action, userId, token }) {
	try {
	  const response = await fetch(
		`http://localhost:4000/api/v1/users/${userId}/classes/${classId}`,
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
    