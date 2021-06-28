import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const AddProduct = () =>{
    const[allCategories, setAllCategories] = useState([])
    const[deleteState, setDeleteState] = useState(false)

    const[formErrors, setFormErrors] = useState({
        name : "",
        price: "",
        quantity:"",
        photo:"",
        photo2:"",
        photo3:"",
        description:"",
        category:""
    })

        const[formInfo, setFormInfo] = useState({
        name : "",
        price: "",
        quantity:"",
        photo:"",
        photo2:"",
        photo3:"",
        description:"",
        category:""
    })
    

    useEffect(() =>{
        axios.get("http://localhost:8000/api/get-all-categories/")
        .then(res =>{

            setAllCategories(res.data)  

        }).catch(err => console.log(err))
    },[deleteState])

    const changeHandler = (e) =>{
         setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
            })
    }

    const header = {
        "enctype":"multipart/form-data"
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(formInfo)
        axios.post("http://localhost:8000/api/add-new-product/", formInfo,{
            headers: header,
        })
        .then(res=>{
            console.log(res)
        }).catch(err => {
            setFormErrors(err.response)
            console.log(formErrors)
        })
    }


    return (
        <div className="container">
            <h1>What Product do you want to add?</h1>
            <form onSubmit={submitHandler} enctype='multipart/form-data' >
            <span>Name of item</span>
            <p className="text-danger" role="alert">{formErrors ? formErrors.name : "" }</p>
            <p><input type="text" name="name" onChange={changeHandler}/></p>
            <span>Price</span>
            <p>$<input type="number" step="0.01" min="0.01"name="price" onChange={changeHandler}/></p>
            <span>How much will be in stock?</span>
            <p><input type="number"min="0.00" name="quantity" onChange={changeHandler}/></p>
            <span>Photo #1</span>
            <p><input type="file" name="photo" onChange={changeHandler}/></p>
            <span>Photo #2</span>
            <p><input type="file" name="photo2" onChange={changeHandler}/></p>
            <span>Photo #3</span>
            <p><input type="file" name="photo3" onChange={changeHandler}/></p>
            <span>Description</span>
            <p><textarea name="description" onChange={changeHandler}></textarea></p>
            <span>Category</span>
            <p>
                <select name="category" onChange={changeHandler}>
                    <option value="0">Select</option>
                {allCategories.map((currentCat,idx) =>{
                    return <option id="currentCat.id" value={currentCat.id} >{currentCat.name}</option>
                })}
               </select>
            </p>
            <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProduct;