<template>
	<div class="container">
		<div class="header">
			 <router-link :to="{path:'/mine'}"><img src="../../assets/img/4/f-1.png"/></router-link>
			明星认证
		</div>
		<div class="input-cont">
			<input type="" name="" id="" value="请输入您的真实姓名" />
			<input type="" name="" id="" value="请输入联系方式" />
			<span class="span1">必填</span>
			<span class="span2">必填</span>
		</div>
		<div class="upPicture">
			<p>请上传如左图所示的照片</p>
				<div class="leftPicture">
					<img src="../../assets/img/pxh.jpg"/>
				</div>
				<div class="rigthPicture">
					<span>上传照片必填</span>
				</div>	
		</div>
		<div class="hr">
			
		</div>
		<p class="p1">请填写您所参演过的剧/栏目名称及所饰演角色</p>
		<p class="p2">至少添加一项,也可以添加多个</p>
		
		<div class="addInput">
			<input type="text" value="来自房梁的你" class="input1"/>
			<input type="text" value="房梁仙子" class="input2"/>
			<img src="../../assets/img/49-50/j-1.png"/>
		</div>
		<div class="addLanmu">
			<input type="" name="" id="" value="剧/栏目名称" />
			<input type="text"  value="饰演角色"/>
		</div>
		<div class="addOneNew">
			添加一条新的
		</div>
		
		<p class="agree">点击提交表示同意 <a href="#">保密协议</a></p>
		<button class="sunmit">提交</button>
	</div>
</template>

<script>
	export default{
		name:"starIdentify",
		data(){
			return{
				
			}	
		}
	}
	
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.container{
		width: 100%;
		height: 100%;
		background: #f2eef9;
	}
	.header{
		width: 100%;
		height: 95/100rem;
		background: #a54be8;
		text-align: center;
		vertical-align: middle;
		line-height: 95/100rem;
		font-size: 36/100rem;
		color: #fff;
	}
	.header a{
		position: absolute;
		left: 40/100rem;
	}
	.header img{
		width: 21/100rem;
		height: 37/100rem;
		float: left;
		margin-top: 45/100-37/100/2rem

	}
	.input-cont{
		width: 90%;
		/*margin: 20/100rem;*/
		position: relative;
		margin: 20/100rem auto;
	}
	.input-cont input{
		width: 100%;
		height: 60/100rem;
		border: none;
		outline: none;
		border-radius: 15/100rem;
		color: #a9a2b4;
		font-size: 26/100rem;
		text-indent: 20/100rem;
	}
	.input-cont input:nth-child(2){
		margin-top: 20/100rem;
	}
	.input-cont span{
		color: #a54be8;
		font-size: 26/100rem;
		position: absolute;
	}
	.input-cont .span1{
		top:20/100rem;
		right: 26/100rem;
	}
	.input-cont .span2{
		top:65%;
		right: 26/100rem;
	}
	.upPicture{
		width: 90%;
		height: 370/100rem;
		background: #e5e0ed;
		margin: 0 auto;
		overflow: hidden;
	}
	.upPicture p{
		font-size: 28/100rem;
		color: #313131;
		text-indent: 20/100rem;
		margin-top: 20/100rem;
		font-size: 30/100rem;
		height:50/100rem;
		line-height: 50/100rem;
	}
	.upPicture div{
		width: 162/100rem;
		height: 220/100rem;
		margin-top: 26/100rem;
	}
	.leftPicture{
		margin-left: 62/100rem;
		margin-right: 114/100rem;
		background: url(../../assets/img/49-50/照片边框.png);
		float: left;
	}
	.leftPicture img{
		width: 100%;
		height: 100%;
		border: 2px solid #fff;
	}
	.upPicture .rigthPicture{
		float: left;
		background: url(../../assets/img/49-50/s-1.png) no-repeat;
		background-size: 100%;
		text-align: center;	
		height: 222/100rem;
	}
	.rigthPicture span{
		display: block;
		width: 120/100rem;
		margin: 0 auto;
		margin-top: 80%;
		font-size: 28/100rem;
		text-align: center;
		color: #b672ec;
	}
	.hr{
		width: 90%;
		height: 1/100rem;
		margin: 20/100rem auto;
		background: #dedae7;
	}
	.p1,.p2{
		width: 90%;
		margin: 0 auto;
		font-size: 26/100rem;
		color: #313131;
	}
	.p2{
		color: #a54be8;
		margin-bottom: 24/100rem;
		margin-top: 20/100rem;
	}
	.addInput,.addLanmu{
		width: 90%;
		height:70/100rem;
		margin: 0 auto;
	}
	.addInput input{
		border: none;
		outline: none;
		background: transparent;
		border-radius: 15/100rem;
		border: 1px solid #d2ccdd;
		text-indent: 20/100rem;
		color: #313131;
	}
	.addInput .input1{
		width: 50%;
		height: 60/100rem;
	}
	.addInput .input2{
		width: 30%;
		height: 60/100rem;
	}
	.addInput img{
		width: 52/100rem;
		float: right;
		margin-top: 52/100/10rem;
	}
	.addLanmu{
		margin-top: 10/100rem;
	}
	.addLanmu input{
		height: 60/100rem;
		border: none;
		border-radius: 15/100rem;
		outline: none;
		text-indent: 20/100rem;
		border: 1px solid #d2ccdd;
		color: #A9A2B4;
	}
	.addLanmu input:first-child{
		width: 60%;
	}
	.addLanmu input:last-child{
		width: 35%;
	}
	.addOneNew{
		width: 90%;
		height: 60/100rem;
		/*border: 1px dashed #d2ccdd;*/
		margin: 10/100rem auto 15/100rem;
		border-radius: 15/100rem;
		background: url(../../assets/img/49-50/t-1.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
		line-height: 60/100rem;
		font-size: 26/100rem;
		color: #a9a2b4;
		
	}
	.agree{
		width: 100%;
		text-align: center;
		color: #A9A2B4;
		font-size: 26/100rem;
	}
	.agree a{
		color: #A54BE8;
	}
	.sunmit{
		display: block;
		width: 90%;
		height: 60/100rem;
		margin: 20/100rem auto 0;
		border: none;
		outline: none;
		border-radius: 15/100rem;
		background:url(../../assets/img/49-50/按钮-1.png) no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-size: 30/100rem;
		
	}
</style>