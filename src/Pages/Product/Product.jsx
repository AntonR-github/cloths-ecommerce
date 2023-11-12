import React, { useContext } from 'react'
import { ShopContext } from './../../Context/ShopContext';

const Product = (props) => {

  const { all_product } = useContext(ShopContext);

  return (
    <div>
      product
    </div>
  )
}

export default Product
