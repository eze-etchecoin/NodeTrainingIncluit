const fs = require('fs');

const readTransactionsFileToString = new Promise((resolve, reject) => {
    fs.readFile('transactions.txt', (err, data) => {
        if(err) reject(err);

        resolve(data.toString());
    })
})

const getStringTransaccionesNoExitosas = (stringTransacciones) => {

    let transacciones = stringTransacciones.split('\r\n');

    if(transacciones.length <= 1) return 'Sin transacciones para mostrar';

    transacciones = transacciones.splice(1);

    let result = [];
    for(let transaccion of transacciones){
        let componentesTransaccion = transaccion.split(':');

        switch(componentesTransaccion[3].toLowerCase()){
            case "rj":
                result.push(`${componentesTransaccion[0]} (rechazada)`);
                break;
            case "cd":
                result.push(`${componentesTransaccion[0]} (cancelada)`);
                break;
            default:
                break;
        }
    }

    if(result.length === 0) return 'Sin transacciones no exitosas para mostrar';

    return result.join('\n');
}

const listarTransaccionesNoExitosas = () => {

    let transaccionesString = '';

    readTransactionsFileToString
        .then((data) => { transaccionesString = data })
        .catch((err) => console.log(err))
        .finally(() => console.log(getStringTransaccionesNoExitosas(transaccionesString)));
}

listarTransaccionesNoExitosas();