/**
 * 判断当前文件夹里面是否包含文件夹？
 * 如果包含文件夹把所有的文件夹输出
 * import和require的区别？
 */
var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
	fs.readdir("./test", (err, data) => {
		   if(i<data.length-1){
			   i++
		   }
			//迭代处理   递归 
			(function item(i) {
				var dir=[]
				//什么时候结束
				if (i == data.length) {
					return
				}
				fs.stat("./test/" + data[i], (err, stats) => {
					if (err) throw err
					if (stats.isDirectory()) {
						dir.push(data[i])
						console.log(dir)
					}
					res.end()

				})
				//自己调用自己
				item(i+1)
				
				
			})(0)
		// for (let i = 0; i < data.length; i++) {
		// 	fs.stat("./test/"+data[i],(err,stats)=>{
		// 		if(err) throw err
		// 		if(stats.isDirectory()){
		// 			console.log(data[i])
		// 			res.end()
		// 		}

		// 	})
		// }
	})

}).listen(3000)

