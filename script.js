document.querySelector(".category1").addEventListener("click", () =>{
    showCategory("category1")
})
document.querySelector(".category2").addEventListener("click", () =>{
    showCategory("category2")
})
document.querySelector(".product1").addEventListener("click", () =>{
    showProducts("product1")
})
document.querySelector(".product2").addEventListener("click", () =>{
    showProducts("product2")
})
document.querySelector(".product3").addEventListener("click", () =>{
    showProducts("product3")
})
document.querySelector(".product4").addEventListener("click", () =>{
    showProducts("product4")
})
document.querySelector(".buy1").addEventListener("click", () =>{
    category(1)
})
document.querySelector(".buy2").addEventListener("click", () =>{
    category(2)
})
document.querySelector(".buy3").addEventListener("click", () =>{
    category(3)
})
document.querySelector(".buy4").addEventListener("click", () =>{
    category(4)
})
document.querySelector(".confirm").addEventListener("click", () =>{
    buyProduct()
})

const buyButtons = document.querySelectorAll(".buy")
const showOrdersButton = document.getElementById("showOrdersButton");
const ordersList = document.getElementById("ordersList");
const ordersUl = document.getElementById("orders");
const orderFormContainer = document.getElementById("orderFormContainer");
const orderForm = document.getElementById("orderForm");
const errorMessage = document.getElementById("error");
let productName = null;
let price = null;

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


buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Товар успішно куплено!")
    });
});

function category(x) {
    switch (x) {
        case 1:
            productName = "ПЕС ПАТРОН";
            price = 1300;
            break;
        case 2:
            productName = "ДЖАВЕЛІН";
            price = 400;
            break;
        case 3:
            productName = "ХЕРСОНСЬКИЙ КАВУНЧИК";
            price = 80;
            break;
        case 4:
            productName = "ВОКЗАЛЬНИЙ ЧЕБУРЕК";
            price = 70;
            break;
        default:
    }
}

function buyProduct() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const delivery = document.getElementById("delivery").value;
    const payment = document.getElementById("payment").value;
    const quantity = document.getElementById("quantity").value;
    const comment = document.getElementById("comment").value;
    const order = {
        date: new Date().toLocaleDateString(),
        name: name,
        city: city,
        delivery: delivery,
        payment: payment,
        quantity: quantity,
        productName: productName,
        price: price,
        comment: comment
    };
    if (name !== "" && city !== "" && delivery !== "" && payment !== "" && quantity !== ""){
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    }
    else{
        alert("Введіть усі дані!")
    }
}

showOrdersButton.addEventListener("click", function () {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length > 0) {
        ordersList.style.display = "block";
        ordersUl.innerHTML = "";
        orders.forEach(function (order, index) {
            const li = document.createElement("li");
            li.innerHTML = `Замовлення #${index + 1} - ${order.date},<br>
                    ${order.productName},<br>
                    ${order.price} грн,<br>
                    ПІБ покупця: ${order.name},<br>
                    Місто: ${order.city},<br>
                    Склад Нової пошти: ${order.delivery},<br>
                    Оплата: ${order.payment},<br>
                    Кількість: ${order.quantity},<br>
                    Коментар до замовлення: ${order.comment}`;
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

buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
        orderFormContainer.style.display = "block";
    });
});

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateOrderForm()) {
        alert("Замовлення успішно оформлено!");
        orderFormContainer.style.display = "none";
    }
});

function validateOrderForm() {
    const nameInput = document.getElementById("name");
    const cityInput = document.getElementById("city");
    const deliveryInput = document.getElementById("delivery");
    const paymentInput = document.getElementById("payment");
    const quantityInput = document.getElementById("quantity");

    if (nameInput.value === "" || cityInput.value === "" || deliveryInput.value === "" || paymentInput.value === "" || quantityInput.value === "") {
        errorMessage.textContent = "Будь ласка, заповніть всі обов'язкові поля.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}
