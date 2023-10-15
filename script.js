function showCategory(x) {
    const categoryArr = [
        document.querySelector(".products1"),
        document.querySelector(".products2")
    ];
    for (let i = 0; i < categoryArr.length; i++) {
        categoryArr[i].style.display = x === "category" + (i + 1) ? "block" : "none";
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
        productArr[i].style.display = x === "product" + (i + 1) ? "block" : "none";
    }
}

let buyButtons = document.querySelectorAll(".buy");
buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Товар успішно куплено!");
    });
});

function buyProduct(productName, price) {
    const order = {
        date: new Date().toLocaleDateString(),
        price: price,
        productName: productName,
        delivery: document.getElementById("delivery").value,
        city: document.getElementById("city").value,
        payment: document.getElementById("payment").value,
        quantity: document.getElementById("quantity").value
    };
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
            const table = document.createElement("table");

            const productRow = document.createElement("tr");
            const productCell = document.createElement("td");
            productCell.textContent = `Товар: ${order.productName}, Ціна: ${order.price} грн`;
            productRow.appendChild(productCell);
            table.appendChild(productRow);

            const deliveryRow = document.createElement("tr");
            const deliveryCell = document.createElement("td");
            deliveryCell.textContent = `Доставка: ${order.delivery}`;
            deliveryRow.appendChild(deliveryCell);
            table.appendChild(deliveryRow);

            const cityRow = document.createElement("tr");
            const cityCell = document.createElement("td");
            cityCell.textContent = `Місто: ${order.city}`;
            cityRow.appendChild(cityCell);
            table.appendChild(cityRow);

            const paymentRow = document.createElement("tr");
            const paymentCell = document.createElement("td");
            paymentCell.textContent = `Оплата: ${order.payment}`;
            paymentRow.appendChild(paymentCell);
            table.appendChild(paymentRow);

            const quantityRow = document.createElement("tr");
            const quantityCell = document.createElement("td");
            quantityCell.textContent = `Кількість: ${order.quantity}`;
            quantityRow.appendChild(quantityCell);
            table.appendChild(quantityRow);

            li.appendChild(table);
            li.innerHTML += `<button onclick="removeOrder(${index})">Видалити</button>`;
            ordersUl.appendChild(li);
        });
    } else {
        alert("У вас немає замовлень.");
        location.reload();
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

let orderFormContainer = document.getElementById("orderFormContainer");
let orderForm = document.getElementById("orderForm");
let errorMessage = document.getElementById("error");

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
