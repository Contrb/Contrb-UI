/* eslint-disable react/no-did-mount-set-state */
/**
 *
 * NavBar
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import STATUS from 'gitstar-components/status';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import AccountCircle from '@material-ui/icons/es/AccountCircle';
import SignIn from '../SignIn';
import SignUp from '../SignUp';


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
  state = {
    status: STATUS.INITIAL,
    token: null,
  };

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    if (code) {
      this.setState({ status: STATUS.LOADING });
      fetch(`http://localhost:3000/authenticate/${code}`)
        .then((response) => response.json())
        .then(({ token }) => {
          this.setState({
            token,
            status: STATUS.FINISHED_LOADING,
          });
        });
    }
  }

  render() {
    const { classes } = this.props;

    let authenticated;
    if (this.state.status === STATUS.AUTHENTICATED) {
      authenticated = (
        <div>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      );
    } else {
      authenticated = (
        <div>
          <SignIn /> or <SignUp />
        </div>
      );
    }

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            GitLand
          </Typography>
          <div>
            {authenticated}
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
