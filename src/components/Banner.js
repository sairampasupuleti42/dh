import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
export default function Banner() {
  var settings = {
    dots: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </Container>
  );
}
const Container = styled.main`
  
`;
const Carousel = styled.div``;
