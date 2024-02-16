import React from 'react'
import Card from './Card'

const Homepage = ({ products }) => {
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Shop for your favourite products at best price!</h3>
            <p className="filter-message text-center"></p>
            <div className="row">
                {products.length > 0 ? products.map((item) => {
                    return <Card key={item.id} product={item} />
                }) : <h6 className='text-center'>No data found</h6>}
            </div>
        </div>
    )
}

export default Homepage