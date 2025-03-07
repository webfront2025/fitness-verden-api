'use client'
import { createContext, useContext, useEffect, useState } from "react"

const ContContext = createContext()

export function ContProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchUser() {
        try {
            const response = await fetch('/api/users', { method: 'GET' })
            if (response.ok) {
                const { authenticated, id, username, classes } = await response.json()
                if (authenticated) {
                    setUser({ id, username, classes })
                } else {
                    setUser(null)
                }
            } else {
                setUser(null)
            }
        } catch (error) {
            // console.error('Error fetching user:', error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <ContContext.Provider value={{ user, setUser, loading, refreshUser: fetchUser }}>
            {children}
        </ContContext.Provider>
    )
}

export function conAuth() {
    return useContext(ContContext)
}
