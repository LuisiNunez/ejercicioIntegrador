const addTask = require("./OPCIONES/create");
const readTask = require("./OPCIONES/read");
const editTask = require("./OPCIONES/update");
const deleteTask = require("./OPCIONES/delete");

// Falta añadir la opción default dentro del switch para el caso en que no se pase ningún comando o ninguno que fuese válido.
switch (process.argv[2]) {
  case "new": //este es el archivo create u opción CARGA
    addTask(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      process.argv[6],
      process.argv[7],
      process.argv[8],
      process.argv[9]
    );
    break;
  case "read": //esta es la opción LECTURA
    console.log(readTask());
    break;
  case "edit": //este es el archivo update u opción EDITAR
    editTask(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      process.argv[6],
      process.argv[7],
      process.argv[8],
      process.argv[9]
    );
    break;
  case "delete": //esta es la opción BORRADO
    deleteTask(process.argv[3]);
    break;
}
