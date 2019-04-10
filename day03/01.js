var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	// 路由
    // if(req.url=="/"){
	// 	fs.readFile("./public/index.html",(err,data)=>{
	// 		if(err) throw err
	// 		res.end(data)
	// 	})
	// }else if(req.url=="/about"){
	// 	fs.readFile("./public/about.html",(err,data)=>{
	// 		if(err) throw err
	// 		res.end(data)
	// 	})
	// }else{
	// 	fs.readFile("./public/404.html",(err,data)=>{
	// 		if(err) throw err
	// 		res.end(data)
	// 	})
	// }
	// 优化版
	// switch(req.url){
	//    case "/":
	   
	// }
}).listen(3000)