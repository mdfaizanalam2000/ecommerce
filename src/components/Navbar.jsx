import React, { useEffect, useState } from 'react'
import CartModal from './CartModal'

const Navbar = ({ products, setProducts, cartItems, setCartItems }) => {
    const allData = require("../products.json")
    const [query, setQuery] = useState("")

    useEffect(() => {
        if (query.length > 0) {
            const filtered = products.filter((item) => {
                return item.title.toUpperCase().includes(query.toUpperCase()) || item.description.toUpperCase().includes(query.toUpperCase())
            })
            setProducts(filtered)
            document.querySelector(".filter-message").innerText = `Showing results for "${query}"`
        } else {
            document.querySelector(".filter-message").innerText = ""
        }
        // eslint-disable-next-line
    }, [query])

    const handleFilter = (e) => {
        setProducts(allData.products)
        setQuery(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shopsy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <input name='search' value={query} onChange={handleFilter} className="form-control" type="search" placeholder="Type here to search for specific product..." aria-label="Search" />
                    <div className="cart-btn">
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Go to cart <i className="bi bi-cart"></i> <span className="badge text-bg-dark">{cartItems.length}</span>
                        </button>
                        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar