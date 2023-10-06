//1. Створити сутність "Людина".
//
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    info(){
        console.log("Ім'я: "+this.name+". Вік: "+this.age)
    }
}

// 2. Створити сутність "Автомобіль".
//
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу
// Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації
// класу Людина для виведення інформації про власника
class Car {
    constructor(brand, model, year, number, owner) {
        this.brand = brand
        this.model = model
        this.year = year
        this.number = number
        if (year >= 18){
            this.owner = owner
        }
    }
    info(){
        console.log("Марка авто: "+this.brand+". Модель: "+this.model+". Рік: "+this.year+". Номерний знак: "+this.number)
        if (this.owner){
            console.log("Інформація про власника: ")
            this.owner.info()
        }
        else{
            console.log("Власнику менше 18 років")
        }
    }
}
// В якості демонстраціїї створити:
//
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

let person1 = new Person("Illya", "16")
let person2 = new Person("Ahmet", "24")

let car1 = new Car("Koenigsegg", "Agera", "2018", "АА 0000 НН", person1)
let car2 = new Car ("Lamborghini", "Aventador", "2011", "ВН 7777 НН", person2)
car1.info()
car2.info()