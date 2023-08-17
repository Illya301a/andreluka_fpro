let task = prompt("What task to do (add, sub, mult, div)?")
let number1 = Number(prompt("Write first number"));
let number2 = Number(prompt("Write second number"));
switch (task) {
    case "add":
        alert("add: "+(number1+number2))
        break
    case "sub":
        alert("sub: "+(number1-number2))
        break
    case "mult":
        alert("mult: "+(number1*number2))
        break
    case "div":
        alert("div: "+(number1/number2))
        break
    default:
        alert("Тебе стоит ввести add, sub, mult, div")
        break
}