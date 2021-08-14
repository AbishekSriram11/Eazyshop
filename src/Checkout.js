import React from 'react'
import { useStateValue } from './StateProvider';
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout__left">   
            {/* <img
            className="checkout__add"
            src="https://pbs.twimg.com/media/ESzPfgzUwAAgwby?format=jpg&name=small"
            alt=""
            />     */}
                <div className ="checkout">
                    {basket?.length === 0 ? (
                        <div className="checkout__left">
                            <h1>Empty basket</h1>
                            <p>to add items click on the add to basket button bellow the image of the item</p>
                        </div>    
                    ):(
                        <div className="checkout__title">
                            <h2>Your Shoppin basket</h2>
                            {basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                    />
                                ))}

<div className="checkout__right">
                        <Subtotal />
                    </div>
                        </div>
                        )} 
                </div>  
            </div>
        );
    }

export default Checkout
 