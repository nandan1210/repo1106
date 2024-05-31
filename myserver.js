var http=require('http')
var fs=require('fs')
http.createServer(
  function(req,res){
    fs.readFile('file121.html',
      function (err,data){
         if(err){
         res.writeHead(404,"{'content-type':'text/html'}");
         res.write("<h1>Your File Is Not Available...<h1>");
         res.end();
          }
         else{ 
         res.writeHead(200,"{'content-type':'text/html'}")
         res.write(data)
         res.end()
          }
       }
    )    
  }
).listen(7869)