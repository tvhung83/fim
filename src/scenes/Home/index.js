import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Highlights from './components/Highlights';
import Intro from './components/Intro';
import './index.css';

class Home extends Component {
  render() {
    return (
        <div>
          <Banner />
            <div id="main">
                <Highlights />
                <Intro />
            </div>
        </div>
    );
  }
}

export default Home;
