import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../hook/useItem';
import Cart from '../ManageItems/Cart/Cart';
import './MyItem.css'

const MyItem = () => {
      const [user] = useAuthState(auth)
      const [myItem, setMyItem] = useState([]);
      useEffect(() => {
            const getMyItem = async () => {
                  const email = user?.email;
                  const url = `https://hidden-mountain-97145.herokuapp.com/manageItem?email=${email}`;
                  const { data } = await axios.get(url);
                  setMyItem(data)
            }
            getMyItem();

      }, [user])

      return (
            <div className='my'>
                  <h1>myItem{myItem.length}</h1>
            </div>
      );


};

export default MyItem;