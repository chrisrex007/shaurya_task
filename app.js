const btn = document.querySelector(".signup-btn");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".btn-close");
const form = document.querySelector("form");
const count = document.querySelector(".count");
let COUNT = parseInt(localStorage.getItem("countvar"));
count.innerText = COUNT;


btn.onclick = function () {
    toggleModal();
}

function toggleModal() {
    overlay.classList.toggle("hidden");
}

closebtn.onclick = function () {
    toggleModal();
}

function logData(name, email, password, phonenum, isGender, isSports) {
    console.log(`Name = ${name.value}`);
    console.log(`Email = ${email.value}`);
    console.log(`Password = ${password.value}`);
    console.log(`Phone Number = ${phonenum.value}`);
    console.log(`Gender = ${isGender[0].defaultValue}`);
    console.log("Below is the List of the Sports you are interested in!");
    for (let i = 0; i < isSports.length; i++) {
        console.log(isSports[i].defaultValue);
    }
}

function validation(name, email, password, phonenum) {
    // For Checking Numericals in name

    let regex = /\d/;
    if (regex.test(name.value)) {
        alert("Name must not contain any Numerical Values");
        return;
    }

    // For Checking Name Length
    if (name.value.length < 5) {
        alert("Name must be of minimum length 5");
        return;
    }

    // For Checking Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email.value)) {
        alert("Enter a valid Gmail Address.");
        return;
    }

    // For Checking Password Length
    if (password.value.length < 8) {
        alert("Password must be of length 8 or more.");
        return;
    }

    // For Checking Phone Number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phonenum.value)) {
        alert("Enter a valid 10 digit Phone Number.");
        return;
    }

    // For Checking selected Gender and sports
    const isGender = document.querySelectorAll('input[name="gender"]:checked');
    if (isGender.length == 0) {
        alert("Please Choose Gender");
        return;
    }

    const isSports = document.querySelectorAll('input[name="sports"]:checked');
    if (isSports.length == 0) {
        alert("Select at least one sport!");
        return;
    }

    logData(name, email, password, phonenum, isGender, isSports);
    updateCount();
    refresh(name, email, password, phonenum, isGender, isSports);

    // Thank you for Registering 
    toggleModal();
    toggleThankYouModal();
}

function updateCount() {
    COUNT++;
    localStorage.setItem("countvar", COUNT);
    count.innerText = COUNT;
}

function refresh(name, email, password, phonenum, isGender, isSports) {
    name.value = "";
    email.value = "";
    password.value = "";
    phonenum.value = "";
    isGender.forEach(element => {
        element.checked = false;
    });
    isSports.forEach(element => {
        element.checked = false;
    });
}

const submit = document.querySelector(".btn-submit");

submit.onclick = function (event) {
    event.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const phonenum = document.querySelector("#phonenum");

    validation(name, email, password, phonenum);
}

const toggleSwitch = document.getElementById('toggle-dark-mode');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.getElementById('dark-mode').disabled = false;
    } else {
        document.getElementById('dark-mode').disabled = true;
    }
}

const thankYouOverlay = document.querySelector(".thank-you-overlay");
const thankYouCloseBtn = document.querySelector(".btn-thank-you-close");

function toggleThankYouModal() {
    thankYouOverlay.classList.toggle("hidden");
}

thankYouCloseBtn.onclick = function () {
    toggleThankYouModal();
}
