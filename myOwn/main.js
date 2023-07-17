let menu = document.querySelector('header .menu');
let close = document.querySelector('#nav .close');
let nav = document.querySelector('#nav');
let regBtn = document.querySelector('#register');
let regBtn2 = document.querySelector('#register2');
let form = document.querySelector('form');
let formClose = document.querySelector('.form-close');
let lists =document.querySelector('#lists');
let fisrsName = document.querySelector('#f-name');
let lastName = document.querySelector('#l-name');
let email = document.querySelector('#email');
let items = document.getElementsByClassName('item');


menu.addEventListener('click', () => {
    nav.style.display = "flex"
})

close.addEventListener('click', () => {
    nav.style.display = "none"
})

regBtn.addEventListener('click', () => {
    form.style.display = "flex"
    fisrsName.focus()
})

formClose.addEventListener('click', () => {
    form.style.display = "none"
})

form.addEventListener('submit', appendMe)

function appendMe(e) {
    e.preventDefault()
    if (fisrsName.value === "" || lastName.value === "" || email.value === "" ) {
        alert ("this field could not be empty")
    } else {
        lists.innerHTML += `<div class="item">
        <div class="f-name">
            <span class="first-name">${fisrsName.value}</span>
        </div>
        <div class="L-name">
            <span class="last-name">${lastName.value}</span>
        </div>
        <div class="p-email">
            <span class="email">${email.value}</span>
        </div>
        <div class="btns">
            <a href="#" class="edit"><i class="fa-solid fa-pen"></i></a>
            <a href="#" class="del"><i class="fa-solid fa-trash"></i></a>
        </div>
    </div>`

        form.style.display = "none"
        fisrsName.value = ""
        lastName.value = ""
        email.value = ""

    }

  
}

