import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import '../css/Menspage.css';


const Menpage = () =>{
    
    const[allCategories, setAllCategories] = useState([])
    const[deleteState, setDeleteState] = useState(false)
    const[allProducts, setAllProducts] = useState([])
    const[paginationNext, setPaginationNext] = useState([])
    const[paginationPrev, setPaginationPrev] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/get-all-categories/")
        .then(res =>{
            setAllCategories(res.data)  
        }).catch(err => console.log(err))

        axios.get("http://localhost:8000/api/get-all-male-products/")
        .then(res =>{
            console.log(res)
            setAllProducts(res.data.results)
            setPaginationNext(res.data.next)
            setPaginationPrev(res.data.previous)
            
        }).catch(err => console.log(err))
    },[deleteState])

    const filter = (e, catid) =>{
        const gender = 1
        const catIntId = parseInt(catid)

        if(catIntId == -1){
            axios.get("http://localhost:8000/api/get-all-male-products/")
            .then(res =>{
                setAllProducts(res.data.results)
                
            }).catch(err => console.log(err))
        }else{
            axios.get("http://localhost:8000/api/filter/" + catIntId + "/" + gender + "/")
            .then(res => {
                setAllProducts(res.data)

                console.log(allProducts)
            }).catch(err => console.log(err))

        }
         

    }

    const pagNext = (e, url) =>{
        if(url == null || undefined){
            return null
        }
        axios.get(url)
        .then(res =>{
            setAllProducts(res.data.results)
            setPaginationNext(res.data.next)
            setPaginationPrev(res.data.previous)
        }).catch(err => console.log(err))
    }

    const pagPrev = (e, url) =>{
        if(url == null || undefined){
            return null
        }
        axios.get(url)
        .then(res =>{
            setAllProducts(res.data.results)
            setPaginationNext(res.data.next)
            setPaginationPrev(res.data.previous)
        }).catch(err => console.log(err))
    }

     return (
         <>
            <div>
                <h3>Men's Attire</h3>
            </div>
            <div className="main-holder">
                <div className="sidebar">
                    <ul>
                    {allCategories.map((currentItem, idx) =>{
                        return <li key={currentItem.id} className="cate-list"><a onClick={(e) => filter(e, currentItem.id)} href="#">{currentItem.name}</a></li>
                    })}
                    <li key="a"className="cate-list"><a onClick={(e) => filter(e, -1)}  href="#">All</a></li>
                    </ul>
                </div>
                <div className="main-container">
                    <ul className="products"> 
                        {allProducts.map((currentItem) =>{
                            return <li className="list-prod" id={currentItem.id}>
                                
                                <div className="item">
                                    <Link to={'/item/' + currentItem.id + '/' + currentItem.category.id + '/'}>
                                    <div className="imageitem">
                                        <img src={'http://127.0.0.1:8000' + currentItem.photo1} alt="item" height="200" width="200" />
                                    </div>
                                    <div className="itemfooter">
                                        <p>{currentItem.name} - ${currentItem.price}</p>
                                    </div>
                                    </Link>
                                </div>
                                
                            </li>
                        })}
                        
                    </ul>
                    <div className="product-footer">
                        <div><a onClick={(e)=> pagPrev(e, paginationPrev)}href="#">Previous</a></div>
                        
                        <div><a onClick={(e)=> pagNext(e, paginationNext)}href="#">Next</a></div>
                    </div>
                </div>
            </div>
          
        </>
     )
}

export default Menpage;