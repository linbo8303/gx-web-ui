import React from 'react';

import Typography from '@material-ui/core/Typography';

import Dashboard, { makeStyles } from 'layouts/Dashboard';
import IconMenuList from 'components/IconMenuList';

import { iconMenuListData, bodyText } from 'stories/mocking.data';

export default {
  title: 'Layout - Dashboard',
};

export const withDefaultSiderWidth = () => <Dashboard classes={makeStyles()} header={
  <Typography variant="h6" noWrap>
    Dashboard header
  </Typography>
} sider={<IconMenuList items={iconMenuListData} divideIntoMultiList={true} />}>
  {bodyText()}
</Dashboard>;


export const with300pxSiderWidth = () => <Dashboard classes={makeStyles({ siderWidth: 300 })} header={
  <Typography variant="h6" noWrap>
    Dashboard header
  </Typography>
} sider={<IconMenuList items={iconMenuListData} divideIntoMultiList={true} />}>
  {bodyText()}
</Dashboard>;
