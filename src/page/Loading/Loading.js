import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
      return (
            <div style={{ hight: "250px" }} className='w-100 d-flex justify-content-center align-items-center'>
                  <Spinner animation="border" variant="primary" />
                  <Spinner animation="border" variant="secondary" />
                  <Spinner animation="border" variant="success" />
                  <Spinner animation="border" variant="danger" />
                 
            </div>
      );
};

export default Loading;