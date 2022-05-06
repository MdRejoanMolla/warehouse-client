import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../page/Loading/Loading';
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
      const emailRef = useRef('');
      const passwordRef = useRef('');
      const navigate = useNavigate();
      const location = useLocation();

      let from = location?.state?.from?.pathname || '/';
      let errorElement;
      const [user] = useAuthState(auth)

      const [
            signInWithEmailAndPassword,
            ,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth, { sendEmailVerification: true });



      if (loading || sending) {
            return <Loading/>
      }
      if (user) {
            navigate(from, { replace: true })
      }
      if (error) {

            errorElement = <p className='text-danger'>Error: {error?.message}</p>

      }

      const handleSubmit = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            console.log(email, password);
            signInWithEmailAndPassword(email, password);

      }
      const navigateRegister = event => {
            navigate('/register');
      }
      const resetPassword = async () => {
            const email = emailRef.current.value;
            if (email) {
                  await sendPasswordResetEmail(email);
                  toast('Sent email');
            }
            else {
                  toast('please enter your email address')
            }
      }
      return (
            <div className='form-container'>
                  <div>
                        <h1 form-title>Login</h1>
                        <form  onSubmit={handleSubmit}>
                              <div className="input-group">

                                    <input  type='email' name='email' placeholder='input your email' id='1' required />

                              </div>
                              <div className="input-group">

                                    <input  type='password' name='password' placeholder='input your password' id='2' required />

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