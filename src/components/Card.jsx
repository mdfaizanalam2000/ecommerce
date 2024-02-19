import React from 'react'

const Card = ({ product, handleAddToCart }) => {
    return (
        <div className="col-md-3 col-12 my-3">
            <div className="card">
                <img src={product.thumbnail} className="card-img-top" alt="product_image" />
                <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">{product.description.substr(0, 50)}...</p>
                    <div className="price-label mb-2">
                        <span className="badge bg-danger">{product.discountPercentage}% off</span>
                        <br />
                        <span className='badge bg-secondary'>₹{product.price * 84}</span>
                        <span className="badge bg-secondary ms-2">{product.rating}⭐</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)} className="btn btn-success">Add to Cart <i className="bi bi-cart-plus-fill"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card