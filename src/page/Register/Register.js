import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';



const Register = () => {


      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

      const [updateProfile, updating, updateError] = useUpdateProfile(auth, { sendEmailVerification: true });

      const navigate = useNavigate();
      const navigateLogin = () => {
            navigate('/login');
      }
      if (loading || updating) {
            return <Loading></Loading>
      }




      const handleRegister = async (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;


            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });

            navigate('/')

      }


      return (
            <div className='form-container'>

                  <div>
                        <h1 form-title>Register</h1>
                        <form onSubmit={handleRegister}>
                              <div className="input-group">

                                    <input type="text" name='name' id='1' placeholder='your name' />
                              </div>
                              <div className="input-group">

                                    <input type='email' name='email' placeholder='input your email' id='2' required />

                              </div>
                              <div className="input-group">

                                    <input type='password' name='password' placeholder='input your password' id='3' required />

                              </div>
                              <div className="input-group">

                                    <input type='.conform-password' name='password' placeholder='input your conform-password' id='4' required />

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