import React, { Component } from 'react';
import {Header} from './components/Header/header';
import {Footer} from './components/Footer/footer';
import {Content} from './components/Content/content';
import {Content2} from './components/Content/content2';
import './App.css';

export class App extends Component {
  render() {
      return (
          <div>
              <Header />
              {/* <Content/> */}
              <Content2/>
              <Footer></Footer>
          </div>  
      )
  }
}

