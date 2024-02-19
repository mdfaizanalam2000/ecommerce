import React, { useEffect, useState } from 'react'

const CartModal = ({ cartItems, setCartItems }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0;
        for (const item of cartItems) {
            total += item.product.price * 84 * item.qty;
        }
        setTotal(total)
    }, [cartItems])

    const handleIncreaseQty = ({ product }) => {
        const latestCartItems = cartItems.map(item => { return item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item }
        )
        setCartItems(latestCartItems)
    }

    const handleDecreaseQty = ({ product, qty }) => {
        let latestCartItems = []
        if (qty === 1) {
            latestCartItems = cartItems.filter(item => { return item.product.id !== product.id }
            )
        } else {
            latestCartItems = cartItems.map(item => { return item.product.id === product.id ? { ...item, qty: item.qty - 1 } : item }
            )
        }
        setCartItems(latestCartItems)
    }

    const handleRemoveItem = ({ product }) => {
        let latestCartItems = cartItems.filter(item => { return item.product.id !== product.id })
        setCartItems(latestCartItems)
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Items in cart</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">SNo</th>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length > 0 ? cartItems.map((item, index) => {
                                    return <tr key={item.product.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.product.title}</td>
                                        <td><span onClick={() => handleDecreaseQty(item)} className="badge rounded-pill text-bg-warning">-</span> {item.qty} <span onClick={() => handleIncreaseQty(item)} className="badge rounded-pill text-bg-warning">+</span></td>
                                        <td>₹{item.product.price * item.qty * 84} <span onClick={() => handleRemoveItem(item)} title='remove item' className="badge rounded-pill text-bg-danger">X</span></td>
                                    </tr>
                                }) : <tr><td colSpan={4} className='text-center'>Cart is empty</td></tr>}
                            </tbody>
                        </table>
                        {cartItems.length > 0 && <div className='text-center'>Total amount to be paid: ₹{total}</div>}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Shop more</button>
                        <button disabled={cartItems.length === 0} onClick={() => alert("This feature is under development!")} type="button" className="btn btn-success">Proceed to payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal