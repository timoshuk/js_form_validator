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
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(email.value).toLowerCase());

    if (!valid) {
        showError(email, `${getFieldName(email)} has incorrect value`);
    } else {
        showSuccess(email);
    }

}

// getFieldName

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }


    });
}


// Check input length

function checkInputLength(input, min = 3, max = 20) {
    const formcontrol = input.parentElement;
    const errorMsg = formcontrol.querySelector('small');

    if (input.value.length < min) {

        showError(input, `${getFieldName(input)} min length must be ${min} characters`)


    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} max length must be ${max} characters`)

    } else {
        showSuccess(input);
    }
}

// Match Password 

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password not Match')
    }
}


//============ Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkInputLength(username, 3, 15);
    checkInputLength(password, 8, 22);
    checkEmail(email);
    checkPasswordMatch(password, password2);

})
//============ Form submit