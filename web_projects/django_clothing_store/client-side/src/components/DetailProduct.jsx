import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link} from '@reach/router'
import '../css/Detailpage.css';
import {CartContext} from '../components/CartContext'

const ProductOverView = (props) => {
    const[product, setProduct] = useState([])
    const[deleteState, setDeleteState] = useState(false)
    const[allProducts, setAllProducts] = useState([])
    const[sizes, setSizes] = useState([])
    const[quanities, setQuantities] = useState([])
    const [cart, setCart] = useContext(CartContext)
    const [formInfo, setFormInfo] = useState({
        product_name: "",
        product_price: "",
        product_total_price:"",
        product_img: "",
        product_qty:"",
        product_size:"",
        product_id:"",
    })
    //make gender id dynamic
    console.log(props)
    const gen = props.genid

    useEffect(()=>{

        setDeleteState(false)
        axios.get("http://localhost:8000/api/get-product/" + props.id + "/",)
        .then(res =>{
            setProduct(res.data)
            console.log(res.data)
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

        axios.get("http://localhost:8000/api/get-quantities/")
            .then(res => {
                setQuantities(res.data)
                console.log("*****")
                console.log(res.data)
            }).catch(err => console.log(err))
    },[deleteState])

    const changeHandler = (e) => {
        var floatPrice = parseFloat(product.price)
        if(e.target.name === "product_qty"){
            var intQty = parseInt(e.target.value)
            console.log(formInfo.product_size)
            setFormInfo({
                ...formInfo,
                [e.target.name]: intQty,
                product_id: props.id,
                product_name:product.name,
                product_price: floatPrice, 
                product_total_price: floatPrice * intQty,
                product_img: product.photo1,
            })
        }else{
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.value,
        })
        }
    }

    const imgChanger = (num) =>{
        console.log(product.category.id, product.gender.id )
        if(num === 3){
            document.getElementById('mainImg').src = `http://127.0.0.1:8000${product.photo3}`
        }else if(num === 2){
            document.getElementById('mainImg').src = `http://127.0.0.1:8000${product.photo2}`
        }else if(num === 1){
            document.getElementById('mainImg').src = `http://127.0.0.1:8000${product.photo1}`
        }
        
    }

    const addToCart = (e) =>{
        e.preventDefault()
        console.log(formInfo)
        if(formInfo.product_size === "" || formInfo.product_qty === ""){        
            document.getElementById('alert').style.display = "block"
            return null
        }
        setCart(curr => [...curr, {...formInfo}])
    }

    const triggerRender = (id)=>{
        axios.get("http://localhost:8000/api/get-product/" + id + "/",)
        .then(res =>{
            setProduct(res.data)
            document.querySelector('input[name="product_size"]:checked').checked = false;
            document.querySelector('input[name="product_qty"]:checked').checked = false;
            setFormInfo({        
                product_name: "",
                product_price: "",
                product_total_price:"",
                product_img: "",
                product_qty:"",
                product_size:"",
                product_total_price: 0
            })
            
        }).catch(err => console.log(err))
    }

    const closeAlert = () =>{
        document.getElementById('alert').style.display = "none"
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
                        <div className="alert alert-warning .alert-dismissible" role="alert"  id="alert">
                            Please select a <b>size</b> and <b>quantity</b> before adding to your cart.
                            <span className="close" onClick={closeAlert}>X</span>
                        </div>
                        <h4>{product.name}</h4>
                        <h4>Price: ${product.price}</h4>
                        <form onSubmit={addToCart}>
                        <div className="size-holder">
                            <h4>Quantity:</h4>
                            <div className="boxed">
                            {quanities.map((currentItem, idx)=>{
                                return <>
                                <div className="sizes">
                                <input className="sel-radio" type="radio" id={currentItem.name} name="product_qty" value={currentItem.id} key={currentItem.id} onChange={changeHandler}/>
                                <label for={currentItem.id}>{currentItem.id}</label>
                                </div>
                                </>
                            })}
                            </div>
                        </div>


                        <div className="size-holder">
                            <h4>Size:</h4>
                            <div className="boxed">
                            {sizes.map((currentItem, idx)=>{
                                return <>
                                <div className="sizes">
                                <input type="radio" name="product_size"  key={currentItem.name} id={currentItem.name} value={currentItem.name} onChange={changeHandler}/>
                                <label for={currentItem.name}>{currentItem.name}</label>
                                </div>
                                </>
                            })}
                            </div>
                        </div>
                        
                        <button className="btn-primary btn" type="submit">Add to Cart!</button>
                        </form>
                        <hr></hr>
                        <h4>Similar Items:</h4>
                        <div className="similar-items">
                        
                            {allProducts.map((currentItem) =>{
                                const url = '/item/' + currentItem.id + '/' + currentItem.category.id + '/' + currentItem.gender.id + "/"
                                if (currentItem.id !== product.id){
                                    return <>
                                        <Link to={url} onClick={() => triggerRender(currentItem.id)}><img src={'http://127.0.0.1:8000' + currentItem.photo1} alt="item"/></Link>
                                    </>
                                }else if (allProducts.length === 1){
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
