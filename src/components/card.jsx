const Card = ({children, className}) => {
  return (
      <div className={`rounded dark:bg-slate-800 bg-white dark:text-gray-100 text-slate-900 py-3 px-4 ${className}`}>
        {children}
      </div>
  )
}

export default Card