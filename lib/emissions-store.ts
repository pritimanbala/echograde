export interface EmissionData {
  id: string
  category: string
  subcategory: string
  value: number
  unit: string
  lastUpdated: string
}

export interface EmissionsState {
  data: EmissionData[]
  addData: (data: EmissionData) => void
  updateData: (id: string, value: number) => void
  removeData: (id: string) => void
}

const emissionsData: EmissionData[] = [
  {
    id: "org-1",
    category: "Organisational data",
    subcategory: "Organisational data",
    value: 0,
    unit: "tonnes",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "stat-1",
    category: "Scope 1",
    subcategory: "Stationary combustion",
    value: 0,
    unit: "kWh",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "mob-1",
    category: "Scope 1",
    subcategory: "Mobile combustion",
    value: 0,
    unit: "litres",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "fug-1",
    category: "Scope 1",
    subcategory: "Fugitive emissions",
    value: 0,
    unit: "kg",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "elec-1",
    category: "Scope 2",
    subcategory: "Purchased electricity",
    value: 0,
    unit: "kWh",
    lastUpdated: new Date().toISOString(),
  },
]

export function getEmissionsData(): EmissionData[] {
  return emissionsData
}

export function updateEmissionData(id: string, value: number): void {
  const index = emissionsData.findIndex((d) => d.id === id)
  if (index !== -1) {
    emissionsData[index] = {
      ...emissionsData[index],
      value,
      lastUpdated: new Date().toISOString(),
    }
  }
}

export function addEmissionData(data: EmissionData): void {
  emissionsData.push(data)
}
