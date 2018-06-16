/**
*
* SignIn
*
*/

import React, { Component } from 'react';
import Button from '@material-ui/core/es/Button/Button';

const CLIENT_ID = '08b484fc8205a40052b8';
const REDIRECT_URI = 'http://localhost:3000/';

class SignIn extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Button
        color="inherit"
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
      >
        Sign In
      </Button>
    );
  }
}

SignIn.propTypes = {

};

export default SignIn;
