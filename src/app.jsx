// import { Logo } from './logo'
import Card from './components/card'
import Title from "./components/title";
import Input from "./components/input";

export function App() {
    return (<div className={'gap-4 grid grid-cols-1 md:grid-cols-2 p-4'}>
        <Card>
            <Title>Input</Title>
            <Input label={'Max Streak'} name={'maxStreak'} placeholder={'39'}/>
            <Input label={'Max Streak'} name={'maxStreak'} placeholder={'39'}/>
        </Card>

        <Card>
            test
        </Card>
    </div>)
}






// javascript:localStorage.setItem('nyt-wordle-statistics', '{"currentStreak":95,"maxStreak":95,"guesses":{"1":0,"2":5,"3":33,"4":19,"5":33,"6":5,"fail":0},"winPercentage":100,"gamesPlayed":95,"gamesWon":95,"averageGuesses":3}')