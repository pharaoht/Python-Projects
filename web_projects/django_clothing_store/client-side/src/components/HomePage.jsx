import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import photo1 from '../media/blue-suits.jpg'
import photo2 from '../media/suit-photo.jpg'
import photo3 from '../media/suit-unsplash.jpg'
import photo4 from '../media/suit.jpg'
import photo5 from '../media/women-suit.jpg'
import photo6 from '../media/group.jpg'
import photo7 from '../media/suit.png'
import photo8 from '../media/guy-in-suit.jpg'


const HomePage = () =>{

    const [allProducts, setAllProducts] = useState([])
    const[deleteState, setDeleteState] = useState(false)

  useEffect(() => {
    setDeleteState(false)
  },[deleteState])


     return (
         <>
         <div >
            <div >
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={photo1} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={photo2} alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100"  src={photo3} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>

            <div > 
                <hr></hr>
                <h1>Revolutionize Your Look</h1>
                <hr></hr>
                <div className="selection">
                    <Link to="/shop/men">
                    <div className="box" id="men-photo">
                        <i>Men</i>
                        <img className="img-home" src={photo4}/>
                    </div>
                    </Link>
                    <Link to='/shop/women'>
                    <div className="iwomen">
                        <i>Women</i>
                        <img className="img-home" src={photo5}/>
                    </div>
                    </Link>
                    <div className="box">
                        <i>Sale</i>
                        <img className="img-home" src={photo6}/>
                    </div>
                </div>
            </div>

            <div>
                <hr></hr>
                <h1>See What is New</h1>
                <hr></hr>
                <div className="new-section">
                    <div className="photo2-div">
                        <Link to='/shop/new-arrivals'>
                        <i>New</i>
                        <img className="photo2" src={photo8}/>
                        </Link>
                    </div>
                    <div className="photo1-div">
                        <Link to='/shop/new-arrivals'>
                        <i>Arrivals</i>
                        <img className="photo1" src={photo7}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </>

     )
}

export default HomePage;
      
      

