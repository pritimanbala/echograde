"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UpdateDataModal } from "@/components/update-data-modal"
import { getEmissionsData, updateEmissionData, type EmissionData } from "@/lib/emissions-store"

type scopeItem = {
   id: string,
   icon: string,
   name: string,
   dataId: string,
   hasUpdate: boolean
}

type scopeSection = {
  id: string,
  title: string,
  expanded: boolean,
  items: scopeItem[]
}


const scopeData: scopeSection[] = [
  {
    id: "org",
    title: "Organisational data",
    expanded: true,
    items: [
      {
        id: "stationary",
        dataId: "org-1",
        name: "Organisational data",
        icon: "👥",
        hasUpdate: true,
      },
    ],
  },
  {
    id: "scope1",
    title: "Scope 1",
    expanded: true,
    items: [
      {
        id: "stationary",
        dataId: "stat-1",
        name: "Stationary combustion",
        icon: "⚙️",
        hasUpdate: true,
      },
      {
        id: "mobile",
        dataId: "mob-1",
        name: "Mobile combustion",
        icon: "🚗",
        hasUpdate: true,
      },
      {
        id: "fugitive",
        dataId: "fug-1",
        name: "Fugitive emissions",
        icon: "❄️",
        hasUpdate: true,
      },
    ],
  },
  {
    id: "scope2",
    title: "Scope 2",
    expanded: true,
    items: [
      {
        id: "electricity",
        dataId: "elec-1",
        name: "Purchased electricity",
        icon: "⚡",
        hasUpdate: true,
      },
    ],
  },
]

export function CollectDataPage() {
  const [expandedScopes, setExpandedScopes] = useState<Record<string, boolean>>({
    org: true,
    scope1: true,
    scope2: true,
  })
  const [emissionsData, setEmissionsData] = useState<EmissionData[]>([])
  const [selectedData, setSelectedData] = useState<EmissionData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setEmissionsData(getEmissionsData())
  }, [])

  const toggleScope = (id: string) => {
    setExpandedScopes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleUpdateClick = (dataId: string) => {
    const data = emissionsData.find((d) => d.id === dataId)
    if (data) {
      setSelectedData(data)
      setIsModalOpen(true)
    }
  }

  const handleDataUpdate = (value: number) => {
    if (selectedData) {
      updateEmissionData(selectedData.id, value)
      setEmissionsData(getEmissionsData())
    }
  }

  const getDataValue = (dataId: string) => {
    const data = emissionsData.find((d) => d.id === dataId)
    return data ? data.value : 0
  }

  return (
    <div className="bg-gray-700 min-h-screen p-8">
      <div className="max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Collect & update data</h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Data is the raw material of your emission calculations – the better quality it has and the more complete it
            is, the better your emission estimations will be. The better your emission estimations, the more targeted
            your decarbonisation actions can be.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {scopeData.map((scope) => (
            <div key={scope.id}>
              {/* Section Header */}
              <button
                onClick={() => toggleScope(scope.id)}
                className={`w-full flex items-center justify-between p-4 rounded ${
                  expandedScopes[scope.id] ? "bg-gray-600" : "bg-gray-600"
                } hover:bg-gray-500 transition-colors`}
              >
                <span className="text-lg font-semibold text-gray-100">{scope.title}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-300 transition-transform ${expandedScopes[scope.id] ? "rotate-180" : ""}`}
                />
              </button>

              {/* Items */}
              {expandedScopes[scope.id] && (
                <div className="space-y-3 mt-3">
                  {scope.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-600 p-4 rounded flex items-center justify-between hover:bg-gray-500 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="text-gray-200 font-medium">{item.name}</p>
                          {item.dataId && (
                            <p className="text-gray-400 text-sm">
                              Current: {getDataValue(item.dataId)}{" "}
                              {emissionsData.find((d) => d.id === item.dataId)?.unit || ""}
                            </p>
                          )}
                        </div>
                      </div>
                      {item.hasUpdate && (
                        <Button
                          onClick={() => handleUpdateClick(item.dataId || item.id)}
                          variant="ghost"
                          className="text-gray-200 hover:text-white"
                        >
                          Update data
                          <ChevronRight size={16} className="ml-2" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedData && (
        <UpdateDataModal
          data={selectedData}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedData(null)
          }}
          onUpdate={handleDataUpdate}
        />
      )}
    </div>
  )
}
