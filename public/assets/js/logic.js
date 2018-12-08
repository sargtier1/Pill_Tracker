// FRONT_END JAVASCRIPT CODE
//==========================

// variables refferencing html
const addP = $("#addPrescription");
const register = $("#register-btn");

// takes user to add prescription page
addP.on('click', (e) => {
    console.log('add script success');
    window.location.href = "/home/add";
})

// takes user to register page
register.on('click', (e) => {
    console.log('register btn success');
    window.location.href = "/register";
})