const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
})

server.listen(9090, () => console.log('server listening on port 9090'));