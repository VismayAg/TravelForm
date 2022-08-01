console.log("This is my project");

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;

//VALIDATE NAME HERE:
userName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = userName.value;
    if (regex.test(str)) {
        userName.classList.remove('is-invalid');
        validName = true;
    }
    else {
        userName.classList.add('is-invalid');
        validName = false;
    }
});

//VALIDATE EMAIL HERE:
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

//VALIDATE PHONE HERE:
phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});



let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    let popdown = document.getElementById('popdown');
    if(validName && validEmail && validPhone){ 
        popdown.classList.remove('show', 'alert-danger');
        popdown.classList.add('show','alert-success');
        popdown.innerHTML += `<strong>Success!</strong> Your travel request has been successfully submitted.`
        userName.value = '';
        email.value = '';
        phone.value = '';
    } else{
        popdown.classList.remove('show', 'alert-success');
        popdown.classList.add('show','alert-danger');
        popdown.innerHTML += `<strong>Sorry!</strong> Your input is invalid. Please check and try again..`
    }
    setTimeout(function(){
        const alert = bootstrap.Alert.getOrCreateInstance('#popdown')
        alert.close()
        window.location.reload();
    }, 2000);
    e.preventDefault();
});

