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
  


    if (data[i].frequency === 12) {
      $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
      "\n<div> First Pill: " + data[i].startTime + "</div" + "<hr>");
    }
    if (data[i].frequency === 8) {
      console.log(parseInt(data[i].startTime));
      var newTime = parseInt(data[i].startTime) + 8;
      console.log(newTime);
      $("#med-well-" + i).append("<div> Name: " + data[i].drugName +
        "\n<div>First Pill: " + data[i].startTime  +
        "\n<div>Next Pill: " + newTime + "</div>" + "<hr>");
  
    }
    if (data[i].frequency === 4) {
      var newTime2 = parseInt(data[i].startTime) + 4;
      var newTime3 = newTime2 + 4;

      $("#med-well-" + i).append("<div> Name: " + data[i].drugName + 
        "\n<div> First Pill: " + data[i].startTime + 
        "\n<div> Next Pill: " + newTime2 +
        "\n<div> Next Pill: " + newTime3 + "</div>" + "<hr>");
    }
  }  
 });