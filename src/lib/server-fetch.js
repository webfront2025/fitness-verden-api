
// src/lib/server-fetch.js
 import { API_BASE_URL } from "@/constants";
// import fetchErrorHandling from "./fetch-error-handling";

function buildUrl(pathOrUrl) {
  // If pathOrUrl is already absolute (http/https), use it as-is
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  // Otherwise, join with API_BASE_URL
  if (!API_BASE_URL) throw new Error("Missing NEXT_PUBLIC_API_URL");
  const base = API_BASE_URL.replace(/\/+$/, "");
  const path = String(pathOrUrl || "").replace(/^\/+/, "");
  return `${base}/${path}`;
}




// fetch data/URL fra API
export async function serverFetch(pathOrUrl, options = {}) {
	 const url = buildUrl(pathOrUrl);
	 console.log("serverFetch URL:", url);
	try {
		const response = await fetch(url, options)
		if (!response.ok) {
      throw new Error(`Fetch failed ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
	console.log("Response data:", data); 
	 return data;
  } catch (error) {
	 console.error("serverFetch error:", error);
    throw new Error(error?.message || "Fetch error");
  }
}


export async function signupUserToClass({ classId, action, userId, token }) {
	 if (!API_BASE_URL) throw new Error("Missing NEXT_PUBLIC_API_URL");
  const url = buildUrl(`/users/${userId}/classes/${classId}`);
	try {
	  const response = await fetch(url,
		{
		  method: action,
		  headers: {
			Authorization: `Bearer ${token}`,
        "content-type": "application/json",
		  },
		}
	  );  
	  // console.log("response", response);
	  return response;
	} catch (error) {
	  throw new Error(error?.message || "Signup error");
	}
  }
    