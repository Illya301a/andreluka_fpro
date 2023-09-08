//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями

function sumFunc() {
    let result = 0
    return function (x) {
        result += x
        return result
    }
}
let sum = sumFunc()


console.log(sum(3)) //3
console.log(sum(5)) //8
console.log(sum(20)) //28