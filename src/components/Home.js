import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';
export default function Home() {
  return (
    <Container>
      Home
      <Banner />
    </Container>
  );
}
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(5vw);
    background: #141b29;
`;
