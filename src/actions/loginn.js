// // src/actions/login.jsx
// "use server"
// export default async function Loginn(prevState, formData) {
// 	const [username, password] = formData.values();
  
// 	console.log("Received formData:", username, password);
  
// 	const schema = z.object({
// 	  username: z.string().min(1, { message: "Du skal udfylde et brugernavn" }),
// 	  password: z.string().min(1, { message: "Du skal udfylde et password" }),
// 	});
  
// 	const validate = schema.safeParse({ username, password });
  
// 	if (!validate.success) {
// 	  console.log("Validation failed:", validate.error.format());
// 	  return {
// 		success: false,
// 		formData: { username, password },
// 		errors: validate.error.format(), 
// 	  };
// 	}
  
// 	try {
// 	  const response = await fetch("http://localhost:4000/auth/token", {
// 		method: "POST",
// 		headers: {
// 		  "Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ username, password }),
// 	  });
  
// 	  if (response.status === 400) {
// 		return {
// 		  success: false, 
// 		  formData: { username, password },
// 		  error: "Forkert brugernavn eller adgangskode",
// 		};
// 	  }
  
// 	  const data = await response.json();
// 	  const cookieStore = await cookies();
// 	  console.log("Token received:", data);
  
// 	  cookieStore.set("fitness_uid", data.userId);
// 	  cookieStore.set("fitness_token", data.token);
  
// 	  return { success: true };
  
// 	} catch (error) {
// 	  console.error("Login error:", error);
// 	  return { success: false, error: "Serverfejl, prøv igen senere" };
// 	}
//   }
  

// "use server"
// export default async function Loginn(prevState, formData) {
// 	const [username, password] = formData.values();
  
// 	console.log("Received formData:", username, password);
  
// 	const schema = z.object({
// 	  username: z.string().min(1, { message: "Du skal udfylde et brugernavn" }),
// 	  password: z.string().min(1, { message: "Du skal udfylde et password" }),
// 	});
  
// 	const validate = schema.safeParse({ username, password });
  
// 	if (!validate.success) {
// 	  console.log("Validation failed:", validate.error.format());
// 	  return {
// 		success: false,
// 		formData: { username, password },
// 		errors: validate.error.format(), 
// 	  };
// 	}
  
// 	try {
// 	  const response = await fetch("http://localhost:4000/auth/token", {
// 		method: "POST",
// 		headers: {
// 		  "Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ username, password }),
// 	  });
  
// 	  if (response.status === 400) {
// 		return {
// 		  success: false, 
// 		  formData: { username, password },
// 		  error: "Forkert brugernavn eller adgangskode",
// 		};
// 	  }
  
// 	  const data = await response.json();
// 	  const cookieStore = await cookies();
// 	  console.log("Token received:", data);
  
// 	  cookieStore.set("fitness_uid", data.userId);
// 	  cookieStore.set("fitness_token", data.token);
  
// 	  return { success: true };
  
// 	} catch (error) {
// 	  console.error("Login error:", error);
// 	  return { success: false, error: "Serverfejl, prøv igen senere" };
// 	}
//   }
