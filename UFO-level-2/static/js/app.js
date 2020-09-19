// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", runEnter);
// form.on("submit", runEnter);

// function runEnter() {

//   // Prevent the page from refreshing
//   // d3.event.preventDefault();

//     tbody.html("");

//     // Select the input date, state, shape and get the raw HTML nodes
//     var inputElement = d3.select("#input");
//     // Get the value property of the input date, state, shape
//     var inputValue = inputElement.property("value");
//     // console.log input value
//     // console.log(inputValue);
//     // Filter Data with datetime equal to input value
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
//                                                     sighting.city === inputValue ||
//                                                     sighting.state === inputValue ||
//                                                     sighting.country === inputValue ||
//                                                     sighting.shape === inputValue);
//     // console.log filter values
//     console.log(filteredData);


//     filteredData.forEach(function(selections) {

//     console.log(selections);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");
//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(selections).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });
// // // Create event handlers 
// // button.on("click", runEnter);
// // form.on("submit",runEnter);

// // // Complete the event handler function for the form
// // function runEnter() {

// //   // Prevent the page from refreshing
// // d3.event.preventDefault();
// //   // Select the input element and get the raw HTML node
// // var patientInput = d3.select("#patient-form-input");
// //   // Get the value property of the input element
// // var inputValue = patientInput.property("value");
// //   // Use the form input to filter the data by blood type
// // var filteredRecords = data.filter(function(records) {
// //   return records.bloodType === inputValue;

// // });