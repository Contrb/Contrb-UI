/**
 *
 * News
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import News from './news';
import Leaderboard from './leaderboard';
import UserStats from './userStats';


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
        spacing={16}
        style={{ 'padding-top': '10px', 'padding-left': '50px', 'padding-right': '50px'}}
      >
        <Grid item xs={12} sm={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
            <Grid item xs={12} sm={3}>
              <div style={{ width: '100%' }}>
                <Leaderboard />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ width: '100%' }}>
                <News />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div style={{ width: '100%' }}>
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
