const Stat = ({title, stat}) => {
  return (
      <div className={'text-center'}>
          <dd className={'md:text-2xl sm:text-xl text-lg'}>
              {stat ?? '0'}
          </dd>

          <dt className={'md:text-base sm:text-sm text-xs font-bold'}>
              {title ?? ''}
          </dt>
      </div>
  )
}


export default Stat