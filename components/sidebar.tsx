"use client"

import { useState } from "react"
import { ChevronDown, LayoutGrid, Users, Flame, Zap, Droplet, Gift, Package, Leaf } from "lucide-react"

const scopeSections = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutGrid,
    children: [],
  },
  {
    id: "org-data",
    label: "Organisational data",
    icon: Users,
    children: [],
  },
  {
    id: "scope-1",
    label: "Scope 1",
    icon: null,
    children: [
      { id: "stationary", label: "Stationary combustion", icon: Flame },
      { id: "mobile", label: "Mobile combustion", icon: Gift },
      { id: "fugitive", label: "Fugitive emissions", icon: Leaf },
    ],
  },
  {
    id: "scope-2",
    label: "Scope 2",
    icon: null,
    children: [
      { id: "electricity", label: "Purchased electricity", icon: Zap },
      { id: "heat", label: "Purchased heat", icon: Droplet },
    ],
  },
  {
    id: "scope-3",
    label: "Scope 3",
    icon: null,
    children: [
      { id: "goods", label: "Purchased goods and services", icon: Package },
      { id: "products", label: "Use of sold products", icon: Package },
      { id: "eol", label: "End-of-life treatment of sold pr...", icon: Leaf },
    ],
  },
]

export function Sidebar({
  // currentPage,
  // onPageChange,
}: {
  currentPage: string
  onPageChange: (page: "collect" | "measure" | "report" | "reduce") => void
}) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "scope-1": true,
    "scope-2": false,
    "scope-3": false,
  })

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <aside className="w-64 bg-gray-600 text-white flex flex-col overflow-hidden">
      <div className="p-6 border-b border-gray-500">
        <h2 className="text-sm font-medium flex items-center gap-2 text-gray-300">
          <LayoutGrid size={18} />
          Overview
        </h2>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-1">
          {scopeSections.map((section) => (
            <div key={section.id}>
              {section.children.length === 0 ? (
                <button className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-500 rounded transition-colors flex items-center gap-3">
                  {section.icon && <section.icon size={18} />}
                  {section.label}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-200 hover:bg-gray-500 rounded transition-colors flex items-center justify-between"
                  >
                    <span>{section.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${expandedSections[section.id] ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedSections[section.id] && (
                    <div className="ml-4 space-y-1 mt-1">
                      {section.children.map((child) => (
                        <button
                          key={child.id}
                          className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-500 rounded transition-colors flex items-center gap-3"
                        >
                          {child.icon && <child.icon size={16} />}
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  )
}
