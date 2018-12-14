//                      FRONT_END JAVASCRIPT CODE
//=======================================================================

// constants used (used for query checking)
//-----------------------------------------------------------------------
var paramsString = window.location.search;
var searchParams = new URLSearchParams(paramsString);
var action = searchParams.get("state") 
var editId = searchParams.get('id')
var deleteId = searchParams.get('id')
// click events to change the URL that causes the HTML routes
//                to render a certain page
//-----------------------------------------------------------------------
// takes user to add prescription page
$(document).on("click", "#addPrescription", () => {
    console.log('add script success');
    window.location.href = "/home/add";
});
// takers user to add medication page
$(document).on("click", "#addPrescription", () => {
    console.log('add script success');
    window.location.href = "/home/add";
});
// takes user to register page
$(document).on('click', "#sign-up-btn", (e) => {
    e.preventDefault();
    console.log('sign in btn success');
    window.location.href = "/signup";
});
// takes user to the sign in page
$(document).on('click', "#log-in-btn", (e) => {
    e.preventDefault();
    console.log('login in button success');
    window.location.href = "/signin";
});

// Displays medication on home page on load
//-----------------------------------------------------------------------
$.get('api/all', function displayMedications (data){
    console.log(data)
      // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create container for all scripts
      var wellContainer = $("<div>");
          wellContainer.addClass("container");
      // Creates row
      var wellRow = $("<div>");
          wellRow.addClass("row")
      // Centers colums, and items within the container
      var wellCol = $("<div>")
          wellCol.addClass("col-8 offset-2");
      //  Creates the cards for each script
      var preCards = $("<div>");
          preCards.addClass("card met-4");
      // 
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("card-body");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "med-well-" + i);
      // Append the well to the well section
      $("#med-section").append(wellSection);
  
      // button variables in mega form
      var editBtn = "<button id='edit-btn'" + "data-Number='" + data[i].id + "'" + "class='btn btn-outline-info'>" + "Edit" + "</button>"
      var deleteBtn = "<button id='delete-btn'" + "data-Number='" + data[i].id + "'" + "class='btn btn-outline-danger float-right'>" + "Delete" + "</button>"
      // if statments that display medicine depending on how many times of day it it must be taken
      if (data[i].frequency === 12) {
        $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
        "\n<div> First Pill: " + data[i].startTime + "</div>" + "<br>");
        // edit button
        $("#med-well-" + i).append(editBtn);
        // delete button
        $("#med-well-" + i).append(deleteBtn + "\n<hr>");  
      }
      if (data[i].frequency === 8) {
        var newTime = parseInt(data[i].startTime) + 8;
        $("#med-well-" + i).append("<div> Name: " + data[i].drugName +
          "\n<div>First Pill: " + data[i].startTime  +
          "\n<div>Next Pill: " + moment(newTime).format('h:mm a') + "</div>" + "<br>");
        // edit button
        $("#med-well-" + i).append(editBtn);
        // delete button
        $("#med-well-" + i).append(deleteBtn + "\n<hr>"); 
      }
      if (data[i].frequency === 4) {
        var newTime2 = parseInt(data[i].startTime) + 4;
        var newTime3 = newTime2 + 4;
        $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
          "\n<div> First Pill: " + data[i].startTime + 
          "\n<div> Next Pill: " + moment(newTime2).format('h:mm a') +
          "\n<div> Next Pill: " + moment(newTime3).format('h:mm a') + "</div>" + "<br>");
        // edit button
        $("#med-well-" + i).append(editBtn);
        // delete button
        $("#med-well-" + i).append(deleteBtn + "\n<hr>"); 
      }
    }  
   });

// adding and updating medications
//-----------------------------------------------------------------------
// when edit button is hit creates a query string to allow 
//         editing from the original submit page
$(document).on("click", ".btn-outline-info", function() {
    var editId = $(this).data("number");
    location.replace('/home/add?state=edit&id=' + editId) 
});
// because we are using the same button to add, and edit medications we 
//    need these if statements to evalute the URL. The URL being 
//         evalutated is generated in the click event above
if (!action) {
    // this function will make a NEW med
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
}
if (action === 'edit') {
    // this function will UPDATE a med
    $(document).on("click","#add-script-btn", (e) => {
        console.log(this)
        e.preventDefault();
        const newMed = {
            drugName: $("#name-input").val().trim(),
            startTime: $("#time-input").val().trim(),
            frequency: $("#increment-input").val().trim(),
            notes: $("#notes-input").val().trim(),
        }
        $.ajax({
            method: "PUT",
            url: "/api/update/" + editId,
            data: newMed
          })
          .then(function(data) {
              window.location.href = "/home";
            });
    });
}

// deleting medications
//-----------------------------------------------------------------------
$(document).on("click", ".btn-outline-danger", function (e) {
    e.preventDefault();
    var deleteId = $(this).data("number");
    $.ajax({
        method: "DELETE",
        url: "/api/all/" + deleteId,
    })
    .then(function() {
        window.location.href = "/home";
    })
        window.location.href = "/home"
});
