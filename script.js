

const nameInput = document.getElementById("fullName")
const emailInput = document.getElementById("email")
const message = document.getElementById("message")
const form = document.querySelector(".contactForm")
const button = document.getElementById("menuBtn")
const errorMessage = document.getElementById("errorMessage")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const password = document.getElementById("password")
// const passwordRegex = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>\/?\\|`~]).*$/


const submitFunction = (e) => {
    e.preventDefault();


    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = message.value;
    // const passwordValue = password.value;



    if (!nameValue || !emailValue || !messageValue) {
        console.log("Please fill in the required")
        errorMessage.innerText = "Please fill in the required text"
        return;
    }

    else if (emailRegex.test(emailValue) === false) {
        console.log("Please provide a valid email")
        errorMessage.innerText = "Please provide a valid email"
        return;
    }

    else if (messageValue.trim().length < 10) {
        console.log("Please your message should be a minimum of 50 characters")
        errorMessage.innerText = "Please your message should be a minimum of 50 characters"
        return;
    }


    // else if (passwordRegex.test(passwordValue) === false) {
    //     if (passwordValue.trim().length < 8) {
    //         console.log("Password must be a minimum of 8 characters")
    //         errorMessage.innerText = "Password must be a minimum of 8 characters"
    //         return;
    //     }
    //     else if (/[a-z]/.test(passwordValue) === false) {
    //         console.log("Your password must contain a lowercase letter")
    //         errorMessage.innerText = "Your password must contain a lowercase "
    //         return;
    //     }
    //     else if (/[A-Z]/.test(passwordValue) === false) {
    //         console.log("Your password must contain an uppercase letter")
    //         errorMessage.innerText = "Your password must contain an uppercase letter "
    //         return;
    //     }
    //     else if (/[^a-zA-Z0-9]/.test(passwordValue) === false) {
    //         console.log("Your password must contain a special character")
    //         errorMessage.innerText = "Your password must contain a special character "
    //         return;
    //     }
    // }

    else {
        nameInput.value = ""
        emailInput.value = ""
        message.value = ""
        // password.value = ""
        errorMessage.innerText = "Form submitted successfully"
        errorMessage.style.color = "green"
    }


}

form.addEventListener("submit", submitFunction)















