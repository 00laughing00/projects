<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/mine'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			个人资料
		</div>
		<div class="aboutme-cont">
			<div class="icon">
				头像
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" alt="" class="img2" />
				<img src="../../assets/img/pxh.jpg" alt="" class="img1" />
			</div>
			<router-link :to="{path:'/minenick'}" tag="p" class="nickname">
				昵称

				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" /><span>不一样的烟火</span>
			</router-link>
			<p class=" nickname nickname1">
				偶粉号

				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" /><span>15104595566</span>
			</p>
			<p class="nickname">
				手机号

				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" /> <span>13613652693</span>
			</p>
		</div>

		<div class="sex-cont">
			<p class=" nickname " @click="setsex">
				性别
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" />
				<span>女</span>
			</p>
			<router-link tag="p" :to="{path:'/setarea'}" class="nickname nickname1">
				地区
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" />
				<span>北京 崇文区</span>
			</router-link>

			<router-link tag="p" :to="{path:'/minesign'}" class=" nickname ">
				个性签名
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" />
				<span>人生如寄,感谢给予我一切的人、事、物</span>
			</router-link>
		</div>
		<div class="setsex">
			<div class="upsetsex">
				<div>
					<img src="../../assets/img/66/1-2.png" alt="" class="img1" /> 女神
				</div>
				<div>
					<img src="../../assets/img/66/2-2.png" alt="" class="img2" /> 型男
				</div>
			</div>
			<button @click="btn">取消</button>
		</div>
	</div>
</template>

<script>
	$('.container').click(function(){
		console.log(111)
	})
		
	export default {
		name: "aboutme",
		data() {
			return {

			}
		},
		methods:{
			setsex(){
				$('.setsex').css("display","block")
			},
			btn(){
				$('.setsex').css("display","none")
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100%;
		background: #f2eef9;
		position: relative;
		span {
			color: #707070;
			font-size: 28/100rem;
		}
	}
	
	.header {
		width: 100%;
		height: 95/100rem;
		background: #a54be8;
		text-align: center;
		vertical-align: middle;
		line-height: 95/100rem;
		font-size: 36/100rem;
		color: #fff;
	}
	
	.header a {
		position: absolute;
		left: 40/100rem;
	}
	
	.header img {
		width: 21/100rem;
		height: 37/100rem;
		float: left;
		margin-top: 45/100-37/100/2rem
	}
	
	.aboutme-cont {
		width: 100%;
		height: 450/100rem;
		background: #fff;
		margin-top: 30/100rem;
		border-bottom: 1px solid #d7d2e0;
		border-top: 1px solid #d7d2e0;
		font-size: 30/100rem;
	}
	
	.aboutme-cont .icon {
		width: 90%;
		margin: 0 auto;
		height: 140/100rem;
		border-bottom: 1px solid #d8d3e1;
		line-height: 140/100rem;
		font-size: 36/100rem;
	}
	
	.aboutme-cont .icon img {
		float: right;
	}
	
	.aboutme-cont .icon .img1 {
		width: 80/100rem;
		height: 80/100rem;
		vertical-align: middle;
		margin-right: 30/100rem;
		margin-top: 30/100rem;
	}
	
	.aboutme-cont .icon .img2 {
		width: 17/100rem;
		height: 31/100rem;
		margin-top: 55/100rem;
	}
	
	.nickname {
		width: 90%;
		height: 100/100rem;
		margin: 0 auto;
		line-height: 100/100rem;
		font-size: 36/100rem;
		color: #1b1b1b;
	}
	
	.nickname1 {
		width: 90%;
		height: 100/100rem;
		border-bottom: 1px solid #d8d3e1;
		border-top: 1px solid #d8d3e1;
		margin: 0 auto;
	}
	
	.nickname img {
		width: 18/100rem;
		height: 30/100rem;
		float: right;
		margin-top: 30/100rem;
	}
	
	.nickname span {
		float: right;
		margin-right: 30/100rem;
		color: #707070;
		line-height: 100/100rem;
	}
	
	.sex-cont {
		width: 100%;
		height: 350/100rem;
		background: #fff;
		margin-top: 40/100rem;
		border-bottom: 1px solid #d8d3e1;
		border-top: 1px solid #d8d3e1;
		p:last-child {
			height: 132/100rem;
			line-height: 132/100rem;
			img {
				margin-top: 55/100rem;
			}
			span {
				display: inherit;
				width: 338/100rem;
				font-size: 28/100rem;
				line-height: 40/100rem;
				margin-top: 35/100rem;
			}
		}
	}
	
	.qianming {
		width: 400/100rem;
	}
	
	.setsex {
		width: 100%;
		height: 530/100rem;
		background: url(../../assets/img/12/半透明渐变.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		bottom: 0;
		display: none;
		z-index: 11;
		.upsetsex {
			width: 600/100rem;
			height: 204/100rem;
			background: #fff;
			position: absolute;
			bottom: 120/100rem;
			left: 0;
			right: 0;
			border-radius: 15/100rem;
			margin: 0 auto;
			div {
				display: inline-block;
				width: 49.2%;
				text-align: center;
				font-size: 30/100rem;
				color: #434343;
			}
			img {
				width: 113/100rem;
				height: 113/100rem;
				display: block;
				margin: 24/100rem auto;
			}
		}
		button {
			width: 600/100rem;
			height: 89/100rem;
			background: #fff;
			position: absolute;
			left: 0;
			right: 0;
			border: none;
			outline: none;
			margin: 0 auto;
			border-radius: 15/100rem;
			bottom: 20/100rem;
			font-size: 36/100rem;
			color: #ab5ce9;
		}
	}
</style>