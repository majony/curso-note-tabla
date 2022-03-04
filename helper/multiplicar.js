const fs = require('fs');
const colors = require('colors');

/*
const crearArchivo = (base) => {

    const promesa = new Promise((resolve, reject) => {

    

        console.log("=================================");
        console.log(`      Tabla del: ${base}         `);
        console.log("=================================");
        let salida = '';
        for(let x = 1; x <= 10; x++) {
            salida += `${base} x ${x} = ${base * x}\n`;
        }
        console.log(salida);
        try {
            fs.writeFileSync(`tabla-${base}.txt`, salida)    
            resolve(`tabla-${base}.txt`);
        } catch (error) {
            reject('Error al crear el archivo.');
        }
    });
    return promesa;
}
*/

const crearArchivo = async(base, listar, hasta) => {
    try {
        if(listar){
            console.log("=================================".green);
            console.log(`      Tabla del: ${colors.blue(base)}         `.green);
            console.log("=================================".green);
        }
        let salida = '';
        let consola = '';
        for(let x = 1; x <= hasta; x++) {
            salida += `${base} ${'x'.green} ${x} = ${base * x}\n`;
            consola += `${base} x ${x} = ${base * x}\n`;
        }
        if(listar){
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}

// de esta manera se puede utilizar desde afuera, el primer crearArchivo es la variable, el segundo apunta a la funcion, si se llama igual se deja solo un nombre.
module.exports = {
    crearArchivo
}