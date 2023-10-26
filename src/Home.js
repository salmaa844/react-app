import React from 'react'
import Product from './Product.jsx'

export default function Home() {
  const products = [
        {id:1,title:'product one',desc:'this is product one', price:'2000'},
        {id:2,title:'product two',desc:'this is product two', price:'3000'},
        {id:3,title:'product three',desc:'this is product three', price:'4000'},
    ];
  return (
    <>
    <div className='row'>
    {products.map((product)=> {
     return <Product {...product} key={product.id}/>
      
    })}
    </div>
    
      
    </>
  )
}
