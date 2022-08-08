const fs = require('fs')

module.exports = () => {
    return JSON.parse(fs.readFileSync('./baseDeDatos.json', 'utf-8'))
}