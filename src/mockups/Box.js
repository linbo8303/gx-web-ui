//react
import React from 'react';

//hoc
import withStyles from '@material-ui/core/styles/withStyles';

//styles
const styles = {
    root: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'blue',
        margin: 10,
        padding: 5
    }
};

function box(props) {
    const { classes, children, ...others } = props;

    return (<div className={classes.root} {...others}>
        {children}
    </div>);
}

export default withStyles(styles)(box);