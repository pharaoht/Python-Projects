import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link} from '@reach/router'
import '../css/Detailpage.css';
import {CartContext} from '../components/CartContext'

const ProductOverView = (props) => {
    const [product, setProduct] = useState([])
    const[deleteState, setDeleteState] = useState(false)
    const[allProducts, setAllProducts] = useState([])
    const[sizes, setSizes] = useState([])
    const [cart, setCart] = useContext(CartContext)
    const gen = 1
    const totalPrice = cart.reduce((acc, curr)=> acc + curr.price, 0)

    useEffect(()=>{

        axios.get("http://localhost:8000/api/get-product/" + props.id + "/",)
        .then(res =>{
            setProduct(res.data)
        }).catch(err => console.log(err))

        axios.get("http://localhost:8000/api/filter/" + props.catid + "/" + gen + "/")
            .then(res => {
                setAllProducts(res.data)
                console.log("*****")
                console.log(res.data)
            }).catch(err => console.log(err))

        axios.get("http://localhost:8000/api/get-sizes/")
            .then(res => {
                setSizes(res.data)
                console.log("*****")
                console.log(res.data)
            }).catch(err => console.log(err))
        

    },[deleteState])

    const imgChanger = (num) =>{
        console.log(product.category.id, product.gender.id )
        if(num ==3){
            document.getElementById('mainImg').src = `http://127.0.0.1:8000${product.photo3}`
        }else if(num == 2){
            document.getElementById('mainImg').src = `http://127.0.0.1:8000${product.photo2}`
        }else if(num == 1){
            document.getElementById('mainImg').src = `http://127.0.0.1:8000${product.photo1}`
        }
        
    }

    const addToCart = () =>{
        var intPrice = parseFloat(product.price)
        var rnd = Math.round(intPrice * 100) / 100
        const item = {name: product.name, price: rnd, photo: product.photo1, desc: product.description, id: product.id}
        setCart(curr => [...curr, {...item}])
        setTimeout(console.log(totalPrice), 2000)
        
    }

    const windowChange = () =>{

    }


    return (
        <>
            <div>
                <h2>{product.name}</h2>
            </div>
            <div className="main-holder">
                <div className="img-info">
                    <p><img className="main-img" src={'http://127.0.0.1:8000' + product.photo1} alt="item" height='500' id="mainImg"/></p>
                    <div className="more-images">
                        <div ><img className="sm-imgs" src={'http://127.0.0.1:8000' + product.photo1} alt="item" height="100" width="100" onClick={(e)=> imgChanger(1)}/></div>
                        <div >{product.photo2 ? <img className="sm-imgs" src={'http://127.0.0.1:8000' + product.photo2} alt="item" height="100" width="100" onClick={(e)=> imgChanger(2)}/>: null}</div>
                        <div >{product.photo3 ? <img className="sm-imgs" src={'http://127.0.0.1:8000' + product.photo3} alt="item" height="100" width="100" onClick={(e)=> imgChanger(3)}/>: null}</div>
                    </div>
                </div>
                <div className="text-desc">
                    <p>{product.description}</p>
                    <div>
                        <hr></hr>
                        <h4>{product.name}</h4>
                        <h4>Price: ${product.price}</h4>
                        <h4>Quantity:
                        <select> 
                        <option>1</option>
                        <option>2</option> 
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select></h4>
                        <div className="size-holder">
                            <h4>Size:</h4>
                            <div className="boxed">
                            {sizes.map((currentItem, idx)=>{
                                return <>
                                <div className="sizes">
                                <input type="radio" id={currentItem.id} name="size" value={currentItem.name} key={currentItem.id}/>
                                <label for={currentItem.id}>{currentItem.name}</label>
                                </div>
                                </>
                            })}
                            </div>
                        </div>
                        
                        <button className="btn-primary btn" onClick={() => addToCart(product.id)}>Add to Cart!</button>
                        <hr></hr>
                        <h4>Similar Items:</h4>
                        <div className="similar-items">
                        
                            {allProducts.map((currentItem, idx) =>{
                                const url = '/item/' + currentItem.id + '/' + currentItem.category.id + '/'
                                if (currentItem.id != product.id){
                                    return <>
                                        <Link to={url}><img onClick={windowChange} src={'http://127.0.0.1:8000' + currentItem.photo1} alt="item"/></Link>
                                    </>
                                }else if (allProducts.length == 1){
                                    return <>
                                        <div>No items available</div>
                                    </>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductOverView;
