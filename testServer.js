var http=require('http')
http.createServer(
   function (request,response){
      response.writeHead(200,{"content-type":"text/doc"});
      console.log("Server Started Successfully.....");
      response.write("<center><h1>This Is My First Server</h1></center>");
      response.end();
    }
).listen(4675)