import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const ProductOverView = (props) => {
    const [product, setProduct] = useState([])
    const[deleteState, setDeleteState] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/get-product/" + props.id + "/")
        .then(res => {
            setProduct(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
            
        })
    },[deleteState])

    return (
        <>
            <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p><img src={'http://127.0.0.1:8000' + product.photo1} alt="item" height="200" width="200" /></p>
                {product.photo2 ? <p><img src={'http://127.0.0.1:8000' + product.photo2} alt="item" height="200" width="200" /></p>: null}
                {product.photo3 ? <p><img src={'http://127.0.0.1:8000' + product.photo3} alt="item" height="200" width="200" /></p> : null}
            </div>
        </>
    )
}

export default ProductOverView;