//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
let tbody = document.querySelector("tbody")
let num = 1
for (let i = 0; i < 10; i++){
    let row = document.createElement("tr")
    for (let j = 0; j < 10; j++){
        let column = document.createElement("td")
        column.textContent = (""+(num++)) //если не добавить "" показывает ошибку
        row.append(column)
    }
    tbody.append(row)
}