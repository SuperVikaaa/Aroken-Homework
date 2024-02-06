// const users = {
//   vika: {
//     age: 32,
//     isAdmin: true
//   }
// }

// console.log(users.vika)

// =====================================================================//

// const users = {
//   nik: {
//     age: 25,
//     isAdmin: false,
//     sayHello(name) {
//       console.log(`Hello ${name}`)
//     }
//   }
// }

// console.log(users.nik)
// users.nik.sayHello('Din')

// =====================================================================//

const users = [
  {
    name: 'Boris',
    age: 42,
    isAdmin: true
  },
  {
    name: 'Ivan',
    age: 25,
    isAdmin: false
  },
  {
    name: 'Egor',
    age: 29,
    isAdmin: false
  }
]

let notAdmin = 0

for(let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    notAdmin++
  }
}

console.log(`Количество простых пользователей - ${notAdmin}`)

