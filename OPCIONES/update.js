const fs = require("fs");

function editTask(id, title, author, genre, year, cost, price) {
  let data = fs.readFileSync("./baseDeDatos.json", "utf-8");
  let dataParseada = JSON.parse(data);
  for (let i = 0; i < dataParseada.length; i++) {
    if (dataParseada[i].id == id) {
      dataParseada[i].title = title;
      dataParseada[i].author = author;
      dataParseada[i].genre = genre;
      dataParseada[i].year = year;
      dataParseada[i].cost = cost;
      dataParseada[i].price = price;
    }
  }

  let dataModificada = JSON.stringify(dataParseada);
  console.log(dataModificada);
  fs.writeFileSync("./baseDeDatos.json", dataModificada);
}

module.exports = editTask;
