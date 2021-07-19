const udp = require('dgram');
const server = udp.createSocket('udp4');
const port = 8081;

server.on('error', err => {
    console.log(`Error: ${err}`);
    server.close();
});

// emits on new datagram msg
server.on('message', (msg, info) => {
    console.log(`Data received from client : ${msg.toString()}`);
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);

    server.send(msg, info.port,'localhost', error => {
        if (error) {
            client.close();
        } else {
            console.log('Data sent !!!');
        }
    });
});

//emits when socket is ready and listening for datagram msgs
server.on('listening', () => {
    const address = server.address();
    const port = address.port;
    const family = address.family;
    const ip = address.address;
    console.log(`Server is listening at port ${port}`);
    console.log(`Server ip : ${ip}`);
    console.log(`Server is IP4/IP6 : ${family}`);
});

//emits after the socket is closed using socket.close();
server.on('close', () => console.log('Socket is closed !'));

server.bind(port);

/**
 * Test with netcat UDP Client
 * $ nc -u localhost 8081
 */
