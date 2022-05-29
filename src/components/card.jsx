const Card = ({children}) => {
  return (
      <div className={'rounded dark:bg-slate-800 bg-white dark:text-gray-100 text-slate-900 py-3 px-4'}>
        {children}
      </div>
  )
}

export default Card