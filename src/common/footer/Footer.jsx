import React from "react"
import "./style.css"
import { GoMarkGithub } from 'react-icons/go';
import { FaFacebook ,FaLinkedin } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Your Mart</h1>
            <p>A specialized E-commerce site especially for you and your dear ones</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Dasari.Jagadeesh</li>
              <li>Email: dasarijagadeesh789@gmail.com</li>
              <li>Phone: 9346980454</li>
              <li>India</li>
            </ul>
          </div>
        </div>
        <div className="Details">
          <div>
          <h2 className="author">Dasari Jagadeesh</h2>
          </div>
          <div>
          <a href="https://github.com/jagadeeshD3" ><h2 className="Details"> <GoMarkGithub /> </h2></a>
          
          <a href="https://www.facebook.com/jagadeeah.dasari"><h2 className="Details"> <FaFacebook /> </h2> </a>
        
          <a href="https://www.linkedin.com/in/jagadeesh-dasari-b827b3190/" ><h2 className="Details"> <FaLinkedin /> </h2></a>
          
          <a href="mailto:dasarijagadeesh789@gmail.com"><h2 className="Details"> <SiGmail /> </h2> </a>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
