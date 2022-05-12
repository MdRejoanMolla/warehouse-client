import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
      const { manageItemId } = useParams();
      return (
            <div>
                  <h2>updating{manageItemId}</h2>
            </div>
      );
};

export default UpdateItem;