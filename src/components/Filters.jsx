import { useId} from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'
export function Filters () {
  //* Providers
  const { filters ,setFilters} = useFilters()

  //*Utilizando useId
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">

      <div>
        <label htmlFor={minPriceFilterId}>Precio desde: </label>
        <input 
          type="range" 
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice} 
        />
        <span>S/{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>

    </section>
  )
}