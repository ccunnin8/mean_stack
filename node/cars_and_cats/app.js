var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
  if (req.url === "/cars"){
    fs.readFile("./views/cars.html","utf-8",(errors,content)=>{
      res.writeHead(200,{"Content-type": "text/html"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/cats") {
    fs.readFile("./views/cats.html","utf-8",(errors,content)=>{
      res.writeHead(200,{"Content-type": "text/html"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/new") {
    fs.readFile("./views/new.html","utf-8",(errors,content)=>{
      res.writeHead(200,{"Content-type": "text/html"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/stylesheets/style.css") {
    fs.readFile("./stylesheets/style.css","utf-8",(errors,content)=>{
      res.writeHead(200,{"Content-type": "text/css"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/images/car1.jpg") {
    fs.readFile("./images/car1.jpg",(errors,content)=>{
      res.writeHead(200,{"Content-type": "image/jpg"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/images/car2.jpg") {
    fs.readFile("./images/car2.jpeg",(errors,content)=>{
      res.writeHead(200,{"Content-type": "image/jpg"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/images/car3.jpg"){
    fs.readFile("./images/car3.jpeg",(errors,content)=>{
      res.writeHead(200,{"Content-type": "image/jpg"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/images/cat1.jpg"){
    fs.readFile("./images/cat1.jpeg",(errors,content)=>{
      res.writeHead(200,{"Content-type": "image/jpg"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/images/cat2.jpg"){
    fs.readFile("./images/cat2.jpeg",(errors,content)=>{
      res.writeHead(200,{"Content-type": "image/jpg"});
      res.write(content);
      res.end();
    });
  }
  else if (req.url === "/images/cat3.jpg"){
    fs.readFile("./images/cat3.jpeg",(errors,content)=>{
      res.writeHead(200,{"Content-Type": "image/jpg"});
      res.write(content);
      res.end();
    });
  }
  else {
    res.writeHead(404);
    res.end('File not found!!!');
}
});


server.listen(9000);
