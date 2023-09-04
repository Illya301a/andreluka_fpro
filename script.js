//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow (num, degree).

function pow(num, degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * pow(num, degree - 1)
    }
}

const result = pow(2, 3)
console.log(result);