let label = document.login.uname;
let label2 = document.login.pass;
let user = document.querySelectorAll('label');
let login = document.login;

label.addEventListener('focus', function () {
    user[0].style.transform = 'translatey(-20px)'
    user[0].style.fontSize = '12px'
    user[0].style.color = 'var(--secondaryColor)'
})
label2.addEventListener('focus', function () {
    user[1].style.transform = 'translatey(-20px)';
    user[1].style.fontSize = '12px'
    user[1].style.color = 'var(--secondaryColor)'

})


label.addEventListener('blur', function () {
    if (label.value == '') {
        user[0].style.transform = 'translatey(0px)';
        user[0].style.fontSize = 'var(--fontSize)'
        user[0].style.color = '#6a6a6a'

    }
})
label2.addEventListener('blur', function () {
    if (label2.value == '') {
        user[1].style.transform = 'translatey(0px)'
        user[1].style.fontSize = 'var(--fontSize)'
        user[1].style.color = '#6a6a6a'
    }
})

let username = 'admin';
let pass = 'admin';

let Msg = document.getElementById('msg');
let userMsg = document.createElement('span');
let passMsg = document.createElement('span');

login.addEventListener('submit', function (valid) {
    if (label.value == '') {

        label.style.borderColor = 'red';
        userMsg.innerHTML = 'Fill your email';
        Msg.append(userMsg);
        valid.preventDefault();
    } else {
        userMsg.remove();
        if (label.value != username) {
            label.style.borderColor = 'red';
            userMsg.innerHTML = 'Username incorrect';
            Msg.append(userMsg);
            valid.preventDefault();
        } else {
            label.style.borderColor = '';
            userMsg.remove();
        }
    }

    if (label2.value == '') {
        label2.style.borderColor = 'red';
        passMsg.innerHTML = 'Fill your password';
        Msg.append(passMsg);
        valid.preventDefault();
    } else {
        passMsg.remove();
        if (label2.value != pass) {
            label2.style.borderColor = 'red';
            passMsg.innerHTML = 'Password incorrect';
            Msg.append(passMsg);
            valid.preventDefault();
        } else {
            passMsg.remove();
            label2.style.borderColor = '';
        }
    }
})

