const udp = require('dgram');
const client = udp.createSocket('udp4');
const port = 8081;

// const buffer = require('buffer');

// buffer msg
const data = Buffer.from('siddheshrane');

client.on('message', (msg, info) => {
    console.log(`Data received from server : ${msg.toString()}`);
    console.log(`Received ${msg.length} bytes from ${info.address} : ${info.port}\n`);
});

//sending msg
client.send(data, port, 'localhost', err => {
    if (err){
        client.close();
    } else {
        console.log('Data sent !!!');
    }
});

const data1 = Buffer.from('hello');
const data2 = Buffer.from('world');

//sending multiple msg
client.send([data1, data2], port, 'localhost', err => {
    if (err) {
        client.close();
    } else {
        console.log('Data sent !!!');
    }
});
