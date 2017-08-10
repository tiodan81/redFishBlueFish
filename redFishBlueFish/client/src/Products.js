// @flow
import React from 'react'

type Product = {|
  id: number,
  name: string,
  price: number
|}

type Props = {
  products: Array<Product>
}

export default function Products({products}: Props) {
  return (
    <div>
      {products.map(product => {
        const { id, name, price } = product
        return (
          <div key={id}>
            <h3>Product: {name}</h3>
            <p>Price: ${price}</p>
          </div>
        )
      })}
    </div>
  )
}
