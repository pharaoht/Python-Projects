import './App.css';
import {Router, Link} from '@reach/router';
import Login from './components/login'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddProduct from './components/AddProduct';


function App() {

  const [allProducts, setAllProducts] = useState([])
  const[deleteState, setDeleteState] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/get-all-t-shirts/")
    .then(res =>{
      console.log(res.data)
    }) .catch(err => console.log(err))
  },[deleteState])


  return (
   <div className="App container">
     <div>
        
      </div>






     <Router>
       <Login path='/login'></Login>
       <AddProduct path='/admin/add-product'></AddProduct>
     </Router>
     
   </div> 
  );
}

export default App;
