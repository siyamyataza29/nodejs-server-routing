const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('request made')
  let path = 'views/'

  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case ('/'):
      path += 'index.html'
      break;
    case ('/about'):
      path += 'about.html'
      break;
    case ('/contact-me'):
      path += 'contact-me.html'
      break;
    default:
      path += '404.html'
      break;
  }  

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      
      res.end(data)
    }
  })  
});

server.listen(8080, 'localhost', (req, res) => {
  console.log('listening for requests on port 8080')
});

