//react
import React from 'react';

//hoc
import { hBox, vBox } from '../../utils/flex';

import { makeStylesWithProps } from 'utils/mui';

/**
 * @param {object} props - Custom style properties
 * @property {props.leftSiderWidth} - Left sider width
 * @property {props.rightSiderWidth} - Right sider width
 */
export const makeStyles = makeStylesWithProps((theme, props) => ({
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
        minWidth: 1024 - props.leftSiderWidth - props.rightSiderWidth,
        maxWidth: `calc(100% - ${props.leftSiderWidth + props.rightSiderWidth}px)`
    },
    left: {
        order: -1,
        flex: [[0, 0, props.leftSiderWidth + 'px']]
    },
    right: {
        flex: [[0, 0, props.rightSiderWidth + 'px']]
    }
}), { leftSiderWidth: 240, rightSiderWidth: 240 });

export default function HollyGrail(props) {
    const { header, children, leftSider, rightSider, footer } = props;
    const classes = props.classes || makeStyles();

    return (
        <div className={classes.root}>
            <div className={classes.headerFooter}>{header}</div>
            <div className={classes.body}>
                <div className={classes.content}>{children}</div>
                <div className={classes.left}>{leftSider}</div>
                <div className={classes.right}>{rightSider}</div>
            </div>
            <div className={classes.headerFooter}>{footer}</div>
        </div>
    );
}