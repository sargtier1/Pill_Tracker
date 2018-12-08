// FRONT_END JAVASCRIPT CODE
//==========================

// variables refferencing html
const register = $("#register-btn");

// takes user to add prescription page
$(document).on("click", "#addPrescription", () => {
    console.log('add script success');
    window.location.href = "/home/add";

});

// takes user to register page
register.on('click', (e) => {
    console.log('register btn success');
    window.location.href = "/register";
})

// logic to grab med input and make into new object
$("#add-script-btn").on("click", (e) => {

    e.preventDefault();

    const newMed = {
        drugName: $("#name-input").val().trim(),
        startTime: $("#time-input").val().trim(),
        frequency: $("#increment-input").val().trim(),
        notes: $("#notes").val().trim()   
    }

    $.POST("/api/new/medicine", newMed)
        .then((data)=> {
            console.log(data)
        });

        window.location.href("/home");

        var pillTime = $('#time-input').val().trim();
        pillTime = moment(pillTime, 'hhmma');
 
        var addThisTime = $('#hourSpread').val().trim();
 
        var times1 = moment(pillTime).add(addThisTime, 'H');
        console.log('New Time is: ' + moment(times1).format(' HH'));
 
        var times2 = moment(pillTime).add(addThisTime * 2, 'H');
        console.log('New Time is: ' + moment(times2).format(' H:mm a'));
 
        var times3 = moment(pillTime).add(addThisTime * 3, 'H');
        console.log('New Time is: ' + moment(times3).format(' H:mm a'));
 
        // needs to be editted to send the time to home.handlebars
        $('#pillTime1').text(moment(times1).format(' h:mm a')); 
        $('#pillTime2').text(moment(times2).format(' h:mm a'));
        $('#pillTime3').text(moment(times3).format(' h:mm a'));


});