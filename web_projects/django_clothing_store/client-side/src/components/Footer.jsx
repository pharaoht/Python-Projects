import React from 'react'
import { Link} from '@reach/router'
import '../css/Footer.css'

export default function Footer(){
    let date =  new Date().getFullYear();
    return(
        <>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
           
            <footer class="bg-white">
                <div class="container py-5">
                    <div class="row py-4">
                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <img src="img/logo.png" alt="" width="180" class="mb-3"></img>
                             <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <ul class="list-inline mt-4">
                                <li class="list-inline-item"><Link to="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></Link></li>
                                <li class="list-inline-item"><Link to="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></Link></li>
                                <li class="list-inline-item"><Link to="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></Link></li>
                                <li class="list-inline-item"><Link to="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></Link></li>
                                <li class="list-inline-item"><Link to="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><Link to="#" class="text-muted">For Women</Link></li>
                                <li class="mb-2"><Link to="#" class="text-muted">For Men</Link></li>
                                <li class="mb-2"><Link to="#" class="text-muted">Stores</Link></li>
                                <li class="mb-2"><Link to="#" class="text-muted">Our Blog</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><Link to="#" class="text-muted">Login</Link></li>
                                <li class="mb-2"><Link to="#" class="text-muted">Register</Link></li>
                                <li class="mb-2"><Link to="#" class="text-muted">Wishlist</Link></li>
                                <li class="mb-2"><Link to="#" class="text-muted">Our Products</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                            <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            <div class="p-1 rounded border">
                                <div class="input-group">
                                    <input id="send" type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"></input>
                                    
                                        <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© {date} Data North All rights reserved.</p>
      </div>
    </div>
    </footer>
        </>
    )

  }