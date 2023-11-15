import './Footer.css'

export function Footer ({ filters }) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>




    // <footer className='footer'>
    //   <h4>Prueba técnica de React ⚛️ － <span>@JeanPooldev</span></h4>
    //   <h5>Shopping Cart con useContext & useReducer</h5>
    // </footer>
  )
}