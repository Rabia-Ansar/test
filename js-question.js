var i=0;
for(i=0;i/3<=100;i++){
    console.log(i);
}
document.getElementById("demo").innerHTML = i;


function createTable(data) {
    let table = `<table border="1">`;
    for (let row of data) {
      table += `<tr>`;
      for (let cell of row) {
        table += `<td>${cell}</td>`;
      }
      table += `</tr>`;
    }
    table += `</table>`;
    return table;
  }
  
  const data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "New York"],
    ["Bob", 30, "Los Angeles"]
  ];
  
  console.log(createTable(data));
  