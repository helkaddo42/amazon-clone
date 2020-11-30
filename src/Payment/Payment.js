import React, { useState } from 'react';
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useHistory } from 'react-router-dom';
import './Payment.css';

function Payment() {
    const [{ basket, user },] = useStateValue();
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const history = useHistory();

    const handleSubmit = (event) => {
        console.log("user -->", user)
        event.preventDefault();
        setProcessing(true);
        
        setTimeout(()=> {
            setProcessing(false);
            history.push('/commandeSucces')
        }, 2000)
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        
                        <form onSubmit={handleSubmit}>
                                
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button style={{cursor:'pointer'}}disabled={processing || disabled || user === null}>
                                    <span>{processing ? <p>Loading ...</p> : "Buy Now"}</span>
                                </button>
                                {user === null && <p>Log in to place your order</p>}
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment