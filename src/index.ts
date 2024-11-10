import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bounty from 'bounty';

export default class ReactBounty extends PureComponent {
    // Information about options can be found here:
    // https://github.com/coderitual/bounty
    static propTypes = {
        value: PropTypes.string.isRequired,
        initialValue: PropTypes.string,
        lineHeight: PropTypes.number,
        letterSpacing: PropTypes.number,
        animationDelay: PropTypes.number,
        letterAnimationDelay: PropTypes.number,
    };

    node = React.createRef();

    componentDidMount() {
        const { value, ...options } = this.props;
        bounty({
            el: this.node.current,
            value,
            ...options,
        });
    }

    render() {
        return React.createElement('div', {
            className: this.props.className,
            ref: this.node,
        });
    }
}
