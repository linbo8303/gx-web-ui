//react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//hoc
import withStyles from '@material-ui/core/styles/withStyles';
import { hBox, vBox } from '../../utils/flex';

//custom

const stylesCreator = (leftSideWidth, rightSideWidth) => ({
    root: {
        height: '100%',
        ...vBox()
    },
    headerFooter: {
        flex: 'none'
    },
    body: {
        ...hBox(),
        flex: '1 0 auto'
    },
    content: {
        flexBasis: 'auto',
        flexGrow: 1,
        minWidth: 1024 - leftSideWidth - rightSideWidth,
        maxWidth: `calc(100% - ${leftSideWidth + rightSideWidth}px)`
    },
    left: {
        order: -1,
        flex: [[0, 0, leftSideWidth + 'px']]
    },
    right: {
        flex: [[0, 0, rightSideWidth + 'px']]
    }
});

class HolyGrail extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired,
        header: PropTypes.node.isRequired,
        leftSide: PropTypes.node.isRequired,    
        rightSide: PropTypes.node.isRequired,
        footer: PropTypes.node.isRequired
    };

    render() {
        const { classes, header, leftSide, children, rightSide, footer } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.headerFooter}>{header}</div>
                <div className={classes.body}>
                    <div className={classes.content}>{children}</div>
                    <div className={classes.left}>{leftSide}</div>
                    <div className={classes.right}>{rightSide}</div>
                </div>
                <div className={classes.headerFooter}>{footer}</div>
            </div>
        );
    }
}

function HolyGrailWrapper(props) {
    let { leftSideWidth, rightSideWidth, children, ...others } = props;

    let HolyGrailLayout = withStyles(stylesCreator(leftSideWidth, rightSideWidth))(HolyGrail);
    return <HolyGrailLayout {...others}>{children}</HolyGrailLayout>;        
}

HolyGrailWrapper.defaultProps = {
    leftSideWidth: 240,
    rightSideWidth: 240
};

HolyGrailWrapper.propTypes = {
    ...HolyGrail.propTypes,
    leftSideWidth: PropTypes.node,
    rightSideWidth: PropTypes.node
};

export default HolyGrailWrapper;