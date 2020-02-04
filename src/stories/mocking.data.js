import React from 'react';
import { action } from '@storybook/addon-actions';

import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export const iconMenuListData = [
    { text: 'Inbox', onClick: action('Inbox clicked'), icon: <InboxIcon /> },
    { text: 'Starred', onClick: action('Starred clicked'), icon: <MailIcon /> },
    { text: 'Send email', onClick: action('Send email clicked'), icon: <MailIcon /> },
    { text: 'Drafts', onClick: action('Drafts'), icon: <MailIcon /> },
    { divider: true },
    { text: 'All mail', onClick: action('All mail clicked'), icon: <InboxIcon /> },
    { text: 'Trash', onClick: action('Trash clicked'), icon: <MailIcon /> },
    { text: 'Spam', onClick: action('Spam clicked'), icon: <MailIcon /> }
];

export function bodyText() {
    return <div><Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
    </Typography>
        <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
    </Typography></div>
}  

export const dataGridDataSource = [
    {kye: 0, name: 'Edward 0', age: 20, country: "China", address: "London Park no. 0"},
    {kye: 1, name: 'Edward 1', age: 21, country: "China", address: "London Park no. 1"},
    {kye: 2, name: 'Edward 2', age: 20, country: "China", address: "London Park no. 2"},
]