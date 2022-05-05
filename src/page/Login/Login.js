import React from 'react';
import './Login.css'

const Login = () => {
      return (
            <div className='form-container'>
                  <div>
                        <h1 form-title>Login</h1>
                        <div className="input-group">

                              <input type='email' name='email' placeholder='input your email' id='' />

                        </div>
                        <div className="input-group">

                              <input type='password' name='password' placeholder='input your password' id='' />

                        </div>
                        <input className='form-submit' type="submit" value="Login" />
                  </div>
            </div>
      );
};

export default Login;