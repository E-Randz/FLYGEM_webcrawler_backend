const http = require('http');
const PORT = process.env.PORT || 9090

const server = http.createServer((req, res) => {
  const { url, method } = req;
  
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

server.listen(PORT, () => console.log('server listening on port 9090'));