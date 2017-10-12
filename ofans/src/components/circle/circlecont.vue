
<template>
	<!--其他用户访问-->
	<div class="circleCont">
		<Simplehead titlename="圈子正文"></Simplehead>
		<div class="circleCont-cont">
			<div class="circleCont-cont-top">
				<span><img src="http://img0.imgtn.bdimg.com/it/u=4240520873,3435824753&fm=27&gp=0.jpg" alt=""  class="portrait"/></span>
				<p class="circleCont-cont-top-face">脑残粉</p>
				<p><span>刚刚</span><span>地点</span></p>
				<p class="zan">
					<img src="../../assets/img/11/zan_btn_normal.png" alt="" class="initial" @click="initial" />
					<img src="../../assets/img/11/zan_btn_selected.png" alt="" class="select" />
					<span>{{ThumbUp}}</span></p>
			</div>
			<div class="circleCont-cont-text">

				<h3>rwyfvuiewdrhe为贵妃出浴企鹅不是都个的私服吃哦但是恶恶法会额外金额华为服务的灰色护卫队承担税费gvds回话呢哦好你额瑞多少和我IU发Vhi人</h3>
				<img src="http://pic1.16pic.com/00/07/53/16pic_753000_b.jpg" alt="" />
				<img src="http://img9.ph.126.net/4eJ3nWM37W6s62LAKw7Kgw==/2798424218475052629.jpg" alt="" />

			</div>
			<div class="sharing">

				<a href="javascript:;">
					<img src="../../assets/img/25/f-2.png" alt="" />
					<span>分享</span>
				</a>

			</div>
		</div>
		<GoodComments titlename="精彩评论"></GoodComments>
		<GoodComments titlename="全部评论"></GoodComments>
		<div class="addinput">
			<textarea class="inputting" placeholder="请输入评论内容">
			
		</textarea>
		<img src="../../assets/img/11/下部-输入icon.png" alt="" />
		</div>
		
	</div>


</template>

<script>
	import Simplehead from './simplehead';
	import GoodComments from './details/goodcomments';
	export default {
		name: 'circleCont',
		data() {
			return {
				ThumbUp: 536

			}
		},
		components: {
			Simplehead,
			GoodComments
		},
		methods: {
			initial() {
				$('.initial').css({
					'display': "none"
				});
				this.ThumbUp++;
				$('.select').css({
					'display': "block"
				});
			},
		}
	}
</script>

<style scoped lang="less">
	.circleCont {
		margin-bottom: 96/100rem;
	}
	
	.circleCont .circleCont-cont {
		margin: 20/100rem;
		border-bottom: 1px solid #d7d2e0;
		position: relative;
	}
	
	.circleCont-cont-top {
		overflow: hidden;
		position: relative;
	}
	
	.circleCont-cont-top>span {
		float: left;
		width: 60/100rem;
		height: 60/100rem;
		border-radius: 30/100rem;
		border: 1px solid gray;
		margin-right: 30/100rem;
		overflow: hidden;
	}
	
	.circleCont-cont-top .portrait {
		width: 100%;
	}
	
	.circleCont-cont-top p {
		font-size: 32/100rem;
	}
	
	.circleCont-cont-top p img {
		vertical-align: middle;
		width: 32px;
		margin: 0 15/100rem;
	}
	
	.circleCont-cont-top>p>span {
		line-height: 50/100rem;
		font-size: 28/100rem;
		margin-right: 30/100rem;
		color: #959595;
	}
	
	.circleCont-cont-top-face {
		color: #b675eb;
	}
	
	.circleCont-cont-top .zan {
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.circleCont-cont-top .zan img {
		position: absolute;
		left: -80/100rem;
		width: 50/100rem;
	}
	
	.circleCont-cont-text {
		margin-left: 94/100rem;
	}
	
	.circleCont-cont-text h3 {
		font-size: 32/100rem;
		margin: 20/100rem 0;
		line-height:40/100rem;
	}
	
	.circleCont-cont-text img {
		width: 150/100rem;
		height: 150/100rem;
		margin-right: 12/100rem;
	}
	
	.select {
		display: none;
	}
	
	.sharing {
		text-align: end;
		padding: 26/100rem;
		color: #b676eb;
	}
	
	.sharing a span {
		font-size: 24/100rem;
	}
	
	.sharing a img {
		vertical-align: bottom;
		height: 35/100rem;
		margin-right: 14/100rem;
	}
	.addinput{
		position:relative;
		margin:20/100rem;
		
	}
	.addinput .inputting{
		width:100%;
		border-radius:5px;
		height:65/100rem;
		border:1px solid #F0F0E;
		resize: none;
		line-height:60/100rem;
		outline: none;
		text-indent: 3em;;
	}
	.addinput img{
		position:absolute;
		width:50/100rem;
		left:20/100rem;
		top:10/100rem;
	}
	
</style>