import getClasses from "../lib/getClasses";

const Input = ({label, color = 'violet', labelHidden = false, className, ...rest}) => {
    const outerClasses = getClasses({
        'mb-3 dark:bg-slate-700 bg-white border border-transparent rounded-md px-3 py-2 bg-slate-800 focus-within:ring-1 invalid:border-red-300 success:border-green-300 disabled:opacity-75 read-only:opacity-75': true,
        'focus-within:ring-red-600 focus-within:border-red-600': color === 'red',
        'focus-within:ring-orange-600 focus-within:border-orange-600': color === 'orange',
        'focus-within:ring-amber-600 focus-within:border-amber-600': color === 'amber',
        'focus-within:ring-yellow-600 focus-within:border-yellow-600': color === 'yellow',
        'focus-within:ring-lime-600 focus-within:border-lime-600': color === 'lime',
        'focus-within:ring-green-600 focus-within:border-green-600': color === 'green',
        'focus-within:ring-emerald-600 focus-within:border-emerald-600': color === 'emerald',
        'focus-within:ring-teal-600 focus-within:border-teal-600': color === 'teal',
        'focus-within:ring-cyan-600 focus-within:border-cyan-600': color === 'cyan',
        'focus-within:ring-sky-600 focus-within:border-sky-600': color === 'sky',
        'focus-within:ring-blue-600 focus-within:border-blue-600': color === 'blue',
        'focus-within:ring-indigo-600 focus-within:border-indigo-600': color === 'indigo',
        'focus-within:ring-violet-600 focus-within:border-violet-600': color === 'violet',
        'focus-within:ring-purple-600 focus-within:border-purple-600': color === 'purple',
        'focus-within:ring-fuchsia-600 focus-within:border-fuchsia-600': color === 'fuchsia',
        'focus-within:ring-pink-600 focus-within:border-pink-600': color === 'pink',
        'focus-within:ring-rose-600 focus-within:border-rose-600': color === 'rose',
    })

    const labelClasses = getClasses({
        'block text-xs font-medium dark:text-slate-100 text-slate-900': true,
        'sr-only': labelHidden
    })

    const inputClasses = getClasses({
        'block w-full border-0 p-0 text-gray-900 dark:placeholder-gray-300 dark:placeholder-gray-500 focus:ring-0 sm:text-sm bg-transparent focus:outline-none dark:text-slate-100 text-slate-900': true
    })

    return (
        <>
            <div
                className={`${outerClasses} ${className}`}>
                {label && <label htmlFor={rest.id ?? rest.name} className={labelClasses}>
                    {label}
                </label>}
                <input className={inputClasses} {...rest}/>
            </div>
        </>
    )
}

export default Input