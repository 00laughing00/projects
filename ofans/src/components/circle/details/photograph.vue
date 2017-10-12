<template>
	<!--拍照上传-->
	<div class="photograph">
		<div class="container">
			<img src="../../../assets/img/29-30-34/照片添加-2.png" alt="" @click="btnphoto" id="snap" />
			<video id="video" autoplay></video><br />
			<canvas id="canvas"></canvas>
		</div>
		<div id="addimg">

		</div>

	</div>
</template>

<script>
	export default {
		name: "photograph",
		data() {
			return {
				imgfile: [],
				camera: true
			}
		},
		methods: {
			btnphoto() {

			}
		},
		mounted() {
			var _this = this
			var snap = document.querySelector('#snap')
			var video = document.getElementById("video");
			var canvas = document.getElementById("canvas");
			var addimg = document.getElementById("addimg");
			var ctx = canvas.getContext("2d");
			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
			if(navigator.getUserMedia) {
				navigator.getUserMedia({
						"video": true
					},
					function(stream) {
						if(video.mozSrcObject !== undefined) video.mozSrcObject = stream;
						else video.src = ((window.URL || window.webkitURL || window.mozURL || window.msURL) && window.URL.createObjectURL(stream)) || stream;
						video.play();
					},
					function(error) {
						alert("Video capture error: " + error.code);
					}
				);
			} else {
				alert("Native device media streaming (getUserMedia) not supported in this browser");
			}
			//添加点击事件
			snap.addEventListener('click', function() {
				ctx.drawImage(video, 0, 0, canvas.width = video.videoWidth, canvas.height = video.videoHeight);
				var base64 = canvas.toDataURL('image/jpeg');
				//保存需要上传拍摄图片
				_this.imgfile.push(base64);
				console.log(_this.imgfile);
				
			})
		}
	}
</script>

<style lang="less">
	#video,
	#canvas {
		display: inline-block;
		margin: 1em auto;
		width: 139/100rem;
		height: 139/100rem;
	}
	
	#snap {
		width: 139/100rem;
		height: 139/100rem;
		margin-right: 18/100rem;
	}
	
	#video {
		width: 160/100rem;
		height: 160/100rem;
		margin: 0;
	}
	
	#canvas {}
</style>