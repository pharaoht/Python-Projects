import React, {useContext} from 'react'
import {CartContext} from '../components/CartContext'
import '../css/Cart.css';
const Cart = () =>{
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr)=> (acc + curr.product_total_price * 100 / 100), 0)
    const totalItems = cart.reduce((acc, curr) => acc + curr.product_qty, 0 )
    const totalPriceStr = totalPrice.toFixed(2)

    const deleteItem = (idx1) =>{
       setCart(cart.filter((currItem, idx)=> idx !== idx1 ))
    }

    return (
        <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div className="main">
            <div className="header">
                <h3>Your Cart</h3>
            </div>
            <div className="items">
                <ul className="productss"> 
                {cart.map((currItem, idx1) =>{
                    
                    if(cart.length >= 1){
                        return <>
                        <li className="list-prods" key={currItem.id}>
                          <div>
                              <img src={'http://127.0.0.1:8000' + currItem.product_img} alt="item" height="200" width="200" />
                          </div>
                          <h4>{currItem.product_name}</h4> 
                          <h4>${currItem.product_price} <span className="per-text">Per Unit</span></h4>
                          <h5>Total: ${currItem.product_total_price.toFixed(2)}</h5>
                          <hr></hr>
                          <p className="product-info">
                              <div className="item-cart">Size: <b>{currItem.product_size}</b></div>
                              <div className="item-cart">Qty: <b>{currItem.product_qty}</b></div>  
                              <div className="item-cart"><span class="material-icons">edit</span></div>
                              <div className="item-cart"> <span id="delete" class="material-icons" onClick={()=>deleteItem(idx1)}>delete</span></div></p>
                        </li>
                       </>
                    }
                })}
                </ul>
                <hr></hr>
                <h3>Total Item(s): {totalItems}</h3>
                <h4>Total Price: ${totalPriceStr}</h4>
                <button type="button" className="btn-primary btn">Check Out</button>
            </div>
            
        </div>
        
        </>
    )

}

export default Cart;