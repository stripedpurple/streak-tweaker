import Card from './components/card'
import Title from "./components/title";
import Input from "./components/input";
import TopNav from "./components/TopNav";
import {ClipboardIcon} from "@heroicons/react/outline";
import Button from "./components/Button";
import button from "./components/Button";

export function App() {


    return (<>
        <TopNav/>
        <div className={'gap-4 grid grid-cols-1 md:grid-cols-2 p-4'}>
            <Card>
                <Title>Input</Title>
                <Input label={'Max Streak'} name={'maxStreak'} placeholder={'39'}/>
                <Input label={'Max Streak'} name={'maxStreak'} placeholder={'39'}/>
            </Card>

            <Card>
                <div className={'flex items-center'}>
                    <Title className={'grow w-100'}>Output</Title>
                    <button type={'button'}
                            className={'dark:hover:bg-slate-700 dark:focus:bg-slate-700 p-2 rounded-full focus:ring-2 dark:focus:ring-slate-600 focus:outline-none'}>
                        <ClipboardIcon class={'h-6 w-6'}/></button>
                </div>
            </Card>
        </div>
    </>)
}


// javascript:localStorage.setItem('nyt-wordle-statistics', '{"currentStreak":95,"maxStreak":95,"guesses":{"1":0,"2":5,"3":33,"4":19,"5":33,"6":5,"fail":0},"winPercentage":100,"gamesPlayed":95,"gamesWon":95,"averageGuesses":3}')