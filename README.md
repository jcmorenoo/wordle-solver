# Wordle Solver

[Wordle](https://www.nytimes.com/games/wordle/index.html) is a word solving daily puzzle where the user has 6 attempts to guess the 5 letter word. The answer changes each day.

I used to play the game a lot, and I recently got curious how it works. So I attempted to reverse engineer it to find out how to get the answer for the day's puzzle.

## Use this solver

Running `node solve.js` will log the answer for today and tomorrow's puzzle on the console.

## How I found it

1. I checked the network activity if it makes some network call to get the answer, or check your answer against some api. I found out that it doesn't make any network calls to get the answer.
1. At this point, you can tell that checking your answer against the solution is done in the browser (client).
   1. I solved the puzzle for the day and tried to find the answer in the code. Sure enough it's there. In a hardcoded array of solutions.
   1. Next, I tried to find how it selects the solution for the day. It uses a `dayOffset` as an index to the list of solutions to select the word for the day. So a quick find took me to how it calculates the `dayOffset`.
