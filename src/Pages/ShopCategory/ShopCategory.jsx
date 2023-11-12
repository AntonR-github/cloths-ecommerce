import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from './../../Context/ShopContext';
import dropdown_icon from './../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item';

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((product, index) => {
          if (props.category === product.category) {
            return <Item
              key={index}
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          }
          else { return null }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
