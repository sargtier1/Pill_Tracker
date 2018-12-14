// FRONT_END JAVASCRIPT CODE
//==========================
    updating = false;

var paramsString = window.location.search;
var searchParams = new URLSearchParams(paramsString);
var action = searchParams.get("state") 
var editId = searchParams.get('id')

if (action === 'edit') {

    $(document).on("click","#add-script-btn", (e) => {

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
    
            // changes url to take us back home after the post method
            // window.location.href("/home");
    });
}

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

if (!action) {
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

}

$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }
});

$(document).on("click", ".btn-outline-danger", () => {
    var deleteScript = $(this).data("name");
    
    

})

$(document).on("click", ".btn-outline-info", function() {
    var editId = $(this).data("number");
    location.replace('/home/add?state=edit&id=' + editId)
    
})
