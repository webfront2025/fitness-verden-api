# 📌 Dokumentation for Fitness Verden

**Forfatter:**  

---

## 🔑 Brugere til systemet  

# Brugere og adgangskoder
| Brugernavn | Adgangskode |
| - | - |
| user1 | 1234 |
| user2 | 1234 |
| user3 | 1234 |
| user4 | 1234 |
---

## 🚀 Tech-stack  

### **Frontend**  
- **[Next.js](https://nextjs.org)**  
  Jeg har valgt Next.js, fordi det giver server-side rendering (SSR) og statisk site generation (SSG), hvilket forbedrer ydeevnen (performance)og SEO. Det har også en god filbaseret routing og support for API-routes, hvilket gør det til et godt valg for både små og store projekter.
  ### **1. Ydeevne (performance)** 
  ### **2 Sikkerhed** 🔐 
  ### **3. SEO** 🔍
### 
- **Next.js API Routes** 
  Next.js giver mulighed for at bygge API'er direkte i projektet, hvilket reducerer behovet for en separat backend.

## ❌ **Ulemper ved Next.js**  

### **1. Kompleksitet i Store Projekter** 🏗  
- Next.js kan være komplekst at arbejde med i store applikationer, især hvis SSR og SSG kombineres forkert.  

### **2. Hosting Begrænsninger** ☁  
- Selvom Vercel er den anbefalede hostingplatform, kan det være dyrt for større projekter. Alternative platforme som Netlify og AWS kan kræve ekstra konfiguration.  

### **3. Byggetid på Store Applikationer** ⏳  
- SSG kan føre til lange byggetider, hvis der er mange sider, især med dynamiske data.  

---
## Dokumentation  
### Teknologi-stack:  
- NextJS 15 (app-framework)
- ReactJS 19 (frontend-bibliotek)
- TailwindCSS (CSS-framework)
- Zod (validerings-bibliotek)
- Lucide-react, React Icons (react ikon-bibliotek)**[React Icons](https://react-icons.github.io) (https://lucide.dev/icons/)** 

---
## Opgaven
opgaven  handler om lave en web-applikation.
Applikationen skal kodes som en front-end løsning, dvs.
Hovedopgaven består af følgende:
•
En velkomstskærm
•
En oversigt over hvilke hold, der tilbydes
•
En søgefunktion
•
En side med detaljer for de enkelte hold
•
En ”Kalender” for brugeren
•
En log-ind formular
•Valgfri opgave A – Ratings
•Valgfri opgave B – Opret bruger
•Valgfri opgave C – Automatiseret deployment
Information om brugere, hold og instruktører kommer fra et API, som er til rådighed.
APIet kan klones fra GitHub her: **(https://github.com/rts-cmk-opgaver/trainer-api)**

## Kode-eksempel
Jeg har valgt et eksempel fra login 

[signIn action](/src/actions/signIn.js)
```js

export default async function signIn(prevState, formData) {
	const username = formData.get("username")
	const password = formData.get("password")
	const schema = z.object({
		username: z.string().min(1, { message: "Username is required" }),
		password: z.string().min(1, { message: "Password is required" })
	})
	const validate = schema.safeParse({ username, password })
	if (!validate.success) {
		return {
			formData: { username, password },
			errors: validate.error.format()
		}
	}}
```

Jeg bruger biblioteket `Zod` til at lave et schema, så jeg kan validere email og password fra login-formularen.

Først laver jeg et skema som indeholder reglerne for hvordan felterne i formularen skal se ud.  
Derefter parser jeg et objekt med felterne fra formularen op mod schemaet.  
Hvis valideringen ikke lykkes returnerer funktionen et fejl-objekt.

