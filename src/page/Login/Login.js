import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import { ToastContainer } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
      return (
            <div className='form-container'>
                  <div>
                        <h1 form-title>Login</h1>
                        <form>
                              <div className="input-group">

                                    <input type='email' name='email' placeholder='input your email' id='1' required />

                              </div>
                              <div className="input-group">

                                    <input type='password' name='password' placeholder='input your password' id='2' required />

                              </div>
                              <input className='form-submit' type="submit" value="Login" />
                        </form>
                        <p>
                              New to Bike-Warehouse?<Link className='form-link' to='/register'>Create an account</Link>
                        </p>
                        <SocialLogin></SocialLogin>

                        <ToastContainer />
                  </div>
            </div>
      );
};

export default Login;