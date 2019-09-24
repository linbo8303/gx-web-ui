import React from 'react';
import { storiesOf } from '@storybook/react';

import HolyGrail from '.';
import Box from '../../mockups/Box';

storiesOf('Layout:HolyGrail', module)
  .add('with placeholders', () => (<HolyGrail
      leftSideWidth={360}
      header={<Box>Header</Box>}
      footer={<Box>Footer</Box>}
      leftSide={<Box>Left Side</Box>}
      rightSide={<Box>Right Side</Box>}
  >
    <Box>Content</Box>
  </HolyGrail>));