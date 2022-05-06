import React from 'react';
import './SocialLogin.css';
import google from '../../component/picture/google.png'
import facebook from '../../component/picture/facebook.png'
import github from '../../component/picture/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
      const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
      const navigate = useNavigate();
      let errorElement;

      if (error || errorGit || error1) {

            errorElement = <div>
                  <p className='text-danger'>Error: {error.message}</p>
            </div>

      }
      if (loading || loadingGit || loading1) {
            return <p>Loading...</p>;
      }
      if (user || userGit || user1) {
            navigate('/');
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
                        <button
                              onClick={() => signInWithFacebook()}
                              className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={facebook} alt="" />
                              <span className='px-3'>Facebook Sign In</span>
                        </button>
                  </div>
                  <div>
                        <button
                              onClick={() => signInWithGithub()}
                              className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={github} alt="" />
                              <span className='px-3'>Github Sign In</span>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;