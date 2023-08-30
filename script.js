//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    array.splice(item-1, 1)
}
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

//Или другим способом, я не особо понял как решать её

const array2 = [1, 2, 3, 4, 5, 6, 7];
function removeElement2() {
    array2.splice(4, 1)
}
removeElement2();
console.log(array2);
// Результат: [1, 2, 3, 4, 6, 7]

