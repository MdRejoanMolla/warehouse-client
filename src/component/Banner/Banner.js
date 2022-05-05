import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../picture/footer_image__159048975448445 (1).jpg';
import second from '../picture/suzuki-banner-buying-power-v1 (1).jpg';
import third from '../picture/2022_SpringSuzukifest_M109R_SC_2560x900_F (1).jpg';


const Banner = () => {
      return (
            <div>
                  <Carousel variant="dark">
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={first}
                                    alt="First slide"
                              />

                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={second}
                                    alt="Second slide"
                              />

                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={third}
                                    alt="Third slide"
                              />

                        </Carousel.Item>
                  </Carousel>
            </div>
      );
};

export default Banner;