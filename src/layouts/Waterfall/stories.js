import React from 'react';
import { storiesOf } from '@storybook/react';

import Waterfall from '.';
import Box from '../../mockups/Box';

storiesOf('Layout:Waterfall', module)
  .add('with 3 blocks', () => (<Waterfall>
    <Box>Block1</Box>
    <Box>Block2</Box>
    <Box>Block3</Box>
  </Waterfall>))
  .add('with hybrid blocks', () => (<Waterfall>
    <Box>Block1</Box>
    <Box>
      <Waterfall>
        <Box>Block2-1</Box>
        <Box>Block2-2</Box>
      </Waterfall>
    </Box>
    <Box>Block3</Box>
  </Waterfall>));