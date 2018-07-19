/**
 *
 * News
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';

import './userStats.css';

// import styled from 'styled-components';

class userStats extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id={'mainPanel'}>
        <div id={'userCenterIcon'} className={'center-div'}></div>
        <div id={'userIcon'} className={'center-div'}></div>
        <div className={'mainComponent'} id={'userStats'}>
          <div id={'userInfoGrid'}>
            <Grid container spacing={19} id={'userDataBox'}>

              <Grid item xs={6} sm={6} md={6} className={'userScoreRow'}>
              User Name
            </Grid>
              <Grid item xs={6} sm={6} md={6} className={'userScoreRow, text-right'}>
              Daily Score
            </Grid>
            </Grid>
          </div>
          <div id={'userStatsGrid'}>
            <Grid container spacing={19} id={''}>
              <Grid item xs={3} sm={3} md={3} className={'userStatsGridItem'}>
              asdf
            </Grid>
              <Grid item xs={9} sm={9} md={9} className={'userStatsGridItem'}>
              asdf
            </Grid>
              <Grid item xs={3} sm={3} md={3} className={'userStatsGridItem'}>
              asdf
            </Grid>
              <Grid item xs={9} sm={9} md={9} className={'uerStatsGridItem'} >
              asdf
            </Grid>
              <Grid item xs={3} sm={3} md={3} className={'userStatsGridItem'}>
              asdf
            </Grid>
              <Grid item xs={9} sm={9} md={9} className={'userStatsGridItem'}>
              asdf
            </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}


export default (userStats);
