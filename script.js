//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає

let input = document.querySelector("input")
input.addEventListener("focus", () =>{
    let create = document.createElement("div")
    create.textContent = "Привіт!"
    create.className = "create"
    document.body.append(create)
    input.addEventListener("blur", () =>{
        create.remove()
    })
})