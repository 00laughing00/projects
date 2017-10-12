var htp=require('express')();

var querystring = require('querystring');
/*var bodyParser = require("body-parser"); 
htp.use(bodyParser.urlencoded({ extended: false }));
*/

htp.post('/',function(req,rep){
	rep.setHeader('Access-Control-Allow-Origin','*');
	//query方法获取post传过来的值);
	var post=req.query;
	
	
	// request.on('data') data事件用于接收post数据
	req.on('data',function(data){
		
		// 通过querystring的parse方法将a=b&c=d格式的数据解析成json对象
		var post=querystring.parse(data.toString());
		console.log(post)
		
		var html = '<h3>当前的post参数如下：</h3>';
	
		for(var i in post){
			
			html+=i+':'+post[i]+'<br>';
			
		}
		
	   rep.send(post);
	  })
});
htp.listen('3000',function(){
	console.log('服务器开启成功');
});
