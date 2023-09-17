function showCategory(x) {
    const categoryArr = [
        document.querySelector(".products1"),
        document.querySelector(".products2")
    ];
    for (let i = 0; i < categoryArr.length; i++) {
        categoryArr[i].style.display = x === "category" + (i + 1) ? "block" : "none"
    }
}
function showProducts(x) {
    const productArr = [
        document.querySelector(".info1"),
        document.querySelector(".info2"),
        document.querySelector(".info3"),
        document.querySelector(".info4")
    ];

    for (let i = 0; i < productArr.length; i++) {
        productArr[i].style.display = x === "product" + (i + 1) ? "block" : "none"
    }
}
let buyButtons = document.querySelectorAll("button")
buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Товар успішно куплено!")
        location.reload()
    });
});