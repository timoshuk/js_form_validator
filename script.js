const form = document.getElementById("form");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    if (!input) {
        throw new Exception('Input error!!!!');
    }
    if (!message) {
        throw new Exception('No message Text exist!!!');
    }

    const formcontrol = input.parentElement;
    const errorMsg = formcontrol.querySelector('small');
    formcontrol.classList.add('error');
    errorMsg.innerText = message;
}

// If input Success
function showSuccess(input) {
    if (!input) {
        throw new Exception("Input not exist!!");
    }
    const formcontrol = input.parentElement;
    formcontrol.classList.remove('error');

    formcontrol.classList.add('success');

}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//============ Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Username
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    // Email
    if (email.value === '') {
        showError(email, 'email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email not found');
    }

    else {
        showSuccess(email);
    }

    // Password
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    // Confirm password

    // Password2
    if (password2.value === '') {
        showError(password2, 'Confirm password is required');
    } else {
        showSuccess(password2);
    }

})
//============ Form submit