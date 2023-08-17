let year = Number(prompt("Рік народження?"))
let city = (prompt("Місто народження?"))
let sport = (prompt("Улюблений вид спорту?"))

if (year === null){
    alert("Шкода, що Ви не захотіли ввести свій рік народження")
}
else if (city === null){
    alert("Шкода, що Ви не захотіли ввести своє місто народження")
}
else if (sport === null){
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту")
}
else{
    switch (city) {
        case "Київ":
            city1 = ("Ти живеш у столиці Київ")
            break
        case "Вашингтон":
            city1 = ("Ти живеш у столиці Вашингтон")
            break
        case "Лондон":
            city1 = ("Ти живеш у столиці Лондон")
            break
        default:
            city1 = ("Ти живеш у місті "+city)
    }
    switch (sport) {
        case "Футбол":
            sport1 = ("Круто! Хочеш стати як Криштиану Роналду?")
            break
        case "Волейбол":
            sport1 = ("Круто! Хочеш стати як Ервин Нгапет?")
            break
        case "Баскетбол":
            sport1 = ("Круто! Хочеш стати як Майкл Джордан?")
            break
        default:
            sport1 = ("Твій улюблений вид спорту це "+sport)
    }

    alert("Ваш вік: "+(2023-year)+". "+city1+". "+sport1)
}
