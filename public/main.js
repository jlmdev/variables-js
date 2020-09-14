const numberOfCupsOfCoffee = 3
const fullName = 'Josh Mann'
console.log(`${fullName} drank ${numberOfCupsOfCoffee} cups of coffee today.`)

const userName = window.prompt("What's your name?")
console.log(`Hi, ${userName}!`)

const firstOperand = parseFloat(window.prompt('First Number?'))
const secondOperand = parseFloat(window.prompt('Second Number?'))

const sum = firstOperand + secondOperand
const difference = secondOperand - firstOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(`${firstOperand} plus ${secondOperand} equals ${sum}`)
console.log(`${firstOperand} minus ${secondOperand} equals ${difference}`)
console.log(`${firstOperand} times ${secondOperand} equals ${product}`)
console.log(`${firstOperand} divided by ${secondOperand} equals ${quotient}`)
console.log(
  `${firstOperand} divided by ${secondOperand} leaves a remainder of ${remainder}`
)
const numbers = [
  51,
  95,
  81,
  89,
  61,
  6,
  58,
  37,
  8,
  84,
  29,
  83,
  46,
  59,
  91,
  57,
  34,
  27,
  90,
  88,
  39,
  82,
  54,
  25,
  28,
  22,
  10,
  17,
  79,
  44,
  24,
  69,
  27,
  91,
  68,
  66,
  66,
  12,
  71,
  73,
  10,
  20,
  55,
  2,
  13,
  21,
  97,
  42,
  91,
  34,
  40,
  56,
  9,
  72,
  79,
  13,
  59,
  57,
  16,
  63,
  92,
  86,
  82,
  27,
  90,
  38,
  34,
  19,
  58,
  21,
  36,
  56,
  60,
  57,
  72,
  31,
  98,
  54,
  70,
  21,
  65,
  34,
  66,
  13,
  65,
  71,
  92,
  19,
  12,
  56,
  68,
  36,
  20,
  1,
  92,
  69,
  40,
  33,
  12,
  90,
]

const smallest = Math.min(...numbers)
const largest = Math.max(...numbers)
let sumOfNumbers = 0
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  sumOfNumbers += element
}

const average = sumOfNumbers / numbers.length

console.log(`smallest equals ${smallest}`)
console.log(`largest equals ${largest}`)
console.log(`sum equals ${sumOfNumbers}`)
console.log(`average equals ${average}`)
