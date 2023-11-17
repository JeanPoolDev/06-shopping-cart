import { createContext, useState } from "react";

//* 1. Crear el Contexto
export const FiltersContext = createContext()

//* Crear el Provider, para proveer el contexto
// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}