/**
*
* PageLayout
*
*/

import React from 'react';
import News from '../News';
// import styled from 'styled-components';


class PageLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <News />

      </div>
    );
  }
}

PageLayout.propTypes = {

};

export default PageLayout;
