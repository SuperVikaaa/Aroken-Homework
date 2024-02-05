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
  let sign'plus' = num1 + num2;
  let sign = num1 - num2;
  let sign = num1 * num2;
  let sign = num1 / num2;

  return sign;
}

const result = calcSum(5, 6, 'plus')
console.log(result)