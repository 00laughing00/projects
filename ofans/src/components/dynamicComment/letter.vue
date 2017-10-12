<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/main/dynamic'}" tag="span"></router-link>
			私信
		</div>
		<router-link :to="{path:'/dialog'}"  tag="div" class="mycomment-cont">
			<img src="../../assets/img/pxh.jpg" alt="" />
			<div class="cont"> 
				<p> <b>来自</b> 为我女神范儿 <span>刚刚</span></p>
				<div class="naocan">
					<span>晚上三缺一,你和你媳妇儿快点儿过来吧!咱们先吃饭,然后搓麻到通宵</span>
					<span class="new"></span>
				</div>
				
			</div>
		</router-link>
		<div class="mycomment-cont">
			<img src="../../assets/img/pxh.jpg" alt="" />
			<div class="cont"> 
				<p> <b>发给</b> 美貌与事业并存<span>4小时前</span></p>
				<div class="naocan">
					<span>今天逛街累不累,亲爱滴~~</span>
					<span></span>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"letter",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped>
.container {
		width: 100%;
		height: 100%;
		.header {
			width: 100%;
			height: 95/100rem;
			background: #a54be8;
			text-align: center;
			line-height: 95/100rem;
			position: relative;
			font-size: 36/100rem;
			color: #fff;
			span {
				display: inline-block;
				width: 21/100rem;
				height: 37/100rem;
				background: url(../../assets/img/4/f-1.png) no-repeat;
				background-size: 100% 100%;
				position: absolute;
				left: 30/100rem;
				top: 0;
				bottom: 0;
				margin: auto 0;
			}
		}
		.mycomment-cont {
			width: 600/100rem;
			height: 244/100rem;
			margin-top: 20/100rem;
			margin-left: 20/100rem;
			margin-bottom: 40/100rem;
			img {
				width: 103/100rem;
				height: 103/100rem;
				border-radius: 50%;
				float: left;
			}
			.cont{
				width: 495/100rem;
				height: 130/100rem;
			
				float: right;
				top: 20/100rem;
				p{
					color: #000;
					font-size: 28/100rem;
					margin-top: 20/100rem;
					margin-left: 22/100rem;
					margin-bottom: 26/100rem;
					span{
						float: right;
						color: #959595;
						font-size: 24/100rem;
						margin-right: 12/100rem;
					}
				}
				.naocan{
					margin-top: 22/100rem;
					width: 500/100rem;
					line-height: 40/100rem;
					padding: 22/100rem 0;
					font-size: 28/100rem;
					border-bottom: 1px solid #d7d2e0;
					position: relative;
					span:first-child{
						color: #313131;
						font-size: 32/100rem;
						padding-bottom: 22/100rem;
						display: inline-block;
						width: 420/100rem;
						line-height: 44/100rem;
					}
					.new{
						display: inline-block;
						width: 34/100rem;
						height: 34/100rem;
						background: url(../../assets/img/39-40-41/n.png) no-repeat;
						background-size:100% 100%;
						position: absolute;
						top: 24/100rem;
						right: 22/100rem;
					}
				}
			}
		}
		
	}


</style>