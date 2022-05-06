import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {

      return (
            <div className='form-container'>

                  <div>
                        <h1 form-title>Register</h1>
                        <form>
                              <div className="input-group">

                                    <input type='email' name='email' placeholder='input your email' id='1' required />

                              </div>
                              <div className="input-group">

                                    <input type='password' name='password' placeholder='input your password' id='2' required />

                              </div>
                              <div className="input-group">

                                    <input type='.conform-password' name='password' placeholder='input your conform-password' id='3' required />

                              </div>
                              <input className='form-submit' type="submit" value="Register" />
                        </form>
                        <p>
                              You have already account?<Link className='form-link' to='/login'>Place Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                  </div>
            </div>
      );
};

export default Register;