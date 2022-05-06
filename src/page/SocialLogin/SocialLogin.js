import React from 'react';
import './SocialLogin.css';
import google from '../../component/picture/google.png'
import facebook from '../../component/picture/facebook.png'
import github from '../../component/picture/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const navigate = useNavigate();
      let errorElement = "";

      if (error) {

            errorElement = <div>
                  <p>Error: {error.message}</p>
            </div>

      }
      if (loading) {
            return <p>Loading...</p>;
      }
      if (user) {
            navigate('/home');
      }
      return (
            <div>
                  <div className='d-flex align-items-center'>
                        <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-3'>or</p>
                        <div style={{ height: '2px' }} className='bg-primary w-50'></div>

                  </div>
                  {errorElement}
                  <div>
                        <button
                              onClick={() => signInWithGoogle()}
                              className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={google} alt="" />
                              <span className='px-3'>Google Sign In</span>
                        </button>
                  </div>
                  <div>
                        <button className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={facebook} alt="" />
                              <span className='px-3'>Facebook Sign In</span>
                        </button>
                  </div>
                  <div>
                        <button className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={github} alt="" />
                              <span className='px-3'>Github Sign In</span>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;