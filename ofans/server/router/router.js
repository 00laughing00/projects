//route
var express = require('express');
var route = express.Router();
var http = express();
var data = require('../data/data.js');

/*//数据库
var db = require('../mysql/mysql.js');
db.open();

//加载读取传入值模块post
var bodyParser = require("body-parser");
http.use(bodyParser.json());
http.use(bodyParser.urlencoded({
	extended: false
}));
//把post传过来的值转换成json格式
var querystring = require('querystring');

route.all('*', function(request, response, next) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	response.setHeader("X-Powered-By", ' 3.2.1');
	response.setHeader("Content-Type", "application/json;charset=utf-8");
	response.setHeader("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept")
	next();

}).get('/sel', function(request, response) {

	var select = 'select * from news';

	db.query(select, function(error, result, filed) {
		if(!filed) {
			db.end(); //关闭服务器
		}
		response.send(result)
	})

}).post('/register',function(request,response){
	var post=request.query;
	request.on('data',function(data){
		post=JSON.parse(data.toString());
		//判断账号是否存在
		var username=post.username;
		var selectname="select * from zhanghao where name='"+username+"'"
		console.log(selectname)
		db.query(selectname,function(error, result, filed){
			if(result){	
			}
				response.send(result);	   
		})
		
//		var inser = 'insert into zhanghao(name,password) value("' + post.username + '","' + post. password + '")';
//		db.query(inser, function(error, result, filed) {
//			response.send(result);
//		})
	  })
}).post('/login',function(request,response){
	    var post=request.query;
	     request.on('data',function(data){
		var post=JSON.parse(data.toString());
		var username=post.username;
		var selectname="select * from zhanghao where name='"+username+"'"
		db.query(selectname, function(error, result, filed) {
			
			response.send(result);
		})
	  })
})*/


route.all('*',function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.setHeader("X-Powered-By", ' 3.2.1');
	res.setHeader("Content-Type", "application/json;charset=utf-8");
	res.setHeader("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept")
	next();
})
//获取精彩评论
.get('/comment',function (req,res){
	res.send(data.comment);
})
//获取全部评论
.get('/allcomment',function (req,res){
	res.send(data.allcomment);
})
//获取剧集信息
.get('/selection',function (req,res){
	res.send(data.selection);
})
//获取剧集信息
.get('/trailers',function (req,res){
	res.send(data.trailers);
})

// 导出模块
module.exports = route;