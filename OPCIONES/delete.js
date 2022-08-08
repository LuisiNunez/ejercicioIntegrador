const fs = require('fs')

function deleteTask(id) {
    let data = fs.readFileSync('./baseDeDatos.json', 'utf-8')
    let dataParseada = JSON.parse(data)
    for (let i = 0; i < dataParseada.length; i++) {
        if (dataParseada[i].id == id)
        dataParseada.splice(i,1) //el 1 es la cantidad de componentes que queremos borrar
    }
    let dataBorrada = JSON.stringify(dataParseada)
    fs.writeFileSync('./baseDeDatos.json', dataBorrada)
    }

module.exports = deleteTask