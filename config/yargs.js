const argv = require('yargs')
    .option('b', {
        alias: 'base', 
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 12,
        describe: 'Rango hasta donde se va multiplicar'
    })
    .check( (argv) => {
        if (isNaN(argv.base)) {
            throw 'Base is not a number';
        }
        if(argv.h <= 0){
            throw 'Este rango debe ser mayor a 0'
        }
        return true; //si no hay error.
    })
    .argv;

module.exports = argv