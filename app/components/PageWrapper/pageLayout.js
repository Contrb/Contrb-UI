/**
*
* PageLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../HomePageComponents/homePage';
import Profile from '../ProfileComponents/profile';


// import styled from 'styled-components';

class PageLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.page === 'homePage') {
      return (<HomePage />);
    } else if (this.props.page === 'profile') {
      return (<Profile />);
    }
    return null;
  }
}

PageLayout.propTypes = {
  page: PropTypes.string,
};

export default PageLayout;
