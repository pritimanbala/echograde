"use client"

import { useEffect, useState } from "react"
import { getEmissionsData, type EmissionData } from "@/lib/emissions-store"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"

export function MeasureEmissionsPage() {
  const [emissionsData, setEmissionsData] = useState<EmissionData[]>([])
  // const [selectedCategory, setSelectedCategory] = useState("Purchased goods and services")
  const selectedCategory = "Purchased goods and services"

  useEffect(() => {
    setEmissionsData(getEmissionsData())
  }, [])

  const totalEmissions = emissionsData.reduce((sum, d) => sum + d.value, 0)
  const emissionsPerEmployee = totalEmissions / 3100 // Assuming 3,100 employees
  const totalSpend = 285142158.6 // Sample data
  const spendPerEmployee = totalSpend / 3100

  const emissionsOverTime = [
    { quarter: "Q1 2022", emissions: 41500 },
    { quarter: "Q2 2022", emissions: 33200 },
    { quarter: "Q3 2022", emissions: 44800 },
    { quarter: "Q4 2022", emissions: 47300 },
    { quarter: "Q1 2023", emissions: 35900 },
    { quarter: "Q2 2023", emissions: 32100 },
    { quarter: "Q3 2023", emissions: 47200 },
    { quarter: "Q4 2023", emissions: 43600 },
  ]

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 text-lg">📋</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{selectedCategory}</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
              See data uploads
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Upload new data</Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">📅 All data</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span>⟷ Compare to</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
              <span>⚙️ Add filter</span>
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
              <span>☰</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm font-medium mb-2">Total emissions</p>
            <p className="text-2xl font-bold text-gray-900">{(totalEmissions / 1000).toFixed(2)}</p>
            <p className="text-gray-600 text-xs mt-1">tCO₂e</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm font-medium mb-2">Emissions per employee</p>
            <p className="text-2xl font-bold text-gray-900">{(emissionsPerEmployee / 10).toFixed(2)}</p>
            <p className="text-gray-600 text-xs mt-1">kgCO₂e</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm font-medium mb-2">Total spend</p>
            <p className="text-2xl font-bold text-gray-900">{(totalSpend / 1000000).toFixed(1)}</p>
            <p className="text-gray-600 text-xs mt-1">EUR</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm font-medium mb-2">Spend per employee</p>
            <p className="text-2xl font-bold text-gray-900">{(spendPerEmployee / 1000).toFixed(1)}</p>
            <p className="text-gray-600 text-xs mt-1">EUR/employee</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Emissions over time</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 text-sm font-medium">
                  Select breakdown
                </button>
                <div className="w-6 h-6 rounded-full border-4 border-green-500 animate-spin"></div>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 text-sm font-medium">
                <option>Time intervals</option>
              </select>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">⋮</button>
            </div>
          </div>

          <div className="h-96 -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emissionsOverTime} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" vertical={true} />
                <XAxis dataKey="quarter" stroke="#6b7280" style={{ fontSize: "12px" }} />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }} />
                <Bar dataKey="emissions" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
