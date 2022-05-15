import React from 'react';
import Banner from '../../component/Banner/Banner';
import Section from '../../component/extra/Section';
import Item from '../../component/ManageItems/Item/Item';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Item></Item>
                  <Section></Section>
            </div>
      );
};

export default Home;