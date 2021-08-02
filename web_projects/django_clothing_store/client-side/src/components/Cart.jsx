import React, {useContext, useEffect, useState} from 'react'
import {CartContext} from '../components/CartContext'
import '../css/Cart.css';
import axios from 'axios'

const Cart = () =>{
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr)=> (acc + curr.product_total_price * 100 / 100), 0)
    const totalItems = cart.reduce((acc, curr) => acc + curr.product_qty, 0 )
    const totalPriceStr = totalPrice.toFixed(2)
    const[deleteState, setDeleteState] = useState(false)
    const[size, setSizes] = useState([])
    const[updateCart, setUpdateCart] = useState([])


    const deleteItem = (idx1) =>{

       setCart(cart.filter((currItem, idx)=> idx !== idx1 ))
    }
    useEffect(() => {
        setDeleteState(false)
        axios.get("http://localhost:8000/api/get-sizes/")
            .then(res => {
                setSizes(res.data)
                console.log("*****")
                console.log(res.data)
            }).catch(err => console.log(err))
    }, [deleteState])

    const editqty = (id) =>{

       let qtyNumber = document.getElementById(id)
       let qtyInput =  document.getElementById(id + "input")

        if( qtyInput.style.display == "none"){
            qtyInput.style.display = "inline"
            qtyNumber.style.display = "none"

        }
        else if(qtyNumber.style.display == "none"){
            qtyInput.style.display = "none"
            qtyNumber.style.display = "inline"
        }
 
    }

    const updateQty = (e, id)=>{
        let intQty = parseInt(e.target.value)
        let items = [...cart]
        let item = {...items[id]}
        item.product_qty = intQty
        item.product_total_price = intQty * item.product_price
        cart[id] = item
        setDeleteState(true)

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
                {cart.length == 0 ? <><li> <h3>No items in your cart...</h3></li></>
                : 
                cart.map((currItem, idx1) =>{
                     
                    if(cart.length >= 1){
                        return <>
                        <li className="list-prods" key={currItem.product_id}>
                          <div className="photo-img-holder">
                              <img className="photo-img-cart" src={'http://127.0.0.1:8000' + currItem.product_img} alt="item"  />
                          </div>
                          <h4>{currItem.product_name}</h4> 
                          <h4>${currItem.product_price} <span className="per-text">Per Unit</span></h4>
                          <h5>Total: ${currItem.product_total_price.toFixed(2)}</h5>
                          <hr></hr>
                          <p className="product-info">
                              <div className="item-cart">
                                  <div><span>Size:</span></div>
                                  <div><b className="bold-item">{currItem.product_size}</b></div>
                              </div>
                              <div className="item-cart">
                                  <div><span>Qty:</span></div>

                                  <div>
                                      <b id={idx1 }> {currItem.product_qty}</b>
                                      <input max='5' min="1" onChange={(e)=>{updateQty(e, idx1)}} type="number" id={idx1 + "input"} style={{display:'none', width:'40px'}}/>
                                  </div>
                                
                            </div>  
                              <div className="item-cart"><span id="edit" class="material-icons" onClick={()=>editqty(idx1)}>edit</span></div>
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