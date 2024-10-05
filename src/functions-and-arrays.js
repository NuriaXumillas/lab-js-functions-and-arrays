// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0)
        return null

    let longestWords = words[0]

    for (let i = 1; i < words.length; i++)
        if (words[i].length > longestWords.length) {
            longestWords = words[i]
        }
        return longestWords
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number;
    }
    return sum
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) return 0

    const sum = sumNumbers(numbers)
    return sum / numbers.length
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {
    if (words.length === 0) return null

    for(let word of words) {
        if (word === wordToSearch) {
            return true
        }
    }

    return false
}

