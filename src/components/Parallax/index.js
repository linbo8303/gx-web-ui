import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// default styles
const styles = 

class Parallax extends React.Component {
    state = {
        transform: this.props.moveWithScroll ? "translate3d(0," + window.pageYOffset / 3 + "px,0)" : "translate3d(0)"
    };

    resetTransform = () => {
        this.setState({
            transform: "translate3d(0," + window.pageYOffset / 3 + "px,0)"
        });
    };

    componentDidMount() {
        if (this.props.moveWithScroll) {
            this.resetTransform();
            window.addEventListener("scroll", this.resetTransform);
        }
    }

    componentWillUnmount() {
        if (this.props.moveWithScroll) {
            window.removeEventListener("scroll", this.resetTransform);
        }
    }

    render() {
        const {
            classes,
            filter,
            className,
            children,
            bgImage,
            top
        } = this.props;

        const parallaxClasses = classNames({
            [classes.parallax]: true,
            [classes.filter]: filter,
            [classes.top]: top,
            [className]: className !== undefined
        });
        
        const style = {
              
        };
        
        return (
            <div className={parallaxClasses}
                style={{
                  ...style,
                  backgroundImage: "url(" + bgImage + ")",
                  ...this.state
                }}
                ref="parallax"
            >
                {children}
            </div>
        );
    }
}

Parallax.defaultProps = {
    moveWithScroll: true
};

Parallax.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,    
    bgImage: PropTypes.string,
    top: PropTypes.bool,
    moveWithScroll: PropTypes.bool
};

export default withStyles(styles)(Parallax);