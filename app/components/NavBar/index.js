/**
 *
 * NavBar
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import AccountCircle from '@material-ui/icons/es/AccountCircle';
import Button from '@material-ui/core/es/Button/Button';


const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class NavBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            GitLand
          </Typography>
          <div>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <Button color="inherit">Sign In</Button> or <Button color="inherit">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
