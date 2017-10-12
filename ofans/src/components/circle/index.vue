<template>
	<div class="circle">
		<CircleHeader @sendtitle="getSondata"></CircleHeader>
		<div class="circle-cont">
			<div class="circle-cont-top">
				<span><img src="http://img0.imgtn.bdimg.com/it/u=4240520873,3435824753&fm=27&gp=0.jpg" alt=""  class="portrait"/></span>
				<p class="circle-cont-top-face">脑残粉</p>
				<p><span>刚刚</span><span>地点</span></p>
				<p class="zan">
					<img src="../../assets/img/11/zan_btn_normal.png" alt="" class="initial" @click="initial" />
					<img src="../../assets/img/11/zan_btn_selected.png" alt="" class="select" />
					<span>506</span></p>
			</div>
			<div class="circle-cont-text">
				<router-link :to="{path:'/main/circle/circlecont'}">
				<h3>rwyfvuiewdrhe为贵妃出浴企鹅不是都个的私服吃哦但是恶恶法会额外金额华为服务的灰色护卫队承担税费gvds回话呢哦好你额瑞多少和我IU发Vhi人</h3>
				<img src="http://pic1.16pic.com/00/07/53/16pic_753000_b.jpg" alt="" />
				<img src="http://img9.ph.126.net/4eJ3nWM37W6s62LAKw7Kgw==/2798424218475052629.jpg" alt="" />
                </router-link>
			</div>
			<div class="com">
				<div class="attitude">
					<a href="javascript:;">
						<img src="../../assets/img/23/t2.png" alt="" />
						<span>回复</span>
					</a>
					<a href="javascript:;">
						<img src="../../assets/img/12/t2.png" alt="" />
						<span>分享</span>
					</a>
					<a href="javascript:;" class="attitude-last">
						<img src="../../assets/img/12/t3.png" alt="" />
					</a>
				</div>

				<div class="commentaries" @click="comment">

					<img alt="" src="../../assets/img/11/more_btn_normal.png" />
				</div>
			</div>
		</div>
		<div class="circle-cont">
			<div class="circle-cont-top">
				<span><img src="http://img0.imgtn.bdimg.com/it/u=4240520873,3435824753&fm=27&gp=0.jpg" alt=""  class="portrait"/></span>
				<p class="circle-cont-top-face">脑残粉</p>
				<p><span>刚刚</span><span>地点</span></p>
				<p class="zan">
					<img src="../../assets/img/11/zan_btn_normal.png" alt="" class="initial" @click="initial" />
					<img src="../../assets/img/11/zan_btn_selected.png" alt="" class="select" />
					<span>{{ThumbUp}}</span></p>
			</div>
			<div class="circle-cont-text">
				<h2>早上好!everybody!</h2>
				<div class="phonetics">
					<div id="listen">
						<img src="../../assets/img/23/play_voice_icon_normal.png" alt="" />
						<span>10″</span>
					</div>
				</div>
				<div class="Spacephotos">
					<img src="http://pic1.16pic.com/00/07/53/16pic_753000_b.jpg" alt="" />
					<img src="http://img9.ph.126.net/4eJ3nWM37W6s62LAKw7Kgw==/2798424218475052629.jpg" alt="" />
					<img src="http://pic1.16pic.com/00/07/53/16pic_753000_b.jpg" alt="" />
				</div>

			</div>
			<div class="com">
				<div class="attitude">
					<a href="javascript:;">
						<img src="../../assets/img/23/t2.png" alt="" />
						<span>回复</span>
					</a>
					<a href="javascript:;">
						<img src="../../assets/img/12/t2.png" alt="" />
						<span>分享</span>
					</a>
					<a href="javascript:;" class="attitude-last">
						<img src="../../assets/img/12/t3.png" alt="" />
					</a>
				</div>

				<div class="commentaries" @click="comment">

					<img alt="" src="../../assets/img/11/more_btn_normal.png" />
				</div>
			</div>

		</div>
		<div class="circle-cont">
			<div class="circle-cont-top">
				<span><img src="http://img0.imgtn.bdimg.com/it/u=4240520873,3435824753&fm=27&gp=0.jpg" alt=""  class="portrait"/></span>
				<p class="circle-cont-top-face">脑残粉</p>
				<p><span>刚刚</span><span>地点</span></p>
				<p class="zan">
					<img src="../../assets/img/11/zan_btn_normal.png" alt="" class="initial" @click="initial" />
					<img src="../../assets/img/11/zan_btn_selected.png" alt="" class="select" />
					<span>506</span></p>
			</div>
			<div class="circle-cont-text">
				<h3>rwyfvuiewdrhe为贵妃出浴企鹅不是都个的私服吃哦但是恶恶法会额外金额华为服务的灰色护卫队承担税费gvds回话呢哦好你额瑞多少和我IU发Vhi人</h3>

			</div>
			<div class="com">

				<div class="attitude">
					<a href="javascript:;">
						<img src="../../assets/img/23/t2.png" alt="" />
						<span>回复</span>
					</a>
					<a href="javascript:;">
						<img src="../../assets/img/12/t2.png" alt="" />
						<span>分享</span>
					</a>
					<a href="javascript:;" class="attitude-last">
						<img src="../../assets/img/12/t3.png" alt="" />
					</a>
				</div>

				<div class="commentaries" @click="comment">

					<img alt="" src="../../assets/img/11/more_btn_normal.png" />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import CircleHeader from "./header"

	export default {
		name: 'circle',
		components: {
			CircleHeader
		},
		data() {
			return {
				ThumbUp: 550

			}
		},

		created() {

			this.$axios({
				method: 'post',
				url: 'http://www.wwtliu.com/sxtstu/news/juhenews.php',
				data: {},
			}, ).then(res => {
				console.log(res)
			})

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
			//获取子页面传入值
			getSondata(data) {
				console.log("加载" + data + '的值')
			},
			//展开评论
			comment(event) {
				var clickimg = event.target.parentNode;
				if(clickimg.className = "commentaries") {
					var attitude = clickimg.previousSibling.previousSibling;
					if(attitude.style.opacity == "0") {
						attitude.style.opacity = "1"
					} else {
						attitude.style.opacity = "0"
					}

				}

			}

		}
	}
