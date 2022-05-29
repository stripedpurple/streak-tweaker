import getClasses from "../lib/getClasses";

const Title = ({as = 'h1', size = 'xl', className, children, ...rest}) => {
    const Tag = as

    const classes = getClasses({
        'dark:text-white text-slate-900 font-bold mb-4': true,
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-base': size === 'base',
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
        'text-2xl': size === '2xl',
        'text-3xl': size === '3xl',
        'text-4xl': size === '4xl',
        'text-5xl': size === '5xl',
        'text-6xl': size === '6xl',
        'text-7xl': size === '7xl',
        'text-8xl': size === '8xl',
        'text-9xl': size === '9xl',
    })

    return (
        <Tag className={`${classes} ${className}`} {...rest}>
            {children}
        </Tag>
    )
}

export default Title