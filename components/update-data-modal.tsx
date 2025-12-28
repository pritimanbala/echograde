"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { EmissionData } from "@/lib/emissions-store"

interface UpdateDataModalProps {
  data: EmissionData
  isOpen: boolean
  onClose: () => void
  onUpdate: (value: number) => void
}

export function UpdateDataModal({ data, isOpen, onClose, onUpdate }: UpdateDataModalProps) {
  const [value, setValue] = useState(data.value.toString())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      onUpdate(numValue)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Update Data</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <p className="text-sm text-gray-600 bg-gray-100 p-2 rounded">{data.subcategory}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Value ({data.unit})</label>
            <Input
              type="number"
              step="0.01"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              Update
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 text-gray-700 border-gray-300 bg-transparent"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
