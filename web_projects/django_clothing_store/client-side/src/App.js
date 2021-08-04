import './App.css';
import {Router, Link, Navigate} from '@reach/router';
import Header from './components/Header';
import  React, {useEffect, useState, useMemo, } from 'react';
import AddProduct from './components/AddProduct';
import Menpage from './components/Menpage';
import HomePage from './components/HomePage';
import ProductOverView from './components/DetailProduct';
import WomensPage from './components/WomensPage';
import Footer from './components/Footer';
import {CartProvider } from './components/CartContext'
import Cart from './components/Cart';
import NewArrivals from './components/NewArrivals';
import FullSuits from './components/FullSuits';
import SalePage from './components/SalePage';
import AboutUs from './components/AboutUs';
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import { UserContext } from './components/UserContext';
function App() {
  const [user, setUser] = useState("hello")
 


  return (      
   <div className="App container">
    <CartProvider>
      <UserContext.Provider value={{user, setUser}}>
        <Header></Header>
     
          
     
       
    
      <Router>
        
        <HomePage path='/'></HomePage>
        <Cart path='/cart'></Cart>
        <Menpage path='/shop/men'></Menpage>
        <WomensPage path='/shop/women'></WomensPage>
        <FullSuits path='/shop/full-suits'></FullSuits>
        <NewArrivals path='/shop/new-arrivals'></NewArrivals>
        <SalePage path='/shop/sales'></SalePage>
        <AddProduct path='/admin/add-product'></AddProduct>
        <ProductOverView path='/item/:id/:catid/:genid'></ProductOverView>
        <AboutUs path='/about-us'></AboutUs>
        <Register path='/register'></Register>
        <Login path='/login'></Login>
        <Logout path='logout'></Logout>
      </Router>
       </UserContext.Provider>
    </CartProvider>
      <Footer></Footer>
     <br>
     </br>
     <br></br>
   </div> 
  );
}

export default App;
