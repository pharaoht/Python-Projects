import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import '../css/Menspage.css';


const Menpage = () =>{
    
    const[allCategories, setAllCategories] = useState([])
    const[deleteState, setDeleteState] = useState(false)
    const[allProducts, setAllProducts] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/get-all-categories/")
        .then(res =>{
            setAllCategories(res.data)  
        }).catch(err => console.log(err))

        axios.get("http://localhost:8000/api/get-all-products/")
        .then(res =>{
            setAllProducts(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
    },[deleteState])

     return (
         <>
            <div>
                <h3>Men's Attire</h3>
            </div>
            <div className="main-holder">
                <div className="sidebar">
                    <ul>
                    {allCategories.map((currentItem, idx) =>{
                        return <li key={currentItem.id} className="cate-list">{currentItem.name}</li>
                    })}
                    </ul>
                </div>
                <div className="main-container">
                    <ul className="products"> 
                        {allProducts.map((currentItem) =>{
                            return <li className="list-prod" id={currentItem.id}>
                                <div className="item">
                                    <div className="imageitem">
                                        <img src={'http://127.0.0.1:8000' + currentItem.photo1} alt="item" height="200" width="200" />
                                    </div>
                                    <div className="itemfooter">
                                        <p>{currentItem.name} - {currentItem.price}</p>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
          
        </>
     )
}

export default Menpage;