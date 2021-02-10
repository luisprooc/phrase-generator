import React from 'react';
import { Container } from '@material-ui/core';
import Title from './title';
import BodyPhrase from './body-phrase';
import Footer from './footer';

const App = ({}) => {
  return(
    <>
      <Container maxWidth="sm">
        <Title />
        <BodyPhrase />
      </Container>
      <Footer />
    </>
  )
};


export default App;
