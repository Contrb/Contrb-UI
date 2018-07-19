/**
*
* PageLayout
*
*/

import React from 'react';
import HomePage from '../HomePageComponents/homePage';
// import styled from 'styled-components';


class PageLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

PageLayout.propTypes = {

};

export default PageLayout;
