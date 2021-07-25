import React, {useContext} from 'react'
import {CartContext} from '../components/CartContext'
import '../css/Cart.css';
const Cart = () =>{
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr)=> (acc + curr.price * 100 / 100), 0)
    const totalPriceStr = totalPrice.toFixed(2)
    return (
        <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div className="main">
            <div className="header">
                <h3>Your Cart</h3>
            </div>
            <div className="items">
                <ul className="productss"> 
                {cart.map((currItem) =>{
                    
                    if(cart.length >= 1){
                        return <>
                        <li className="list-prods" key={currItem.id}>
                          <div>
                              <img src={'http://127.0.0.1:8000' + currItem.photo} alt="item" height="200" width="200" />
                          </div>
                          <h4>{currItem.name} - ${currItem.price}</h4> 
                          <hr></hr>
                          <p className="product-info">
                              <div className="item-cart">Size: M  </div>
                              <div className="item-cart">Qty: 0</div>  
                              <div className="item-cart"><span class="material-icons">edit</span></div>
                              <div className="item-cart"> <span id="delete" class="material-icons">delete</span></div></p>
                        </li>
                       </>
                    }
                })}
                </ul>
                <hr></hr>
                <h3>Total Item(s): {cart.length}</h3>
                <h4>Total Price: ${totalPriceStr}</h4>
                <button type="button" className="btn-primary btn">Check Out</button>
            </div>
            
        </div>
        
        </>
    )





}

export default Cart;