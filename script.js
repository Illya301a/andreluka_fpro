document.querySelector("#submit").addEventListener("click", () =>{
    const form = document.getElementById("registrationForm");
    const userDataTable = document.getElementById("userData").getElementsByTagName("tbody")[0];
    userDataTable.innerHTML = "";

    for (const element of form.elements) {
        if ((element.type === "checkbox" && element.checked) || (element.type === "radio" && element.checked) || element.type !== "checkbox" && element.type !== "radio") {
            const row = userDataTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = element.name;
            cell2.textContent = element.value;
        }
    }
    document.getElementById("userData").style.display = "block";
})


