const btn = document.querySelector(".signup-btn");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".btn-close");
const form = document.querySelector("form");

btn.onclick = function () {
    openModal();
}

function openModal() {
    overlay.classList.toggle("hidden");
}
closebtn.onclick = function () {
    overlay.classList.toggle("hidden");
}

const submit = document.querySelector(".btn-submit");
submit.onclick = function () {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const phonenum = document.querySelector("#phonenum");

    // For Checking Numericals in name
    let regex = /\d/;
    if (regex.test(name.value)) {
        alert("Name must not contain any Numerical Values");
        return;
    }

    //For Checking NameLength
    if (name.value.length < 5) {
        alert("Name must be of minimum length 5");
        return;
    }

    //For Checking Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email.value)) {
        alert("Enter a valid Gmail Address.");
        return;
    }

    //For Checking Pass
    if (password.value.length < 8) {
        alert("Password must be of length 8 or more.");
        return;
    }

    //For Checking Phone Num
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
        alert("Select atleast one sport!");
        return;
    }

    console.log(`Name = ${name.value}`);
    console.log(`Email = ${email.value}`);
    console.log(`Password = ${password.value}`);
    console.log(`Phone Number = ${phonenum.value}`);
    console.log(`Gender = ${isGender[0].defaultValue}`);
    console.log("Below is the List of the Sports you are interested in!");
    for (i = 0; i < isSports.length; i++) {
        console.log(isSports[i].defaultValue);
    }
}