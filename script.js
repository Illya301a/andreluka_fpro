//Вам потрібно зробити конструктор сутності "Студент".
//
// Студент має ім'я, прізвище, рік народження — це властивості.
// Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
//
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
// але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present()
// на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
// Масив – це властивість, present та absent – ​​методи.
//
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    constructor(name, surname, year) {
        this.name = name
        this.surname = surname
        this.year = year
        this.grades = []
        this.attendance = new Array(25).fill(null)
    }

    age(){
        let date = new Date().getFullYear()
        return date-this.year
    }

    present() {
        let index = this.attendance.indexOf(null)
            if (index !== -1)
                this.attendance[index] = true
    }

    absent() {
        let index = this.attendance.indexOf(null)
            if (index !== -1)
                this.attendance[index] = false
    }
    averageGrades(){
        let total = 0
        for (let i = 0; i < this.grades.length; i++){
            total += this.grades[i]
        }
        return total / this.grades.length
    }
    averageAttendances() {
        let totalAbsent = 0;
        let totalPresent = 0;
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === true) {
                totalPresent++
            }
            else if (this.attendance[i] === false) {
                totalAbsent++
            }
        }
        let total = totalPresent+totalAbsent
        return totalPresent/total
    }

    summary(){
        let result
        if (this.averageGrades() > 90 && this.averageAttendances() > 0.9){
            result = "Молодець!"
        }
        else if (this.averageGrades() > 90 || this.averageAttendances() >= 0.9){
            result = "Добре, але можна краще!"
        }
        else{
            result = "Редиска!"
        }
        return result
    }


}
let student1 = new Student("Mohammed", "Ali", "2000")
let student2 = new Student("Illya", "Andreluka", "2007")
let student3 = new Student("Ihor", "Mykhailichenko", "2004")
student1.grades = [85, 90, 88, 92];
student1.present()
student1.present()
student1.absent()

console.log("Ім'я: "+student1.name)
console.log("Фамілія: "+student1.surname)
console.log("Вік студента: "+student1.age())
console.log("Середній бал: "+student1.averageGrades())
console.log("Середня відвідуваність: "+student1.averageAttendances())
console.log("Висновок: "+student1.summary())

student2.grades = [90, 91, 99, 85];
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.absent()
student2.absent()

console.log("Ім'я: "+student2.name)
console.log("Фамілія: "+student2.surname)
console.log("Вік студента: "+student2.age())
console.log("Середній бал: "+student2.averageGrades())
console.log("Середня відвідуваність: "+student2.averageAttendances())
console.log("Висновок: "+student2.summary())

student3.grades = [100, 90, 91, 92];
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.absent()

console.log("Ім'я: "+student3.name)
console.log("Фамілія: "+student3.surname)
console.log("Вік студента: "+student3.age())
console.log("Середній бал: "+student3.averageGrades())
console.log("Середня відвідуваність: "+student3.averageAttendances())
console.log("Висновок: "+student3.summary())