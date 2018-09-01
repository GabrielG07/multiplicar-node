// Requireds
const fs = require('fs');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${ base } o el valor ${ limite } no son un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }-al-${ limite }.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${ base } o el valor ${ limite } no son un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}