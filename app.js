

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const { Cipher } = require('crypto');

let FormString = '<form action="#" method="POST">  <textarea name="message" rows="10" cols="30"> </textarea><br> <input type="submit" name="submit" id="submit" value="done"> </form> ';

const server = http.createServer((req, res) => {


if (req.method == 'POST') {
  console.log('post request');
}


  res.statusCode = 200;
  res.write('<html><head></head><body>');
  res.write('<p>Write your HTML content here</p>');
  res.write(FormString);
  res.write(Draw());
  res.end('</body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function Draw() {

    let Config = ReadConfig(); 

    console.log(Config.color); 

    let string = '<p><svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="'+ Config.color + '" stroke-width="4" fill="yellow" /></svg></p>'; 
    return string; 
}

function ReadConfig() {
    let rawdata = fs.readFileSync('input.json');
    return student = JSON.parse(rawdata);        
}