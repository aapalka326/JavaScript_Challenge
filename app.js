// ASSIGN DATA FROM DATA.JS TO A DESCRIPTIVE VARIABLE
var tableData = data;

//REFERENCED UNIT 14.3 EXERCISE #1-3
//GET A REFERENCE TO THE TABLE
var tbody = d3.select("tbody");

//CONSOLE.LOG DATA FROM DATA.JS
console.log(data);

//LOOP THROUGH DATA AND CONSOLE.LOG EACH UFO SIGHTING ON WEB PAGE (BECAUSE DATA IS AN ARRAY, WE CAN USE FOR EACH)
data.forEach(function(UFOReport) {
    console.log(UFOReport);
});

//USE D3 TO APPEND ONE TABLE ROW FOR EACH UFO SIGHTING
data.forEach(function(UFOReport){
    console.log(UFOReport);
    var row = tbody.append("tr");
});


//USE OBJECT.ENTRIES TO CONSOLE.LOG EACH UFO SIGHTING
data.forEach(function(UFOReport){
    console.log(UFOReport);
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(function([key, value]) {
        console.log(key, value);
    });
});

//USE D3 TO APPEND ONE CELL PER SIGHTING AND TO UPDATE EACH CELL TEXT WITH UFO SIGHTING VALUES
data.forEach(function(UFOReport){
    console.log(UFOReport);
    var row =tbody.append("tr");

    Object.entries(UFOReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value)
    });
});

//REFERENCED UNIT 14.3 ACTIVITY #8-9
//SELECT BUTTON
var submit = d3.select("#filter-btn");

//CREATE EVENT HANDLER TO RUN EVENT
submit.on("click", function() {

//CLEAR CURRENT DATA TABLE
d3.select("tbody").html("");

//PREVENT WEB PAGE REFRESH
d3.event.preventDefault();

//GET PROPERTY VALUE OF INPUT ELEMENT
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

//FILTER UFO SIGHTINGS
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

//DISPLAY FILTERED DATASET 
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});