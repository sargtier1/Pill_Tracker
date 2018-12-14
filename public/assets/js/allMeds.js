$.get('api/all', function(data){
  console.log(data)
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

    // button variables
    var editBtn = "<button id='edit-btn'" + "data-Number='" + data[i].id + "'" + "class='btn btn-outline-info'>" + "Edit" + "</button>"
    var deleteBtn = "<button id='delete-btn' class='btn btn-outline-danger float-right'>" + "Delete" + "</button>"

    if (data[i].frequency === 12) {
      $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
      "\n<div> First Pill: " + data[i].startTime + "</div>" + "<br>");
      // edit button
      $("#med-well-" + i).append(editBtn);
      // $("#edit-btn").attr("data-id", data[i].id);
      // delete button
      $("#med-well-" + i).append(deleteBtn + "\n<hr>");  
      $("#delete-btn").attr("data-id", data[i].id); 

    }
    if (data[i].frequency === 8) {
      var newTime = parseInt(data[i].startTime) + 8;
      console.log(newTime);
      $("#med-well-" + i).append("<div> Name: " + data[i].drugName +
        "\n<div>First Pill: " + data[i].startTime  +
        "\n<div>Next Pill: " + moment(newTime).format('h:mm a') + "</div>" + "<br>");
      // edit button
      $("#med-well-" + i).append(editBtn);
      // $("#edit-btn").attr("data-id", data[i].id);
      // delete button
      $("#med-well-" + i).append(deleteBtn + "\n<hr>"); 
      $("#delete-btn").attr("data-id", data[i].id); 
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
      // $("#edit-btn").attr("data-id", data[i].id);

      // delete button
      $("#med-well-" + i).append(deleteBtn + "\n<hr>"); 
      $("#delete-btn").attr("data-id", data[i].id); 
    }
  }  
 });

