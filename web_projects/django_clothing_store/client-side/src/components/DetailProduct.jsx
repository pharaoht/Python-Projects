import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import '../css/Detailpage.css';
const ProductOverView = (props) => {
    const [product, setProduct] = useState([])
    const[deleteState, setDeleteState] = useState(false)
    const[allProducts, setAllProducts] = useState([])
    const gen = 1
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

    return (
        <>
            <div>
                <h3>{product.name}</h3>
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
                        <form>
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
                        <h4>Size:</h4>
                        <button className="btn-primary">Add to Cart!</button>
                        </form> 
                        <hr></hr>
                        <h4>Similar Items:</h4>
                        <div className="similar-items">
                        
                            {allProducts.map((currentItem, idx) =>{
                                const url = '/item/' + currentItem.id + '/' + currentItem.category.id + '/'
                                if (currentItem.id != product.id){
                                    return <>
                                        <a href={url}>
                                        <img src={'http://127.0.0.1:8000' + currentItem.photo1} alt="item"/>
                                        </a>
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
