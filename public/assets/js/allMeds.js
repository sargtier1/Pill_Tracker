$.get('api/all', function(data){
    console.log(data);
    // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {

    // Create container for all scripts
    var wellContainer = $("<div>");
        wellContainer.addClass("container");

    // Creates row
    var wellRow = $("<div>");
        wellRow.addClass("row")

    var wellCol = $("<div>")
        wellCol.addClass("col-8 offset-2");

    var preCards = $("<div>");
        preCards.addClass("card met-4");

    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("card-body");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "med-well-" + i);
    // Append the well to the well section
    $("#med-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    //$("#book-well-" + i).append("<h5>" + (i + 1) + ". " + "</h5>");
  
    if (data[i].frequency === 12) {
      $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
      "\n<div> First Pill: " + data[i].startTime + "</div>" + "<br>");

      // edit button
      $("#med-well-" + i).append("<button id='edit-btn' class='btn btn-outline-info'>" + "Edit" + "</button>"); 
      // delete button
      $("#med-well-" + i).append("<button id='edit-btn' class='btn btn-outline-danger float-right'>" + "Delete" + "</button>" +
      "\n<hr>");  
    }

    if (data[i].frequency === 8) {
      console.log(parseInt(data[i].startTime));
      var newTime = parseInt(data[i].startTime) + 8;
      console.log(newTime);
      $("#med-well-" + i).append("<div> Name: " + data[i].drugName +
        "\n<div>First Pill: " + data[i].startTime  +
        "\n<div>Next Pill: " + newTime + "</div>" + "<br>");

      // edit button
      $("#med-well-" + i).append("<button id='edit-btn' class='btn btn-outline-info'>" + "Edit" + "</button>"); 
      // delete button
      $("#med-well-" + i).append("<button id='edit-btn' class='btn btn-outline-danger float-right'>" + "Delete" + "</button>" +
      "\n<hr>");  
    }
    if (data[i].frequency === 4) {
      var newTime2 = parseInt(data[i].startTime) + 4;
      var newTime3 = newTime2 + 4;

      $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
        "\n<div> First Pill: " + data[i].startTime + 
        "\n<div> Next Pill: " + newTime2 +
        "\n<div> Next Pill: " + newTime3 + "</div>" + "<br>");

      // edit button
      $("#med-well-" + i).append("<button id='edit-btn' class='btn btn-outline-info'>" + "Edit" + "</button>"); 
      // delete button
      $("#med-well-" + i).append("<button id='edit-btn' class='btn btn-outline-danger float-right'>" + "Delete" + "</button>" +
      "\n<hr>");  
    }
  }  
 });