/**
 *
 * Profile
 *
 */

import React from 'react';

import PageWrapper from '../../components/PageWrapper';

export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PageWrapper page={'profile'} />
    );
  }
}

export default (Profile);
