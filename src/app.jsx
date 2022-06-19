import Card from './components/card'
import Title from "./components/title";
import Input from "./components/input";
import TopNav from "./components/TopNav";
import {ClipboardIcon} from "@heroicons/react/outline";
import Button from "./components/Button";
import button from "./components/Button";
import {useEffect, useState} from "preact/compat";
import {streakModel} from "./models/streak";
import Stat from "./components/stat";
import Bar from "./components/bar";
import {maxCurrentStreak, maxGuesses} from "./lib/utilities";


export function App() {
    const [streak, setStreak] = useState({...streakModel})

    useEffect(() => {

    }, [streak])


    const handleStreak = (e) => {
        const {name, value} = e.currentTarget
        setStreak(prev => {
            return {...prev, [name]: value}
        })

    }

    const handleGuesses = (e) => {
        const {name, value} = e.currentTarget
        setStreak(prev => {
            return {...prev, guesses: {...prev.guesses, [name]: value}}
        })

    }

    return (<>
        {/*<TopNav/>*/}
        <div className={'gap-4 grid grid-cols-1 md:grid-cols-2 p-4'}>
            <Card>
                <Title>Streaks and Wins</Title>
                <div className={'grid grid-cols-2 sm:grid-cols-2  gap-x-4 gap-y-2'}>
                    <Input type={'number'} min={0} max={streak.gamesPlayed} label={'Max Streak'} name={'maxStreak'} placeholder={'39'}
                           value={streak.maxStreak} onInput={handleStreak}/>
                    <Input type={'number'} min={0} max={maxCurrentStreak(streak.gamesPlayed, streak.maxStreak)} label={'Current Streak'}
                           name={'currentStreak'} placeholder={'12'} value={streak.currentStreak}
                           onInput={handleStreak}/>
                    <Input type={'number'} min={0} label={'Games Played'} name={'gamesPlayed'} placeholder={'62'}
                           value={streak.gamesPlayed} onInput={handleStreak}/>
                    <Input type={'number'} min={0} max={streak.gamesPlayed} label={'Games Won'} name={'gamesWon'}
                           placeholder={'29'} value={streak.gamesWon} onInput={handleStreak}/>
                </div>

                <span className="pt-4 block"/>

                <Title>Guess per Win</Title>
                <div className={'grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-2'}>
                    <Input type={'number'} min={0} label={'One'} name={'1'} placeholder={'39'}
                           value={streak.guesses['1']} onInput={handleGuesses}/>
                    <Input type={'number'} min={0} label={'Two'} name={'2'} placeholder={'39'}
                           value={streak.guesses['2']} onInput={handleGuesses}/>
                    <Input type={'number'} min={0} label={'Three'} name={'3'} placeholder={'39'}
                           value={streak.guesses['3']} onInput={handleGuesses}/>
                    <Input type={'number'} min={0} label={'Four'} name={'4'} placeholder={'39'}
                           value={streak.guesses['4']} onInput={handleGuesses}/>
                    <Input type={'number'} min={0} label={'Five'} name={'5'} placeholder={'39'}
                           value={streak.guesses['5']} onInput={handleGuesses}/>
                    <Input type={'number'} min={0} label={'Six'} name={'6'} placeholder={'39'}
                           value={streak.guesses['6']} onInput={handleGuesses}/>
                </div>
            </Card>

            <Card className={'relative'}>
                <Title>Statistic</Title>
                <button type={'button'}
                        className={'dark:hover:bg-slate-700 dark:focus:bg-slate-700 p-2 rounded-full focus:ring-2 dark:focus:ring-slate-600 focus:outline-none absolute top-1 right-1'}>
                    <ClipboardIcon class={'h-6 w-6'}/>
                </button>

                <div className={'grid grid-cols-4 gap-4 mb-4'}>
                    <Stat title={'Played'} stat={streak.gamesPlayed}/>
                    <Stat title={'Win %'} stat={Math.round(+streak.gamesWon / +streak.gamesPlayed * 100)}/>
                    <Stat title={'Current Streak'} stat={streak.currentStreak}/>
                    <Stat title={'Max Streak'} stat={streak.maxStreak}/>
                </div>

                <Title>Guess Distribution</Title>
                <div className={'grid grid-cols-1 gap-4'}>
                    <Bar value={streak.guesses['1']} max={maxGuesses(streak.guesses)} label={'1'}/>
                    <Bar value={streak.guesses['2']} max={maxGuesses(streak.guesses)} label={'2'}/>
                    <Bar value={streak.guesses['3']} max={maxGuesses(streak.guesses)} label={'3'}/>
                    <Bar value={streak.guesses['4']} max={maxGuesses(streak.guesses)} label={'4'}/>
                    <Bar value={streak.guesses['5']} max={maxGuesses(streak.guesses)} label={'5'}/>
                    <Bar value={streak.guesses['6']} max={maxGuesses(streak.guesses)} label={'6'}/>
                </div>
            </Card>

            <Card>
                <pre>{JSON.stringify(streak, null, 2)}</pre>
            </Card>
        </div>
    </>)
}


// javascript:localStorage.setItem('nyt-wordle-statistics', '{"currentStreak":95,"maxStreak":95,"guesses":{"1":0,"2":5,"3":33,"4":19,"5":33,"6":5,"fail":0},"winPercentage":100,"gamesPlayed":95,"gamesWon":95,"averageGuesses":3}')