var http = require("http")
var url = require("url")
http.createServer((req, res) => {
	//foramt  格式化  序列化
	var result = url.format({
		host:"http://localhost:3000",
		search: "?name=ee",
		query: { "name": "tom", "age": 12 },
		// pathname: '/favicon.ico',
		// path: 'http://localhost:3000',
		// href: 'http://localhost:3000'
	})
	// var data = url.parse(req.url)
	// console.log(data)
	console.log(result)
	res.end()
}).listen(3000)