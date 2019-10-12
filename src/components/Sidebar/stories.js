import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Sidebar, { SidebarController } from '.';
import Box from '../../mockups/Box';

import Button from '@material-ui/core/Button';

let sidebarCtrl = new SidebarController();
sidebarCtrl.showOnCollapsed = false;

storiesOf('Component:Sidebar', module)
  .add('show on collapsed', () => (<Sidebar
    controller={sidebarCtrl}>
    <Box><div>Block1</div><div><Button onClick={() => {
        action('button clicked.');
        sidebarCtrl.toggleSidebarOpen(false); 
      } }>Close</Button></div></Box>
  </Sidebar>));