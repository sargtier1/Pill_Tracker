$.get('api/all', function(data){
    console.log(data);
    // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass('row');
    wellSection.addClass('col-md-3');
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "med-well-" + i);
    // Append the well to the well section
    $("#med-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    //$("#book-well-" + i).append("<h5>" + (i + 1) + ". " + "</h5>");
    $("#med-well-" + i).append("<h5>Name: " + data[i].drugName + "</h5>");
    $("#med-well-" + i).append("<h5>Start Time: " + data[i].startTime + "</h5>");
    $("#med-well-" + i).append("<h5>Frequency: " + data[i].frequency + "</h5>");
    $("#med-well-" + i).append("<h5>Notes: " + data[i].notes + "</h5>");
  }
    
 })