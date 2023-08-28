let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let positive = 0
let negative = 0
let positiveCount = 0
let positiveCountSum = 0
let positiveUnCount = 0
let positiveUnCountSum = 0
let multiply = 1
let sum = 0
for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
        sum += arr[i]
        positive++
        multiply *= arr[i]
    }
    if (arr[i] < 0){
        negative++
    }
    if (arr[i] % 2 !== 0 && arr[i] > 0){
        positiveUnCount++
        positiveUnCountSum += arr[i]

    }
    if (arr[i] % 2 === 0 && arr[i] > 0){
        positiveCount++
        positiveCountSum += arr[i]
    }
}
//Відсортував за зростанням
arr.sort(function(a, b) {
    return a - b;
})
console.log(arr)
//Знайти суму та кількість позитивних елементів.
console.log("Кількість позитивних елементів: "+positive)
console.log("Сума позитивних елементів: "+sum)
//Знайти мінімальний елемент масиву та його порядковий номер.
console.log("Знайти мінімальний елемент масиву: "+arr[0]+". Та його порядковий номер: "+arr.indexOf(arr[0]))
//Знайти максимальний елемент масиву та його порядковий номер.
console.log("Знайти максимальний елемент масиву: "+arr[arr.length-1]+". Та його порядковий номер: "+arr.indexOf(arr[arr.length-1]))
//Визначити кількість негативних елементів.
console.log("Визначити кількість негативних елементів: "+negative)
//Знайти кількість непарних позитивних елементів.
console.log("Знайти кількість непарних позитивних елементів: "+positiveUnCount)
//Знайти кількість парних позитивних елементів.
console.log("Знайти кількість непарних позитивних елементів: "+positiveCount)
//Знайти суму парних позитивних елементів.
console.log("Знайти суму парних позитивних елементів: "+positiveCountSum)
//Знайти суму непарних позитивних елементів.
console.log("Знайти суму непарних позитивних елементів: "+positiveUnCountSum)
//Знайти добуток позитивних елементів.
console.log("Знайти добуток позитивних елементів: "+multiply)
//Знайти найбільший серед елементів масиву, остальні обнулити.
let maxElement = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxIndex = i;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (i !== maxIndex) {
        arr[i] = 0;
    }
}

console.log("Знайти найбільший серед елементів масиву, остальні обнулити: ", arr);