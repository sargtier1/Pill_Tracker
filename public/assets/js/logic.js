// FRONT_END JAVASCRIPT CODE
//==========================

// takes user to add prescription page
$(document).on("click", "#addPrescription", () => {
    console.log('add script success');
    window.location.href = "/home/add";

});

$(document).on("click", "#addPrescription", () => {
    console.log('add script success');
    window.location.href = "/home/add";

});

// takes user to register page
$(document).on('click', "#sign-up-btn", (e) => {
    e.preventDefault();
    console.log('sign in btn success');
    window.location.href = "/signup";
})

$(document).on('click', "#log-in-btn", (e) => {
    e.preventDefault();
    console.log('login in button success');
    window.location.href = "/signin";
})

// logic to grab med input and make into new object
$(document).on("click","#add-script-btn", (e) => {

    e.preventDefault();

    const newMed = {
        drugName: $("#name-input").val().trim(),
        startTime: $("#time-input").val().trim(),
        frequency: $("#increment-input").val().trim(),
        notes: $("#notes-input").val().trim()   
    }

    $.post("/api/new/medicine", newMed)
        .then((data)=> {
            console.log(data);
            window.location.href = '/home';
        });

        // changes url to take us back home after the post method
        window.location.href("/home");
});