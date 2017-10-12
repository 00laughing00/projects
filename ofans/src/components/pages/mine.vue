<template>
	<div class="mine-container">
		<div class="top-container">
			<div class="mine-top">
				<div class="mine-top-btnCont">
					<router-link tag="a" active-class='active' class="mine-top-btn" :to="{path:'/set'}">
						<img src="../../assets/img/47/profile_set_icon_normal.png" />
					</router-link>
				</div>
				<div class="icon"></div>
				<p class="nickname">不一样的烟火
					<p>
						<p class="userId">ID:03452100</p>
						<p class="signature">
							个人签名：人生何时才是尽头,我的春天在何处,是否还有在我身边...
						</p>
						<div class="bianji">
							<p>
								<img src="../../assets/img/47/profile_erweima_icon.png" />
								<a href="#">我的二维码</a>
							</p>
							
							<router-link tag="p" :to="{path:'/aboutme'}"> <img src="../../assets/img/47/profile_edit_icon.png" />
								<a href="#">编辑资料</a>
						</router-link>
						</div>

			</div>
		</div>
		<!-- 添加照片-->
		<div class="addPicture">
			照片集是空空的,快点儿添加吧^-^
			<a href="#"></a>
		</div>
		<!-- 关于  意见   认证  -->
		<div class="aboutCont">
			<router-link tag="p" :to="{path: '/aboutofan'}">
				<img src="../../assets/img/47/profile_about_icon.png" alt="" />
				<a href="#">关于偶粉</a>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img1"></img>
			</router-link>		
				<router-link tag="p" :to="{path: '/Feedback'}">
					<img src="../../assets/img/47/profile_feedback_icon.png" alt="" />
					<a href="#">意见反馈</a>
					<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img1"></img>
				</router-link>
			<div>
				<p @click="identify">
					<img src="../../assets/img/47/profile_cerify_icon.png" alt="" />
					<a href="javascript:;">我要认证</a>
					<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img1"></img>
				</p>
				<div class="identify-cont">
					<div class="identifyIcon">
						<router-link tag="div" class="div1" :to="{path: '/starIdentify'}" @click="cancel">
							<img src="../../assets/img/48/明星-1.png" alt="" />
							<span>明星认证</span>
						</router-link>

						<div class="div2">
							<img src="../../assets/img/48/制片-1.png" alt="" />
							<span>制片认证</span>
						</div>
					</div>

					<button class="cancel" @click="cancel">
						取消
					</button>
				</div>
			</div>
		</div>

	</div>

</template>
<script src="../../../static/js/jquery-1.12.3.min.js" type="text/javascript" charset="utf-8"></script>
<script>
	import $ from 'jquery'
	export default {
		name: 'mine',
		data() {
			return {
				value: '',
				input: ''
			}
		},
		methods: {
			identify() {
				var $identify = $('.identify-cont');
				$identify.css("display", "block")
			},
			cancel() {
				console.log(this);
				var $identify = $('.identify-cont');
				$identify.css("display", "none")
			}
		}
	}
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	a {
		text-decoration: none;
	}
	
	.mine-container {
		width: 100%;
		height: 100%;
		background: #f2eef9;
	}
	
	.top-container {
		width: 100%;
		height: 50%;
		background: #fff url(../../assets/img/pxh.jpg) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine-container .mine-top {
		width: 100%;
		height: 100%;
		background: rgba(90, 66, 55, .3);
	}
	
	.mine-top-btnCont {
		overflow: hidden;
	}
	
	.mine-top-btnCont .mine-top-btn {
		float: right;
	}
	
	.mine-top-btnCont .mine-top-btn img {
		width: 45/100rem;
		margin-top: 60/100rem;
		margin-right: 50/100rem;
	}
	
	.icon {
		width: 173/100rem;
		height: 173/100rem;
		background: url(../../assets/img/pxh.jpg) no-repeat;
		background-size: 100%;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.nickname {
		text-align: center;
		color: white;
		font-size: 30/100rem;
		margin-top: 5/100rem;
	}
	
	.userId {
		text-align: center;
		font-size: 25/100rem;
		color: #c0bdbb;
		margin: 5/100rem 0;
	}
	
	.signature {
		width: 90%;
		margin: 0 auto;
		font-size: 30/100rem;
		color: #c0bdbb;
	}
	
	.bianji {
		width: 100%;
		height: 100/100rem;
		margin-top: 10/100rem;
		background: rgba(40, 55, 56, .3);
	}
	
	.bianji p {
		width: 49%;
		display: inline-block;
		height: 70/100rem;
		margin-top: 15/100rem;
	}
	
	.bianji p:first-child {
		border-right: 1px solid #6a5945;
	}
	
	.bianji p img {
		width: 45/100rem;
		height: 45/100rem;
		vertical-align: middle;
		margin-left: 60/100rem;
		margin-right: 26/100rem;
	}
	
	.bianji p a {
		color: white;
		font-size: 30/100rem;
		vertical-align: middle;
		line-height: 70/100rem;
	}
	
	.addPicture {
		width: 93%;
		height: 130/100rem;
		background: white;
		margin: 20/100rem;
		line-height: 130/100rem;
		text-indent: 16/100rem;
		font-size: 25/100rem;
		color: #d1cbdc;
	}
	
	.addPicture a {
		display: inline-block;
		width: 100/100rem;
		height: 100/100rem;
		vertical-align: middle;
		background: url(../../assets/img/47/profile_photo_add_normal.png) no-repeat;
		background-size: 100%;
		float: right;
		margin: 15/100rem;
	}
	
	.aboutCont {
		background: white;
		margin-bottom: 15/100rem;
	}
	
	.aboutCont p {
		width: 93%;
		height: 98/100rem;
		margin-left: 50/100rem;
		line-height: 100/100rem;
	}
	
	.aboutCont p:nth-child(2) {
		border-top: 1px solid #d7d2e0;
		border-bottom: 1px solid #d7d2e0;
	}
	
	.aboutCont p img {
		width: 45/100rem;
		height: 45/100rem;
		vertical-align: middle;
		margin-right: 30/100rem;
	}
	
	.aboutCont p a {
		vertical-align: middle;
		color: #1b1b1b;
		font-size: 30/100rem;
	}
	
	.aboutCont p .img1 {
		width: 18/100rem;
		height: 30/100rem;
		float: right;
		margin-right: 30/100rem;
		margin-top: 30/100rem;
	}
	
	.identify-cont {
		width: 90%;
		height: 320/100rem;
		background: #fff;
		position: absolute;
		bottom: 20/100rem;
		left: 30/100rem;
		z-index: 111;
		display: none;
	}
	
	.identifyIcon {
		width: 100%;
		height: 200/100rem;
		background: #f1f1f1;
		margin-bottom: 12/100rem;
		border-radius: 15/100rem;
	}
	
	.identifyIcon .div1,
	.identifyIcon .div2 {
		width: 200/100rem;
		height: 185/100rem;
		display: inline-block;
		margin-top: 20/100rem;
	}
	
	.identifyIcon img {
		display: block;
		width: 114/100rem;
		margin-bottom: 10/100rem;
	}
	
	.identifyIcon .div1 {
		float: left;
		margin-left: 100/100rem;
	}
	
	.identifyIcon .div2 {
		/*margin-left: 110/100rem;*/
		float: right;
	}
	
	.identifyIcon span {
		color: #434343;
		font-size: 30/100rem;
	}
	
	.cancel {
		width: 100%;
		height: 106/100rem;
		background: #f1f1f1;
		border: none;
		outline: none;
		border-radius: 15/100rem;
		color: #ab5ae9;
		font-size: 36/100rem;
	}
</style>