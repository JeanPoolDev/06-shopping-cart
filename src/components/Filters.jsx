import { useState, useId} from 'react'
import './Filters.css'

// eslint-disable-next-line react/prop-types
export function Filters ({ onchanged }) {
  const [minPrice, setMinPrice] = useState(0)

  //*Utilizando useId
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onchanged(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onchanged(prevState => ({
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
        />
        <span>S/{minPrice}</span>
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