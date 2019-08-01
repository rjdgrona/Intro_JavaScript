// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//functino build table
function buildTable(data) {
  // clear everything on the table
  tbody.html("");
  
  //loop through the data
  data.forEach((entries) => {
    //create row for each siting 
    var row_siting = tbody.append("tr");
    //loop through each siting to get data and append to the row
    Object.values(entries).forEach((value)=> {
          //append table data in each row
          var val = row_siting.append("td");
          val.text(value);
      });
    });
}

// Event that call a function 
function handleClick() {
    // Prevent from refreshing page
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
      filteredData = filteredData.filter(row_siting => row_siting.datetime === date);
    }
    buildTable(filteredData);
  }
  d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
