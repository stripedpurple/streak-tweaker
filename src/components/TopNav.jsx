import Button from "./Button";

const TopNav = () => {
    return (
        <div className={'fixed-top px-4 py-3 flex items-center justify-center'}>
            <div className={'max-w-96'}>
                <Button className={'mr-2 last-of-type:mr-0'}>get current status</Button>
                <Button color={'violet'} className={'mr-2 last-of-type:mr-0'}>get current status</Button>
                <Button focusColor={'violet'} className={'mr-2 last-of-type:mr-0'}>get current status</Button>
            </div>
        </div>
    )
}


export default TopNav