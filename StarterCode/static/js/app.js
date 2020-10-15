// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");
data.forEach((tableData) => {
    let row = tbody.append("tr");
    Object.values(tableData).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
  
