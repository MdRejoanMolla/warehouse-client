import React from 'react';
import img from '../picture/copyright.png'
import './Footer.css'

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      return (
            <div>
                  <footer className=' bg-primary p-5' id='footer'>

                        <div className='d-flex foot'>
                              <p className='text'>copyright  <img src={img} alt="" /> <span className="text-dark"> {year}</span></p>

                              <p >Powerby:Molla Shop</p>

                        </div>
                  </footer>

            </div>

      );
};

export default Footer;