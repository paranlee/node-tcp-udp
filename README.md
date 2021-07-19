# TCP echo server

Run node TCP echo server.

```bash
$ node tcp-server.js
```

You can use netcat as TCP client.

```bash
$ nc localhost 8080
```

Or use client node program.

```bash
$ node tcp-client.js
```

# UDP echo server

Run node UDP echo server.

```bash
$ node udp-server.js
```

You can use netcat as UDP client.

```bash
$ nc -u localhost 8081
```

Or use client node program.

```bash
$ node tcp-client.js
```

# Reference

1. [Node.js TCP client and server example](https://gist.github.com/tedmiston/5935757)
2. [Simple UDP Client and Server in Node.js](https://gist.github.com/tedmiston/5935757)
