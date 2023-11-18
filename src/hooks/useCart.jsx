import { useContext } from 'react';
import { CartContext } from '../context/Cart';

export const useCart = () => {
  const context = useContext( CartContext )

  if ( context === undefined){
    throw new Error('UseCART must be defined')
  }

  return context 
}
