import React, { useState } from 'react'
import Tachyons from 'tachyons'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Modal} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../actions/cartAction'

export default function PizzaCard({ pizza }) {
    const [varient, setvarient] = useState('small')
    const [quantity, setquantity] = useState('1')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const addtocart = () => {
        dispatch(addToCart(pizza,quantity,varient))
    }
    
    return (
        <div>

            <div onClick={handleShow}>
                <h1 className="pizzaname f3 h3 tc">{pizza.name}</h1>
                <img style={{ width: "200px", height: "200px" }} className="grow img-fluid h5 rounded mx-auto d-block" src={pizza.image} alt="pizzaimages" />
            </div>

            <div className="varientandquantity">
                <div className="varient">
                    <p>Varient:</p>
                    <select value={varient} onChange={(e) => { setvarient(e.target.value) }} className="form-control">
                        {pizza.varients.map(v => {
                            return (
                                <option value={v}>{v}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="quantity">
                    <p>Quantity:</p>
                    <select value={quantity} onChange={(e) => { setquantity(e.target.value) }} className="form-control">
                        {
                            [...Array(10).keys()].map((i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })
                        }
                    </select>
                </div>
            </div>

            <div className="priceandaddtocart">
                <h1 className="tc b">Price: {quantity * pizza.prices[0][varient]}</h1>
                <button onClick={addtocart} className="tc btn btn-danger">Add to Cart</button>
            </div>

            <Modal show={show}>
                <Modal.Header onClick={handleClose} closeButton>
                    <Modal.Title className="h-25">{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="dim img-fluid h5 rounded mx-auto d-block"/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={handleClose} className="btn btn-danger">Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
