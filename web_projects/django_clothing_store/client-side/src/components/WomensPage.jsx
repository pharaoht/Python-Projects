import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link} from '@reach/router'
import '../css/Womenspage.css';


const WomensPage = () =>{
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

        axios.get("http://localhost:8000/api/get-all-female-products/")
        .then(res =>{
            console.log(res)
            setAllProducts(res.data.results)
            setPaginationNext(res.data.next)
            setPaginationPrev(res.data.previous)
            
        }).catch(err => console.log(err))
    },[deleteState])

        const filter = (e, catid) =>{
        const gender = 2
        const catIntId = parseInt(catid)

        if(catIntId === -1){
                axios.get("http://localhost:8000/api/get-all-female-products/")
                .then(res =>{
                setAllProducts(res.data.results)
                
                }).catch(err => console.log(err))
        }else{
                axios.get("http://localhost:8000/api/filter/" + catIntId + "/" + gender + "/")
                .then(res => {
                    setAllProducts(res.data)
                
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
                <h3>Women's Apparel </h3>
            </div>
            <div className="main-holder">
                <div className="sidebar">
                    <ul>
                    {allCategories.map((currentItem, idx) =>{
                        return <li key={currentItem.id} className="cate-list"><Link onClick={(e) => filter(e, currentItem.id)} to="#">{currentItem.name}</Link></li>
                    })}
                    <li key="a"className="cate-list"><Link onClick={(e) => filter(e, -1)}  to="#">All</Link></li>
                    </ul>
                </div>
                <div className="main-container">
                    <ul className="products"> 
                        {allProducts.map((currentItem) =>{

                            return <li className="list-prod" key={currentItem.id}>
                                <div className="item">
                                    <Link to={'/item/' + currentItem.id + '/' + currentItem.category.id + '/' + currentItem.gender.id + '/'}>
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
                        <div><Link onClick={(e)=> pagPrev(e, paginationPrev)}to="#">Previous</Link></div>
                        
                        <div><Link onClick={(e)=> pagNext(e, paginationNext)}to="#">Next</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomensPage;