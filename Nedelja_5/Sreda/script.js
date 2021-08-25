// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!

let isValidate = true
let btnSubmit = document.querySelector('.btn-submit')
let userReview = document.querySelector('.user-review')

let firstName = document.querySelector('#name')
let lastName = document.querySelector('#surname')
let password = document.querySelector('#password')
let passwordConfirm = document.querySelector('#passwordConfirm')
let course = document.querySelector('#course')

let firstNameError = document.querySelector('#name-error')
let lastNameError = document.querySelector('#surname-error')
let passwordError = document.querySelector('#password-error')
let passwordConfirmError = document.querySelector('#passwordConfirm-error')
let courseError = document.querySelector('#course-error')

function stringHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function stringHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}

btnSubmit.addEventListener('click', e=> {
    e.preventDefault()

    if (firstName.value == "") {
        firstNameError.textContent = ""
        firstNameError.textContent = "Required name input"
        isValidate = false
    } else if (firstName.value.length <= 5) {
        firstNameError.textContent = ""
        firstNameError.textContent = "Minimum five character"
        isValidate = false
    } else if (firstName.value.length >= 15) {
        firstNameError.textContent = ""
        firstNameError.textContent = "Maximum fifteen characters"
        isValidate = false
    }

    if (lastName.value == "") {
        lastNameError.textContent = ""
        lastNameError.textContent = "Required surname input"
        isValidate = false
    } else if (lastName.value.length <= 5) {
        lastNameError.textContent = ""
        lastNameError.textContent = "Minimum five character"
        isValidate = false
    } else if (lastName.value.length >= 20) {
        lastNameError.textContent = ""
        lastNameError.textContent = "Maximum twenty characters"
        isValidate = false
    }
    if (password.value == "") {
        passwordError.textContent = ""
        passwordError.textContent = "Required password input"
        isValidate = false
    } else if (password.value.length <= 8) {
        passwordError.textContent = ""
        passwordError.textContent = "Must include minimum einht characters"
        isValidate = false
    } else if (!stringHasNumber(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "Must include a number"
        isValidate = false
    } else if (!stringHasUpperCase(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "Must include a uppercase letter"
        isValidate = false
    }

    if (passwordConfirm.value == "") {
        passwordConfirmError.textContent = ""
        passwordConfirmError.textContent = "Required password input"
        isValidate = false
    } else if (passwordConfirm.value != password.value) {
        passwordConfirmError.textContent = ""
        passwordConfirmError.textContent = "Incorect password"
        isValidate = false 
    }

    if ((course.value == "HTML" || course.value == "CSS" || course.value == "JavaScript" || course.value == "PHP")) {
        courseError.textContent = ""
        courseError.textContent = "You need to select a course"
        isValidate = false
    }

    if (isValidate) {
        let user = {
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            usr_password: password.value,
            usr_passwordConfirm: passwordConfirm.value,
            usr_course: course.value
        }

        userReview.innerHTML += `Name: ${user.first_name} <br>`
        userReview.innerHTML += `Surname: ${user.last_name} <br>`
        userReview.innerHTML += `Course: ${user.usr_course}`

    }
    
    firstName.value = ''
    lastName.value = ''
    password.value = ''
    passwordConfirm.value = ''
    course.value = ''
})