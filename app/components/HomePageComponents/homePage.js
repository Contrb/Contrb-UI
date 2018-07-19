/**
 *
 * News
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import News from './news/news';
import Leaderboard from './leaderboard/leaderboard';
import UserStats from './userStats/userStats';
import './homePage.css';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid
        container
        justify="center"
        className={classes.root}
        spacing={0}
        id={'homePageGrid'}
      >
        <Grid item xs={12} sm={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
            <Grid item xs={12} sm={3}>
              <div className={'gridItem'}>
                <Leaderboard />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={'gridItem'}>
                <News />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={'gridItem'}>
                <UserStats />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
