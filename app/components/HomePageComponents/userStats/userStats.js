/**
 *
 * News
 *
 */

import React from 'react';
import './userStats.css';

// import styled from 'styled-components';


class userStats extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id={'userCenterIcon'} className={'center-div'}></div>
        <div id={'userIcon'} className={'center-div'}></div>
        <div className={'mainComponent'} id={'userStats'}>
          userName
        </div>
      </div>
    );
  }
}


export default (userStats);
