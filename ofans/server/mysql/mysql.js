 var mysql = require('mysql');
 var config = require('./db/db.config.js');
 //加载数据库模块
module.exports ={//回调模块
   db:'',
   open:function(){
   this.db = mysql.createConnection(config);
   this.db.connect();
   },
  
   query:function(sql,callback,autoClose){		
		this.db.query(sql,callback);
		
//		if(!autoClose)this.close();
		
	}

}
