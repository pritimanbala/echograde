"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AuthModal({ onLogin }: { onLogin: (email: string) => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [person, setPerson] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [sector, setSector] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      onLogin(email)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <h1 className="text-3xl font-bold">
              <span className="text-green-600">ECHO</span>
              <span className="text-gray-800">grade</span>
            </h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p className="text-gray-600 text-sm mt-2">Emissions management platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full"
            />
          </div>


          {!isLogin && (<>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <Input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Tesla"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Person</label>
              <Input
                type="text"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                placeholder="Abinaya Latua"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Sector</label>
              <Select value={sector} onValueChange={setSector}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Firm"/>
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="cement">Cement Industry</SelectItem>
                    <SelectItem value="petroleum">Petroleum Industry</SelectItem>
                    <SelectItem value="aluminium">Aluminium Industry</SelectItem>
                  </SelectContent>
              </Select>
            </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-4 text-sm text-gray-600 hover:text-gray-900 font-medium"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  )
}
