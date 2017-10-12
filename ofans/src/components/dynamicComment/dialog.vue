<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/letter'}" tag="span" class="back"></router-link>
			私信对话
			<span class="dialogbtn" @click="btn"></span>
			<div class="empty" v-if="flag">
					<div>
						<img src="../../assets/img/42-43/z1.png" alt=""  class="img1"/>屏蔽此人
					</div>
					<div>
						<img src="../../assets/img/42-43/z2.png" alt="" class="img2"/>清空聊天
					</div>
			</div>
		</div>
		<div class="dialog-cont">
			<div class="dialog-cont-left">
				<img src="../../assets/img/pxh.jpg" />
				<div class="left-content">
					<span>晚上三缺一,你和你媳妇儿快点过来吧!咱们先吃饭,然后搓麻到通宵!</span>
				</div>
			</div>
			<p>1分钟前</p>
			<div style="overflow: hidden;">
				<div class="dialog-cont-right">
					<img src="../../assets/img/pxh.jpg" />
					<div class="right-content">
						<span>收到 ! 必须的 !</span>
					</div>
				</div>
			</div>
			<p>刚刚</p>
		</div>
		<div class="footer">
			<img src=".././../assets/img/42-43/photo-2.png" alt="" />
			<input/>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "dialog",
		data() {
			return {
				flag: 0
			}
		},
		methods: {
			btn() {
				if(this.flag) {
					this.flag = !this.flag
				} else {
					this.flag = !this.flag

				}

			}
		}
	}
</script>

<style lang="less" scopedss>
	.container {
		width: 100%;
		height: 100%;
		background: #fff;
		position: relative;
		.header {
			width: 100%;
			height: 95/100rem;
			background: #a54be8;
			text-align: center;
			line-height: 95/100rem;
			position: relative;
			font-size: 36/100rem;
			color: #fff;
			.back {
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
			.dialogbtn {
				display: inline-block;
				width: 7/100rem;
				height: 39/100rem;
				background: url(../../assets/img/42-43/更多-1.png) no-repeat;
				background-size: 100% 100%;
				position: absolute;
				right: 30/100rem;
				top: 0;
				bottom: 0;
				margin: auto 0;
			}
			.empty {
				width: 100%;
				height: 100/100rem;
				background: rgba(174, 93, 234, .8);
				position: absolute;
				font-size: 32/100rem;
				color: #fff;
				div{
					float: left;
				}
				img{
					width: 36/100rem;
					height: 34/100rem;
					vertical-align: middle;
				}
				.img1{
					margin-left: 92/100rem;
					margin-right: 14/100rem;
				}
				.img2{
					margin-left: 100/100rem;
					margin-right: 14/100rem;
				}
			}
		}
		.dialog-cont-left {
			width: 480/100rem;
			margin-top: 30/100rem;
			margin-left: 20/100rem;
			overflow: hidden;
			img {
				width: 73/100rem;
				height: 73/100rem;
				border-radius: 50%;
				display: inline-block;
				float: left;
			}
			.left-content {
				width: 397/100rem;
				float: right;
				background: url(../../assets/img/42-43/d1.png) no-repeat;
				background-size: 100% 100%;
				font-size: 32/100rem;
				color: #626262;
				padding-left: 30/100rem;
				padding-top: 20/100rem;
				padding-bottom: 20/100rem;
				padding-right: 20/100rem;
				box-sizing: border-box;
			}
		}
		p {
			text-align: center;
			margin-top: 24/100rem;
			font-size: 20/100rem;
			color: #959595;
		}
		.dialog-cont-right {
			width: 370/100rem;
			position: relative;
			height: 70/100rem;
			margin-right: 20/100rem;
			margin-top: 46/100rem;
			float: right;
			img {
				width: 73/100rem;
				height: 73/100rem;
				border-radius: 50%;
				float: right;
			}
			.right-content {
				float: right;
				background: url(../../assets/img/42-43/d2.png) no-repeat;
				background-size: 100% 100%;
				margin-right: 14/100rem;
				height: 70/100rem;
				span {
					display: block;
					padding: 20/100rem;
					font-size: 32/100rem;
					color: #ffff;
					margin-right: 14/100rem;
				}
			}
		}
		.footer{
			width: 100%;
			height: 90/100rem;
			background: url(../../assets/img/42-43/输入底.png) no-repeat;
			background-size: 100% 100%;
			position: absolute;
			bottom: 0;

			img{
				width: 49/100rem;
				height: 40/100rem;
				vertical-align: middle;
				margin-left: 24/100rem;
			}
			input{
				width: 530/100rem;
				height: 64/100rem;
				background:  url(../../assets/img/42-43/输入框.png) no-repeat;
				background-size: 100% 100%;
				border: none;
				outline: none;
				margin-top: 13/100rem;
				margin-left: 22/100rem;
			}
		}
	}
</style>