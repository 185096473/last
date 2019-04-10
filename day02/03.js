var http = require("http")
var url = require("url")
http.createServer((req, res) => {
	// resolve  地址解析   目录的解析
	// http://127.0.0.1:3000    string 
	// http://127.0.0.1:3000/node     aaa
	var result=url.resolve("http://127.0.0.1:3000/public/","form.html")
	console.log(result)
	res.end()
}).listen(3000)