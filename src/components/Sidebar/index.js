//react
import React from 'react';
import PropTypes from 'prop-types';

//hoc
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import withStyles from '@material-ui/core/styles/withStyles';

//mui
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

//utils
import cx from 'classnames';

class SidebarController {
    @observable showOnCollapsed = false;
    @observable open = true;

    @action toggleSidebarCollapsed = (value) => { this.showOnCollapsed = (value !== undefined) ? value : !this.showOnCollapsed };
    @action toggleSidebarOpen = (value) => { this.open = (value !== undefined) ? value : !this.open };
}

const defaultStyles = {
    drawerPaper: {
        position: 'relative',
        width: 400
    },
    drawerPaperCollapsed: {
        width: '80px!important'
    },
};

@observer
class Sidebar extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        drawerStyle: PropTypes.string,
        drawerCollapsedStyle: PropTypes.string,
        controller: PropTypes.instanceOf(SidebarController).isRequired,
        children: PropTypes.node.isRequired
    };

    render() {
        let {
            classes,
            drawerStyle,
            drawerCollapsedStyle,
            controller,
            children
        } = this.props;

        if (!drawerStyle) {
            drawerStyle = classes.drawerPaper;
        }

        if (!drawerCollapsedStyle) {
            drawerCollapsedStyle = classes.drawerPaperCollapsed;
        }

        const drawerPaper = cx(drawerStyle, {
            [drawerCollapsedStyle]: controller.showOnCollapsed
        });

        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={controller.open}
                        classes={{ paper: drawerPaper }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {children}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        anchor="left"
                        variant="permanent"
                        open={controller.open}
                        classes={{ paper: drawerPaper }}
                    >
                        {children}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

export default withStyles(defaultStyles)(Sidebar);
export { SidebarController };