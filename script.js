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
let buyButtons = document.querySelectorAll(".buy")
buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Товар успішно куплено!")
    });
});
function buyProduct(productName, price) {
    const order = {
        date: new Date().toLocaleDateString(),
        price: price,
        productName: productName
    }
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
}

const showOrdersButton = document.getElementById("showOrdersButton");
const ordersList = document.getElementById("ordersList");
const ordersUl = document.getElementById("orders");

showOrdersButton.addEventListener("click", function () {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length > 0) {
        ordersList.style.display = "block";
        ordersUl.innerHTML = "";
        orders.forEach(function (order, index) {
            const li = document.createElement("li");
            li.textContent = `Замовлення #${index + 1} - ${order.date}, ${order.productName}, ${order.price} грн`;
            li.innerHTML += ` <button onclick="removeOrder(${index})">Видалити</button>`;
            ordersUl.appendChild(li);
        });
    } else {
        alert("У вас немає замовлень.");
        location.reload()
    }
});

function removeOrder(index) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (index >= 0 && index < orders.length) {
        orders.splice(index, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
        alert("Замовлення видалено.");
        showOrdersButton.click();
    }
}