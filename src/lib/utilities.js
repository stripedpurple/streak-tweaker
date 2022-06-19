const maxCurrentStreak = (played = 0, max) => {
    let diff = played - max
  if (played === 0 || max === played)
      return 0

  if (diff > max)
      return max

  return diff
}

const maxGuesses = (guesses) => {
    let localGuesses = {...guesses}
    delete localGuesses.fail

    let max = Math.max(...Object.values(localGuesses).map(n => +n))

    console.log(max)

    return max
}


export {
    maxCurrentStreak,
    maxGuesses,
}