import React from 'react'

function Product(props) {

    return (
        <>
            <div className='products '>
                <div className='col-md-4'>
                    <div className='product'>
                        <h2>{props.title}</h2>
                        <p>{props.price}</p>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product