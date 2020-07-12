import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import {
  Grid,
  Card,
  CardContent
} from '@material-ui/core';

import { ProfileSetting, ChangePassword, MyCohort } from './components';

const Settings = props => {
  const { className } = props;

  return (
    <div>
      <Card
        className={clsx(className)}
      >
        <CardContent>
        <Grid container>
          <Grid item lg={5} sm={6} xl={5} xs={12}>
            <ProfileSetting />
            <ChangePassword />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <MyCohort />
          </Grid>
        </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

Settings.propTypes = {
  className: PropTypes.string
};

export default Settings;
