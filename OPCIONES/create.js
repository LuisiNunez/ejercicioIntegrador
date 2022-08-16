const fs = require("fs");

// El ID debe generarlo tu algoritmo y no es un valor que se recibe por comando cuando un usuario busca añadir un libro nuevo. El desafío es poder pensar
// una manera en que tu código genere IDs únicos y no repetidos por sí mismo.
function create(id, title, author, genre, year, cost, price) {
  let data = fs.readFileSync("./baseDeDatos.json", "utf-8");
  let dataParseada = JSON.parse(data);
  dataParseada.push({id, title, author, genre, year, cost, price});
  let guardarData = JSON.stringify(dataParseada);
  fs.writeFileSync("./baseDeDatos.json", guardarData);
}

module.exports = create
