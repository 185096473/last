var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	// text/html   image  text/css  text/plain 文本  wof  json  xml  script 
	// res.writeHead(200,{"Content-type":"image"})
     if(req.url=="/"){
         fs.readFile("./public/index.html",(err,data)=>{
			 res.end(data)
		 })
	 }else if(req.url=="/green"){
		fs.readFile("./public/about.html",(err,data)=>{
			res.end(data)
		})
		// 路由
	 }else if(req.url=="/aa.css"){
		fs.readFile("./public/aa.css",(err,data)=>{
			res.end(data)
		})
	 }
}).listen(3000)
// express