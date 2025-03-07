'use server'
import { cookies } from 'next/headers'
export async function currentUser() {
    const cookieStore = await cookies()
    const token = cookieStore.get('fitness_token')?.value
    const userId = cookieStore.get('fitness_uid')?.value

    if (!token || !userId) {
        return null
      }
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
   const user = await response.json()
    return user
}
