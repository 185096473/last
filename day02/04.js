var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	//readfile  读文件    路径  编码格式  回调函数
    fs.readFile("./test/1.txt","utf-8",(err,data)=>{
		if(err){
			throw err
		}
		console.log(data.toString())
		res.end(data)
	})
}).listen(3000)