var express    = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()

app.use( bodyParser.urlencoded() );
app.get('/', function(request, response) {
  console.log('GET /')
  var html = `
    <html>
        <body>
        <form action="#" method="POST">          
        <textarea id="message" name="message" rows="10" cols="30"> </textarea><br> <input type="submit" name="submit" id="submit" value="done"> </form> 
        </body>
    </html>`
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(html)
})

app.post('/', function(request, response) {
  console.log('POST /')
  console.log(request.body['message']);      
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('thanks')
})

const port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
