// let userName = 'human'

// function showMessage(userName) {
//   return 'Hello' + userName
// }

// console.log(showMessage(' human'))

// =============================================================//

// const numbers = [5, 15, 20 ,3, 6, 35]

// function test(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {console.log(numbers[i])}
//   }
// }

// console.log(test(numbers))

// =============================================================//

function calcSum(num1, num2, sign) {
  if (sign == 'plus') return num1 + num2;
  if (sign == 'minus') return num1 - num2;
  if (sign == 'multiplying') return num1 * num2;
  if (sign == 'division') return num1 / num2;
}

const result = calcSum(3, 4, 'plus')
console.log(result)