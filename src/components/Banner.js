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
          <img src="https://placekitten.com/g/1400/475" />
        </div>
        <div>
          <img src="https://placekitten.com/g/1400/475" />
        </div>
        <div>
          <img src="https://placekitten.com/g/1400/475" />
        </div>
        <div>
          <img src="https://placekitten.com/g/1400/475" />
        </div>
      </Slider>
    </Container>
  );
}
const Container = styled.main`
  
`;
const Carousel = styled.div``;
