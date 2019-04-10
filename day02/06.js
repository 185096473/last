var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	//    目录的操作
	if(req.url=="/favicon.ico"){
		return
	}
	//创建目录
	// fs.mkdir("./css",(  err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	console.log("创建成功")
	// 	res.end()
	// })
	// 删除目录
	// fs.rmdir("./css",(err)=>{
	// 	if(err) throw err
	// 	console.log("删除成功")
	// 	res.end()
	// })
	//改文件名称
	// fs.rename("./test/1.txt","./test/11.txt",(err)=>{
	// 	if(err) throw err
	// 	console.log("改名成功")
	// 	res.end()
	// })
	//删除文件
	// fs.unlink("./test/2.txt",(err)=>{
	// 	if(err) throw err
	// 	console.log("删除成功")
	// 	res.end()
	// })
	//判断某个文件夹是否存在，如果存在什么都不做，不存在则创建
	// fs.exists("./css",(exists)=>{
	// 	if(exists){
	// 		console.log("该文件已存在")
	// 	}else{
	// 		fs.mkdir("./css",(err)=>{
	// 			if(err) throw err
	// 			res.end()
	// 		})
	// 	}
	// })
	//读取文件夹信息
	// fs.readdir("./test",(err,data)=>{
	// 	if(err) throw err
	// 	console.log(data)
	// 	res.end()
	// })
	//判断是文件还是文件夹   isDirectory() isFile()
	// fs.stat("./test",(err,stats)=>{
    //    if(err){
	// 	   throw err
	//    }else{
	// 	   if(stats.isDirectory()){
	// 		   console.log("是文件夹")
	// 	   }else{
	// 		   console.log("是文件")
	// 	   }
	//    }
	//    res.end()
	// })

}).listen(3000)