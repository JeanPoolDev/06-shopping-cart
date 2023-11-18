/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.jsx'

export function Products ({ products }){
  const { addToCart, cart, removeFromCart } = useCart()
  
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        { products.slice(0, 10).map(product => {
        const isProductoInCart = checkProductInCart(product)
        return (
          <li key={product.id}>
            <img 
              src={product.thumbnail} 
              alt={product.title} 
            />

            <div>
              <strong>{product.title} - S/{product.price}</strong>
            </div>

            <div>
              <button style={{ backgroundColor: isProductoInCart ? 'red' : '#493657'}} 
              
              onClick={() => {
                isProductoInCart
                 ? removeFromCart(product)
                 : addToCart(product)
              }}>
                {
                  isProductoInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon /> 
                }
              </button>
            </div>
          </li>
        )
        })}
      </ul>
    </main>
  )
}