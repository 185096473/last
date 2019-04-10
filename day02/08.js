//module.exports   exports  暴露   抛出
//module.exports和exports的区别？
/**
 * 默认指向的都是空对象
 * module.exports是exports的引用
 * 
 */
// module  模块
// var a=1
// {}
// exports.a=1
// {a:1}
// module.exports={
// 	a:1
// }
// {a:1}
//错误执行---------------------------------------------
// 抛出  供外部使用
// module.exports=function show(){
// 	console.log(1)
// }
// exports={
// 	show:function(){
// 		console.log(1)
// 	}
// }
// module.exports={
// 	show:function(){
// 		console.log(1)
// 	}
// }
exports.show=function(){
	console.log(1)
}