</script>

<style  lang="less">
	.circle {
		margin-bottom: 98/100rem;
	}
	
	.circle .circle-cont {
		margin: 20/100rem;
		border-bottom: 1px solid #d7d2e0;
		position: relative;
	}
	
	.circle-cont-top {
		overflow: hidden;
		position: relative;
	}
	
	.circle-cont-top>span {
		float: left;
		width: 60/100rem;
		height: 60/100rem;
		border-radius: 30/100rem;
		border: 1px solid gray;
		margin-right: 30/100rem;
		overflow: hidden;
	}
	
	.circle-cont-top .portrait {
		width: 100%;
	}
	
	.circle-cont-top p {
		font-size: 32/100rem;
	}
	
	.circle-cont-top p img {
		vertical-align: middle;
		width: 32px;
		margin: 0 15/100rem;
	}
	
	.circle-cont-top>p>span {
		line-height: 50/100rem;
		font-size: 28/100rem;
		margin-right: 30/100rem;
		color: #959595;
	}
	
	.circle-cont-top-face {
		color: #b675eb;
	}
	
	.circle-cont-top .zan {
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.circle-cont-top .zan img {
		position: absolute;
		left: -80/100rem;
		width: 50/100rem;
	}
	
	.circle-cont-text {
		margin-left: 94/100rem;
	}
	
	.circle-cont-text .phonetics {
		margin: 18/100rem 0 22/100rem 0;
	}
	
	#listen {
		display: inline-block;
		padding: 12/100rem 24/100rem;
		border-radius: 6/100rem;
		border: 1px solid gray;
		width: 190/100rem;
		overflow: hidden;
	}
	
	#listen img {
		width: 30/100rem;
		height: 30/100rem;
	}
	
	#listen span {
		float: right;
		line-height: 40/100rem;
		font-size: 24/100rem;
	}
	
	.circle-cont-text h2 {
		color: black;
		font-size: 36/100rem;
		font-weight: 500;
	}
	
	.circle-cont-text h3 {
		font-size: 32/100rem;
		margin: 20/100rem 0;
		line-height:40/100rem;
	}
	
	.circle-cont-text img {
		width: 150/100rem;
		height: 150/100rem;
		margin-right: 12/100rem;
	}
	
	.circle-cont-text .Spacephotos {
		margin: 0 2/100rem 22/100rem 0;
		overflow: hidden;
		height: 152/100rem;
	}
	
	.circle-cont-text .Spacephotos img {
		float: left;
		margin-right: 18/100rem;
	}
	
	.com {
		height: 82/100rem;
		position: relative;
	}
	
	.circle-cont .attitude {
		background: #493d52;
		border-radius: 10/100rem;
		display: inline-block;
		padding: 10/100rem;
		height: 61/100rem;
		overflow: hidden;
		opacity: 0;
	}
	
	.circle-cont .attitude a {
		border-radius: 10/100rem;
		float: left;
		padding-right: 10/100rem;
		background: #6c597a;
		font-size: 35/100rem;
		font-family: "微软雅黑";
		font-weight: initial;
		text-align: center;
		color: #FFF;
		padding: 10/100rem 25/100rem;
		margin-right: 10/100rem;
	}
	
	.circle-cont .attitude a img {
		vertical-align: middle;
		width: 40/100rem;
	}
	
	.circle-cont .attitude .attitude-last {
		margin: 0;
	}
	
	.circle-cont .attitude-last img {
		width: 40/100rem;
		height: 40/100rem;
	}
	
	.commentaries {
		position: absolute;
		bottom: 10/100rem;
		right: 10/100rem;
	}
	
	.commentaries img {
		height: 60/100rem;
		width: 100/100rem;
	}
	
	.select {
		display: none;
	}
	
	.bottom {
		height: 60/100rem;
	}
	
	.bottom img {
		float: right;
		height: 60/100rem;
		width: 100/100rem;
	}
</style>