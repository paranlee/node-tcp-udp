/*  
 *  Or use this example tcp client written in node.js.
 *  Originated with example code from
 *  http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.
 */

const net = require('net');
const ip = "::1", port = 8080;

const client = new net.Socket();
client.connect(port, ip, () => {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', data => {
    console.log(`Received: ${data}`);
    client.destroy(); // kill client after server's response
});

client.on('close', () => {
    client.write('Goodbye, server!');
    console.log('Socket is closed !');
});
