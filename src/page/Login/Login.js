import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../component/picture/google.png'

const Login = () => {
      return (
            <div className='form-container'>
                  <div>
                        <h1 form-title>Login</h1>
                        <form>
                              <div className="input-group">

                                    <input type='email' name='email' placeholder='input your email' id='' />

                              </div>
                              <div className="input-group">

                                    <input type='password' name='password' placeholder='input your password' id='' />

                              </div>
                              <input className='form-submit' type="submit" value="Login" />
                        </form>
                        <p>
                              New to Bike-Warehouse?<Link className='form-link' to='/register'>Create an account</Link>
                        </p>
                        <div className='d-flex align-items-center'>
                              <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                              <p className='mt-2 px-3'>or</p>
                              <div style={{ height: '2px' }} className='bg-primary w-50'></div>

                        </div>
                        <div>
                              <button className='btn btn-light w-50 my-3'>
                                    <img style={{ width: '30px' }} src={google} alt="" />
                                    <span className='px-3'>Google Sign In</span>
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Login;