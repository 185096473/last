var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	//写文件   flag  w  write 写  默认值  r read  读   a  append  追加
	fs.writeFile("./test/2.txt","我是newcontentererere",{"flag":"a"},(err)=>{
		if(err){
			throw err
		}
		console.log("写入成功")
		fs.readFile("./test/2.txt",(err,data)=>{
			if(err){
				throw err
			}
			console.log(data.toString())
			res.end()
		})
	})
}).listen(3000)