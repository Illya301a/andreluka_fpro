//Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
//Task 1

let arr = [1, "строка", true, null, undefined, 2, -8, 3, 20, false, {
    name: "Illya",
    surname: "Andreluka"
}, "sadfasd", 12];
let sum = 0
let count = 0
for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "number"){
        sum += arr[i]
        count++
    }
}
count === 0 ? console.log("Нет чисел в массиве") : console.log("Середнє арифметичне лише числових: "+sum/count)

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ). Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.
//Task 2

// let x = +prompt("Первое число")
// let znak = prompt("Действие: + - * / % ^", "+")
// let y = +prompt("Второе число")
//
// function doMath(x, znak, y) {
//     switch (znak) {
//         case "+":
//             console.log(`Решение: ${x+y}`)
//             break
//         case "-":
//             console.log(`Решение: ${x-y}`)
//             break
//         case "*":
//             console.log(`Решение: ${x*y}`)
//             break
//         case "/":
//             if (y === 0) {
//                 console.log("Хаха делить на ноль нельзя") ;
//             }
//             else{
//                 console.log(`Решение: ${x/y}`)
//             }
//             break
//         case "%":
//             if (y === 0) {
//                 console.log("Хаха делить на ноль нельзя") ;
//             }
//             else{
//                 console.log(`Решение: ${x%y}`)
//             }
//             break
//         case "^":
//             console.log(`Решение: ${Math.pow(x, y)}`)
//             break
//         default:
//             console.log("Введи нормальный знак")
//     }
// }
// isNaN(x) || isNaN(y) ? console.log("Введи числа!") : doMath(x, znak, y)

//Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.
//Task 3

// let arr = []
// let rows = prompt("Скільки буде массивів?")
// let columns = prompt("Скільки буде елементів в массивах?")
// for (let i = 0; i < rows; i++){
//     let row = []
//     for (let j = 0; j < columns; j++){
//         row.push(prompt(`Добавте ${i} елемент у ${j} массив: `))
//     }
//     arr.push(row)
// }
// console.log(arr)

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
//Task 4

// function func(word, a) {
//     for (let i = 0; i < a.length; i++){
//         while (word.indexOf(a[i]) !== -1){
//             word = word.replace(a[i], "")
//         }
//     }
//     console.log(word)
// }
// func("hello world", ['l', 'd']);



