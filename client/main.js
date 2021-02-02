
let form = document.getElementById('contact-form')
let firstName = document.getElementById('form_name').value
let lastName = document.getElementById('form_lastname').value
let userEmail = document.getElementById('form_email').value
let userPhone = document.getElementById('form_phone').value

let data = {
    firstName: firstName,
    lastName: lastName,
    userEmail: userEmail,
    userPhone: userPhone
}
console.log(data)

let sendRequest = (url, method, body = null) => {
    const headers = {
        'Content-type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

// fetch('/about').then(res => console.log(res))


firstName.onsubmit = (e) => {
    e.preventDefault()

    let firstName = document.getElementById('form_name')
    let lastName = document.getElementById('form_lastname')
    let userEmail = document.getElementById('form_email')
    let userPhone = document.getElementById('form_phone')
    let btn = document.getElementById('btn')
    
    let user = {
        firstName: firstName,
        lastName: lastName,
        userEmail: userEmail,
        userPhone: userPhone
    }

    btn.onclick(() => {
        sendRequest('/users', 'POST', user)
        console.log(user)
    })

}