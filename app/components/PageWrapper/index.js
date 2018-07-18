/**
*
* PageWrapper
*
*/

import React from 'react';
import { scaleDown as Menu } from 'react-burger-menu';

// import styled from 'styled-components';
import NavBar from './navBar';
import './pageWrapper.css';
import PageLayout from './pageLayout';


class PageWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id={'PageWrapper'} style={{ height: '100%' }}>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'PageWrapper'}
        >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
        <main id={'page-wrap'}>
          <NavBar />
          <PageLayout />
        </main>
      </div>
    );
  }
}

PageWrapper.propTypes = {

};

export default PageWrapper;
