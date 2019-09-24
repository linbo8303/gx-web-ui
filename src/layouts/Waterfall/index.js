//react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//hoc
import withStyles from '@material-ui/core/styles/withStyles';
import { vBox } from '../../utils/flex';

//custom

const styles = {
    root: {
        ...vBox()
    }
};

class Waterfall extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {
        const { classes, children } = this.props;

        return (<div className={classes.root}>
            {children}
        </div>);
    }
}

export default withStyles(styles)(Waterfall);