'use server'
import { cookies } from 'next/headers'
import { USERS_URL } from '@/constants'
export async function currentUser() {
    const cookieStore = await cookies()
    const token = cookieStore.get('fitness_token')?.value
    const userId = cookieStore.get('fitness_uid')?.value

    if (!token || !userId) {
        return null
      }
    const response = await fetch(`${USERS_URL}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        cache: 'no-store'
    })
   const user = await response.json()
    return user
}
