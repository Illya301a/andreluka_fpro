//Мережа фастфудів пропонує кілька видів гамбургерів:
//
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).
// Гамбургер може бути з одним із декількох видів начинок:
//
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).
// Можна додати добавки:
//
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
//
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

const SIZE_SMALL = { price: 50, calories: 20 };
const SIZE_LARGE = { price: 100, calories: 40 };
const STUFFING_CHEESE = { price: 10, calories: 20 };
const STUFFING_SALAD = { price: 20, calories: 5 };
const STUFFING_POTATO = { price: 15, calories: 10 };
const TOPPING_MAYO = { price: 20, calories: 5 };
const TOPPING_SAUCE = { price: 15, calories: 0 };
const TOPPING_SEASONING = { price: 15, calories: 0 };

class Hamburger {
    constructor(size, stuffing) {
        this.size = size
        this.stuffing = stuffing
        this.toppings = []
    }
    addTopping(topping){
        this.toppings.push(topping)
    }
    calculatePrice() {
        let total = this.size.price + this.stuffing.price;
        if (this.toppings.length > 0) {
            this.toppings.forEach(topping => {
                total += topping.price;
            });
        }
        return total;
    }
    calculateCalories() {
        let total = this.size.calories + this.stuffing.calories;
        if (this.toppings.length > 0) {
            this.toppings.forEach(topping => {
                total += topping.calories;
            });
        }
        return total;
    }

}
let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE)

console.log("Цена: "+hamburger.calculatePrice())
console.log("Калорий: "+hamburger.calculateCalories())

hamburger.addTopping(TOPPING_SAUCE)

console.log("Цена с соусом: "+hamburger.calculatePrice())


