/**
*
* News
*
*/

import React from 'react';
import './news.css';
// import styled from 'styled-components';


class News extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={'mainComponent'} id={'news'}>
        News
      </div>
    );
  }
}

News.propTypes = {

};

export default News;
