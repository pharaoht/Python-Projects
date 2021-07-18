import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import photo1 from '../media/blue-suits.jpg'
import photo2 from '../media/suit-photo.jpg'
import photo3 from '../media/suit-unsplash.jpg'
import photo4 from '../media/suit.jpg'
import photo5 from '../media/women-suit.jpg'
import photo6 from '../media/group.jpg'



const HomePage = () =>{

    const [allProducts, setAllProducts] = useState([])
    const[deleteState, setDeleteState] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/get-all-t-shirts/")
    .then(res =>{
      console.log(res.data)
    }) .catch(err => console.log(err))
  },[deleteState])

     return (
         <>
            <div>
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

            <div>
                <hr></hr>
                <h1>Revolutionize Your Look</h1>
                <hr></hr>
                <div className="selection">
                    <Link to="/shop/men">
                    <div className="box" id="men-photo">
                        <i>Men</i>
                        <img src={photo4}height="350" width="350"/>
                    </div>
                    </Link>
                    <Link to='/shop/women'>
                    <div className="iwomen">
                        <i>Women</i>
                        <img src={photo5} height="350" width="350" />
                    </div>
                    </Link>
                    <div className="box">
                        <i>Sale</i>
                        <img src={photo6} height="350" width="350" />
                    </div>
                </div>
            </div>

            <div>
                <hr></hr>
                <h1>See What is New</h1>
                <hr></hr>
                <div className="new-section">

                </div>
            </div>
      </>

     )
}

export default HomePage;
      
      

