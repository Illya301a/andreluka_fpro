// Task 1
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result = ""
for (let i = 10; i <= 20; i++){
    result += i + (i < 20 ? ", " : "")
}
console.log(result)

//Task 2
//Вивести квадрати чисел від 10 до 20.
// let result = 0
// for (let i = 10; i <= 20; i++){
//     result = i * i
//     console.log(result)
// }

//Task 3
//Вивести таблицю множення на 7.
// for (let i = 1; i < 10; i++){
//     console.log(`7 * ${i} = ${7*i}`)
// }

//Task 4
//Знайти суму всіх цілих чисел від 1 до 15.
// let result = 0
// for (let i = 1; i <= 15; i++){
//     result += i
// }
// console.log(result)

//Task 5
//Знайти добуток усіх цілих чисел від 15 до 35.
// let result = 1
// for (let i = 15; i <= 35; i++){
//     result *= i
// }
// console.log(result)

//Task 6
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let result = 0
// for (let i = 1; i <= 500; i++){
//     result += i
// }
// console.log(result/500)

//Task 7
//Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let result = 0
// for (let i = 30; i <= 80; i++){
//     if (i % 2 === 0) result += i
// }
// console.log(result)

//Task 8
//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// let result = 0
// for (let i = 100; i <= 200; i++){
//     if (i % 3 === 0) console.log(i)
// }

//Task 9
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let num = +prompt("Your number")
// for (let i = 1; i <= num; i++){
//     if (num % i === 0)
//         console.log(i)
// }

//Task 10
//Визначити кількість його парних дільників.
// let num = +prompt("Your number")
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//         console.log(i);
//     }
// }

//Task 11
//Знайти суму його парних дільників.
// let num = +prompt("Your number")
// let result = 0
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//         result += i
//     }
// }
// console.log(result)

//Task 12
//Надрукувати повну таблицю множення від 1 до 10.
// for (let i = 1; i <= 10; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i}*${j} = ${i*j}`)
//     }
// }