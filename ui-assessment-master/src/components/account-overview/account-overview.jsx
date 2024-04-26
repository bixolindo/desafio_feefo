import React, { useState } from 'react';
import { Container } from './styles'
import accountOverviewStubPropTypes from '../../proptype/accountOverview';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';

export const AccountOverview = ({ data }) => {
  return (
    <Container role="main" aria-label="Account Overview">
      <div className='content-area'>
        <Header supportContact={data.supportContact} />
        <Dashboard salesOverview={data.salesOverview} />
      </div>
    </Container>
  );
}

AccountOverview.prototype = accountOverviewStubPropTypes;


export default AccountOverview;