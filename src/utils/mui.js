//v1.0.190425

import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const withTheme = (Component, themeSetting) => {
    const theme = typeof themeSetting === 'function' ? themeSetting : createMuiTheme(themeSetting);

    return (props) => (
        <MuiThemeProvider theme={theme}>
            <Component {...props} />
        </MuiThemeProvider>
    );
};

export { withTheme };