import getClasses from "../lib/getClasses";

const Button = ({color = 'slate', focusColor = '', size = 'base', className, children, ...rest}) => {
    const btnClass = getClasses({
        'rounded px-3 py-2 focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed': true,
        'dark:bg-red-700 dark:hover:bg-red-600 bg-red-200 hover:bg-red-300 dark:text-red-100 text-red-900': color === 'red',
        'dark:bg-orange-700 dark:hover:bg-orange-600 bg-orange-200 hover:bg-orange-300 dark:text-orange-100 text-orange-900': color === 'orange',
        'dark:bg-amber-700 dark:hover:bg-amber-600 bg-amber-200 hover:bg-amber-300 dark:text-amber-100 text-amber-900': color === 'amber',
        'dark:bg-yellow-700 dark:hover:bg-yellow-600 bg-yellow-200 hover:bg-yellow-300 dark:text-yellow-100 text-yellow-900': color === 'yellow',
        'dark:bg-lime-700 dark:hover:bg-lime-600 bg-lime-200 hover:bg-lime-300 dark:text-lime-100 text-lime-900': color === 'lime',
        'dark:bg-green-700 dark:hover:bg-green-600 bg-green-200 hover:bg-green-300 dark:text-green-100 text-green-900': color === 'green',
        'dark:bg-emerald-700 dark:hover:bg-emerald-600 bg-emerald-200 hover:bg-emerald-300 dark:text-emerald-100 text-emerald-900': color === 'emerald',
        'dark:bg-teal-700 dark:hover:bg-teal-600 bg-teal-200 hover:bg-teal-300 dark:text-teal-100 text-teal-900': color === 'teal',
        'dark:bg-sky-700 dark:hover:bg-sky-600 bg-sky-200 hover:bg-sky-300 dark:text-sky-100 text-sky-900': color === 'sky',
        'dark:bg-blue-700 dark:hover:bg-blue-600 bg-blue-200 hover:bg-blue-300 dark:text-blue-100 text-blue-900': color === 'blue',
        'dark:bg-indigo-700 dark:hover:bg-indigo-600 bg-indigo-200 hover:bg-indigo-300 dark:text-indigo-100 text-indigo-900': color === 'indigo',
        'dark:bg-violet-700 dark:hover:bg-violet-600 bg-violet-200 hover:bg-violet-300 dark:text-violet-100 text-violet-900': color === 'violet',
        'dark:bg-purple-700 dark:hover:bg-purple-600 bg-purple-200 hover:bg-purple-300 dark:text-purple-100 text-purple-900': color === 'purple',
        'dark:bg-pink-700 dark:hover:bg-pink-600 bg-pink-200 hover:bg-pink-300 dark:text-pink-100 text-pink-900': color === 'pink',
        'dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 bg-fuchsia-200 hover:bg-fuchsia-300 dark:text-fuchsia-100 text-fuchsia-900': color === 'fuchsia',
        'dark:bg-rose-700 dark:hover:bg-rose-600 bg-rose-200 hover:bg-rose-300 dark:text-rose-100 text-rose-900': color === 'rose',
        'dark:bg-slate-700 dark:hover:bg-slate-600 bg-slate-200 hover:bg-slate-300 dark:text-slate-100 text-slate-900': color === 'slate',

        // Border Colors
        'focus:ring-2 focus:ring-red-500 ': !!focusColor ? focusColor === 'red' : color === 'red',
        'focus:ring-2 focus:ring-orange-500 ': !!focusColor ? focusColor === 'orange' : color === 'orange',
        'focus:ring-2 focus:ring-amber-500 ': !!focusColor ? focusColor === 'amber' : color === 'amber',
        'focus:ring-2 focus:ring-yellow-500 ': !!focusColor ? focusColor === 'yellow' : color === 'yellow',
        'focus:ring-2 focus:ring-lime-500 ': !!focusColor ? focusColor === 'lime' : color === 'lime',
        'focus:ring-2 focus:ring-green-500 ': !!focusColor ? focusColor === 'green' : color === 'green',
        'focus:ring-2 focus:ring-emerald-500 ': !!focusColor ? focusColor === 'emerald' : color === 'emerald',
        'focus:ring-2 focus:ring-teal-500 ': !!focusColor ? focusColor === 'teal' : color === 'teal',
        'focus:ring-2 focus:ring-sky-500 ': !!focusColor ? focusColor === 'sky' : color === 'sky',
        'focus:ring-2 focus:ring-blue-500 ': !!focusColor ? focusColor === 'blue' : color === 'blue',
        'focus:ring-2 focus:ring-indigo-500 ': !!focusColor ? focusColor === 'indigo' : color === 'indigo',
        'focus:ring-2 focus:ring-violet-500 ': !!focusColor ? focusColor === 'violet' : color === 'violet',
        'focus:ring-2 focus:ring-purple-500 ': !!focusColor ? focusColor === 'purple' : color === 'purple',
        'focus:ring-2 focus:ring-pink-500 ': !!focusColor ? focusColor === 'pink' : color === 'pink',
        'focus:ring-2 focus:ring-fuchsia-500 ': !!focusColor ? focusColor === 'fuchsia' : color === 'fuchsia',
        'focus:ring-2 focus:ring-rose-500 ': !!focusColor ? focusColor === 'rose' : color === 'rose',
        'focus:ring-2 focus:ring-slate-500 ': !!focusColor ? focusColor === 'slate' : color === 'slate',

        // Size
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
        <button className={`${btnClass} ${className} `} type={"button"} {...rest}>
            {children}
        </button>
    )
}

export default Button