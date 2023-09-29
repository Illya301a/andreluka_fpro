//На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо


let withArr = [withHttps = document.querySelector("#withHttps"),withoutHttps = document.querySelector("#withoutHttps")]
let linkArr = [withHttps.getAttribute("href"), withoutHttps.getAttribute("href")]
for (let i = 0; i < linkArr.length; i++){
    if (!linkArr[i].startsWith("https://") && !linkArr[i].startsWith("http://")){
        linkArr[i] = "https://"+linkArr[i]
        withArr[i].href = linkArr[i]
    }
}

