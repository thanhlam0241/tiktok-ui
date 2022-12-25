import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button(
    { to, href, onClick,
        small = false,
        large = false,
        round = false,
        primary = false,
        outline = false,
        disabled = false,
        leftIcon,
        rightIcon,
        className,
        children,
        ...passProps
    }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };
    if (disabled) {
        // delete props.onClick;
        // delete all the event handlers of button if it is disabled
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        disabled,
        round,
        icon: (leftIcon || rightIcon) ? true : false
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span >{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;