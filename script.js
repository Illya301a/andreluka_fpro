//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
let imageArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
let imageRandom = Math.floor(Math.random() * imageArr.length)
let imageHTML = document.createElement("img")
imageHTML.src = "images/" + imageArr[imageRandom]
document.body.append(imageHTML)