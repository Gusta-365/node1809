const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

function llamarWpp() {
    var estado = false
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
        //exportar este QR por medio de la Vista
        // revisar la librearias de qr para front
        //asignar el qr de generate... y exportarlo a la vsta
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.initialize();

    client.on('message', message => {
        console.log(message.body);
        estado = true;

    });
}
module.exports=llamarWpp; 