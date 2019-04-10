var http=require("http")
var url=require("url") //url.js  模块
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// 数据库的字段
	var data={"username":"tom","password":123456}
	//get  query  post
	// var result=url.parse(req.url,true).query
	// body-parser  post
	// console.log(req)
	// console.log(result.password)
	// res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	// if(result.username==data.username&&result.password==data.password){
	// 	res.end("登录成功")
	// }else{
	// 	res.end("登录失败")
	// }
	//用户名  密码  登录成功    失败
	//result.toString（）error:result.toString is not a function
}).listen(3000)