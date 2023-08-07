
import React from 'react';
import { CFCView, Container } from './App.styles';
import { Header } from './components/Header/Header';
import {CFC} from './components/CFC/CFC';


export default function App() {
  return (
    <Container>
      <Header/>
      <CFCView>
        <CFC/>
      </CFCView>

    </Container>
  );
}
