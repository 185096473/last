/**
 * EventEmitter
 * on
 * addListener
 * 
 */

/**
 * 明天讲解的作用：  
 * events
 * git
 *     github 注册一个账号
 *    下载 sourcetree  git可视化工具
 * npm
 * Buffer
 */
/***
 * 作业：
 * 大1.利用fs去实现页面的加载 *
 *   req.url=="/"   index.html
 *          =="/about"  about.html
 *          匹配不到     404.html
 *  1.1利用module.exports和exports结合实现大1的功能   ***
 *   home.js
 *   不引入http
 *   module.exports=function home(req,res){
 *      res.end("index页面")
 *   }
 *   about.js
 *   
 *   404.js 
 *   index.js  实现页面的切换
 * 
 * http.createServer((req,res)={})
 * 
 *  1.1.1   ** 
 *    新建一个red.html和green.html
 *    通过req.url去实现页面的切换
 *    在red加载aa.css
 *    <link rel="stylesheet" href="aa.css"/>
 *    和一张图片  <img src=""/>
 */
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/zi"){
        fs.readFile("",(err,data)=>{
			res.end(data)
		})
	}
})