<template>
	<div class="container">
		<div class="mycomment-cont">
			<img src="../../../assets/img/pxh.jpg" alt="" />
			<div class="cont"> 
				<p>为我女神范儿 <span>2014/03/22</span></p>
				<p class="reply">我还不错最近!</p>
				<div class="naocan">
					<span>脑残粉：</span>
					<span>妹儿,最近怎么样啊？哪天来找我吧!</span>
				</div>
			</div>
		</div>
		<div class="mycomment-cont">
			<img src="../../../assets/img/pxh.jpg" alt="" />
			<div class="cont"> 
				<p>为我女神范儿 <span>2014/03/22</span></p>
				<p class="reply">我还不错最近!</p>
				<div class="naocan">
					<span>脑残粉：</span>
					<span>妹儿,最近怎么样啊？哪天来找我吧!</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "mycomment",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100%;
		overflow: hidden;
		.mycomment-cont {
			width: 600/100rem;
			height: 244/100rem;
			margin: 20/100rem;
			img {
				width: 103/100rem;
				height: 103/100rem;
				border-radius: 50%;
				float: left;
			}
			.cont{
				width: 495/100rem;
				height: 130/100rem;
				background: url(../../../assets/img/37/内容框.png) no-repeat;
				background-size: 100% 100%;
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
				.reply{
					font-size: 31/100rem;
					color: #535353;
					margin-left: 22/100rem;
				}
				.naocan{
					margin-top: 22/100rem;
					width: 500/100rem;
					height: 70/100rem;
					line-height: 40/100rem;
					padding: 22/100rem 0;
					font-size: 28/100rem;
					border-bottom: 1px solid #d7d2e0;
					span:nth-child(1){
						color: #b676eb;
					}
					span:nth-child(2){
						color: #313131;
					}
				}
			}
		}
	}
</style>