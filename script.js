//Створити масив, довжину та елементи якого задає користувач.
let arrLength = +prompt("Length", "0")
let arr = []
for (let i = 0; i < arrLength; i++){
    let number = +prompt("Item", "0")
    arr.push(number)
}
console.log("Створити масив, довжину та елементи якого задає користувач. -- "+arr)

//Відсортувати масив за зростанням.
arr.sort(function(a, b) {
    return a - b;
})

console.log("Відсортувати масив за зростанням. -- "+arr)

//Видалити елементи з масиву з 2 по 4 (включно!).
arr.splice(1, 3)
console.log("Видалити елементи з масиву з 2 по 4 (включно!). -- "+arr)

//У міру змін виводити вміст масиву на сторінку.
console.log("Результат: -- "+arr)
