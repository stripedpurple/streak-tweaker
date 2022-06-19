const Bar = ({value = 0, label = '', max = 1}) => {
    return (
        <div className={'flex items-center'}>
            <div className={'mr-2'}>{label}</div>
            <div className={'w-full'}>
                <div style={{ minWidth: `${value / max * 100}%`}}
                        className="dark:bg-slate-700 bg-slate-200 py-1 px-2 text-right rounded inline-block">{value}</div>
            </div>
        </div>
    )
}

export default Bar