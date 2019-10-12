import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Material-UI helper utilities.
 * @module MUI
 */

const theming = themeSetting => Component => {
    return (props) => (
        <ThemeProvider theme={themeSetting}>
            <Component {...props} />
        </ThemeProvider>
    );
};

/**
 * A creator function to return a JSS style object.
 * @function module:MUI.stylesCreator
 * @param {object} theme - MUI theme object
 * @param {object} props - Runtiem properties used to create the style.
 * @returns {object} JSS style object
 */

/**
 * Create style object with options
 * @param {module:MUI.stylesCreator} stylesCreator  
 * @param {object} defaultProps 
 * @param {*} [options] 
 * @property {object} [options.defaultTheme] - The default theme to use if a theme isn't supplied through a Theme Provider.
 * @property {string} [options.name] - The name of the style sheet. Useful for debugging. If the value isn't provided, it will try to fallback to the name of the component.
 * @property {boolean} [options.flip] - When set to false, this sheet will opt-out the rtl transformation. When set to true, the styles are inversed. When set to null, it follows theme.direction.
 */
const makeStylesWithProps = (stylesCreator, defaultProps, options) => props => makeStyles(theme => stylesCreator(theme, defaultProps ? {...defaultProps, ...props} : props), options)();

export { theming, makeStylesWithProps };