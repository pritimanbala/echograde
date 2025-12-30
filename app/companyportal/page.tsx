"use client"

import { useState } from "react"
import { Dashboard } from "@/components/companyportal/dashboard"
import { AuthModal } from "@/components/companyportal/auth-modal"

export default function Home() {
  const [user, setUser] = useState<{ email: string } | null>(null)

  return (
    <main className="h-screen bg-background overflow-hidden">
      {!user ? (
        <AuthModal onLogin={(email) => setUser({ email })} />
      ) : (
        <Dashboard user={user} onLogout={() => setUser(null)} />
      )}
    </main>
  )
}
