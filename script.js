//Написати функцію generateList(array),
//яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:
const inputArr = [1, 2, 3, [1, 2, 3], 4];
function generateList(array) {
    let result = ""
    for (let item of array){
        if (Array.isArray(item)){
            result += "<ul>"
            result += generateList(item)
            result += "</ul>"
        }
        else{
            result += "<li>"+item+"</li>"
        }
    }
    return result
}
document.querySelector("#list").innerHTML = generateList(inputArr)