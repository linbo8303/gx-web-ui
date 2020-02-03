import React from 'react';

import HollyGrail, { makeStyles } from 'layouts/HollyGrail';

import { bodyText } from 'stories/mocking.data';
import Box from 'mockups/Box';

export default {
  title: 'Layout - HollyGrail',
};

export const withDefaultSiderWidth = () => <HollyGrail classes={makeStyles()} header={
  <Box>Header</Box>
} leftSider={<Box>Left Sider</Box>}
rightSider={<Box>Right Sider</Box>}
footer={<Box>Footer</Box>}>
  {bodyText()}
</HollyGrail>;

export const withSpecifiedSiderWidth = () => <HollyGrail classes={makeStyles({ leftSiderWidth: 400, rightSiderWidth: 200 })} header={
  <Box>Header</Box>
} leftSider={<Box>Left Sider</Box>}
rightSider={<Box>Right Sider</Box>}
footer={<Box>Footer</Box>}>
  {bodyText()}
</HollyGrail>;