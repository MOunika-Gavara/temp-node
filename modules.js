const name = require('./names')
const sayHi = require('./utils')

const diff = require('./alternativeSyntax')

require("./noExport")
sayHi('Mounika')
sayHi(name.name1)
console.log(diff)