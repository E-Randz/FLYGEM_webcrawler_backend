const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method, body } = req;
  
  if (method === 'POST') {
    let body = ''
    if(/\/api\/webcrawler/.test(url)){
      req.on('data', chunk => {
        body += chunk.toString()
      })
      req.on('end', () => {
        res.end('ok');
      })
    }
  }
})

server.listen(9090, () => console.log('server listening on port 9090'));