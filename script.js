//Створити клас SuperMath.
//
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у
// користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі),
// інакше - запитати введення нових даних через метод input() класу SuperMath.
//
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
//
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
//
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;

        const operator = ["+", "-", "*", "/", "%"].includes(znak);

        if (!operator) {
            console.log("Некоректний оператор. Будь ласка, введіть коректний оператор (+, -, *, /, %).");
            this.input(obj);
            return;
        }

        const confirmation = window.confirm(`Ви хочете зробити операцію ${znak} з числами ${X} і ${Y}?`);

        if (confirmation) {
            let result;
            switch (znak) {
                case "+":
                    result = X + Y;
                    break;
                case "-":
                    result = X - Y;
                    break;
                case "*":
                    result = X * Y;
                    break;
                case "/":
                    result = X / Y;
                    break;
                case "%":
                    result = X % Y;
                    break;
            }
            console.log(`Результат: ${result}`);
        } else {
            this.input(obj);
        }
    }

    input(obj) {
        obj.X = parseInt(prompt("Введіть число X:"));
        obj.Y = parseInt(prompt("Введіть число Y:"));
        obj.znak = prompt("Введіть оператор (+, -, *, /, %):");
        this.check(obj);
    }
}

// Приклад використання
const obj = { X: 12, Y: 3, znak: "/" };
const p = new SuperMath();
p.check(obj);
