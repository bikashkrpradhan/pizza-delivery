import React from 'react'
// import pizzas from '../pizzasdata'
import PizzaCard from '../components/PizzaCard'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tachyons from 'tachyons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'

export default function HomeScreen() {

    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <>
            <div className="row m-3">
                {loading ? (<h1>loading...</h1>) : error ? (<h1>something went wrong</h1>) : (
                    pizzas.map(pizza => {
                        return (
                            <div key={pizza._id} className="col-md-3  b pointer shadow-3 pa3  ba  b--light-blue br3">
                                <div >
                                    <PizzaCard pizza={pizza} />
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}
