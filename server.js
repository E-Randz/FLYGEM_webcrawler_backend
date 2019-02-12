const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  
  if (method === 'POST') {
    if(/\/api\/webcrawler/.test(url))
  }
})

server.listen(9090, () => console.log('server listening on port 9090'));