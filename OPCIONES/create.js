const fs = require("fs");

function create(id, title, author, genre, year, cost, price) {
  let data = fs.readFileSync("./baseDeDatos.json", "utf-8");
  let dataParseada = JSON.parse(data);
  dataParseada.push({id, title, author, genre, year, cost, price});
  let guardarData = JSON.stringify(dataParseada);
  fs.writeFileSync("./baseDeDatos.json", guardarData);
}

module.exports = create
