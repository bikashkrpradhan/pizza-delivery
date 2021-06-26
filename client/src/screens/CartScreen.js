import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import { deleteFromCart } from '../actions/cartAction'
import { useRef } from 'react'

function CartScreen() {
    const cartState = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    let sum = 0
    return (
        <>
            <h1 className="headernamefont text-center">My Cart</h1>
            <div className="main flex flex-row  justify-content-around">
                <div className="cartInfo col-md-4 ">
                    <hr />
                    {
                        cartState.cartItems.map((item) => {
                            return (
                                <>
                                    <div className="cartContainer  border-bottom" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="">
                                            <h4 className="">{item.name}[{item.varient}]</h4>

                                            <h6>Price: {item.quantity}x{item.prices[0][`${item.varient}`]} = {item.price}</h6>

                                            <h6>Quantity<b>: </b>
                                                <i onClick={() => {
                                                    if (item.quantity < 2) { dispatch(deleteFromCart(item)); return }
                                                    dispatch(addToCart(item, item.quantity - 1, item.varient))
                                                }} className="dim fa fa-minus-circle minus" aria-hidden="true"></i> {item.quantity} <i onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }} className="dim fa fa-plus-circle plus" aria-hidden="true"></i></h6>
                                        </div>
                                        <div>
                                            <img className="dim" src={item.image} style={{ width: "100px", height: "100px" }} />
                                            <i onClick={() => { dispatch(deleteFromCart(item)) }} class="trash dim fas fa-trash"></i>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
                <div className="flex flex-column totalPrice text-center col-md-4">
                    {
                        cartState.cartItems.map((item) => {
                            sum = sum + item.price
                        })}
                    <h1 className="border-bottom">Total Cost</h1>
                    <h4>${sum}</h4>
                    <button className="btn btn-danger">Pay&Order</button>
                </div>
            </div>
        </>
    )
}

export default CartScreen