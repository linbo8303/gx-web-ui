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
    {key: 0, name: 'Edward 0', age: 20, country: "China", address: "London Park no. 0"},
    {key: 1, name: 'Edward 1', age: 21, country: "China", address: "London Park no. 1"},
    {key: 2, name: 'Edward 2', age: 22, country: "China", address: "London Park no. 2"},
    {key: 3, name: 'Edward 3', age: 23, country: "China", address: "London Park no. 3"},
    {key: 4, name: 'Edward 4', age: 24, country: "China", address: "London Park no. 4"},
    {key: 5, name: 'Edward 5', age: 25, country: "China", address: "London Park no. 5"},
    {key: 6, name: 'Edward 6', age: 26, country: "China", address: "London Park no. 6"},
    {key: 7, name: 'Edward 7', age: 27, country: "China", address: "London Park no. 7"},
    {key: 8, name: 'Edward 8', age: 28, country: "China", address: "London Park no. 8"},
    {key: 9, name: 'Edward 9', age: 29, country: "China", address: "London Park no. 9"},
    {key: 10, name: 'Edward 10', age: 20, country: "England", address: "London Park no. 10"},
    {key: 11, name: 'Edward 11', age: 21, country: "England", address: "London Park no. 11"},
    {key: 12, name: 'Edward 12', age: 22, country: "England", address: "London Park no. 12"},
    {key: 13, name: 'Edward 13', age: 23, country: "England", address: "London Park no. 13"},
    {key: 14, name: 'Edward 14', age: 24, country: "England", address: "London Park no. 14"},
    {key: 15, name: 'Edward 15', age: 25, country: "England", address: "London Park no. 15"},
    {key: 16, name: 'Edward 16', age: 26, country: "England", address: "London Park no. 16"},
    {key: 17, name: 'Edward 17', age: 27, country: "England", address: "London Park no. 17"},
    {key: 18, name: 'Edward 18', age: 28, country: "England", address: "London Park no. 18"},
    {key: 19, name: 'Edward 19', age: 29, country: "England", address: "London Park no. 19"},
];

export const dataGridDataSource1 = [
    {key: 0, Name: 'Li Long', "Date of birth": "12/01/2001", "Gender": "Male", "Arrival date": "03/03/2020", "School ID": 12345, "Homestay Host": "Sarah Smith", "Current status": "In homestay"},
    {key: 1, Name: 'Xu Ping', "Date of birth": "1/03/2004", "Gender": "Female", "Arrival date": "04/06/2020", "School ID": 23456, "Homestay Host": "Tom Jones", "Current status": "Upcoming"},
    {key: 2, Name: 'Wang Liang', "Date of birth": "10/01/2002", "Gender": "Male", "Arrival date": "02/05/2020", "School ID": 12345, "Homestay Host": "Jack Lurry", "Current status": "On holidays"},
]