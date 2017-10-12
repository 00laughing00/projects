<template>
	<div class="ImageUpload">
		
		<router-link :to="{path:'/main/circle/reviewimages'}">
		<div class="previewimage">
			
		</div>
		</router-link>
        <div class="upimg">
		<img src="../../../assets/img/29-30-34/添加-2.png" alt="imgfile" />
		<input type="file" @change="changeimg" />
	    </div>
		
	</div>
</template>

<script>
	export default {
		name: "ImageUpload",
		data() {
			return {
				imgfile:[]
			}
		},
		methods: {
			changeimg(event) {
				 var store=this.$store
				 var _this=this;
			
				//2. 通过files属性可以获取到上传的文件列表  数组集合格式
				var files = event.currentTarget.files;
				//3. 获取第一个文件 （目前并不支持同时选择多文件）
				var file = files[0];
               
				//4. 实例化文件读取对象

				var reader = new FileReader(file);
				//5. 绑定事件

				reader.onloadstart = function() {

					console.log('读取前。。。')

				}

				reader.onloadend = function() {

					console.log('读取完成无论成功于否')

				}

				reader.onload = function(e) {

					console.log('读取完成 ')

					// 通过对象的result属性  可以获取读取到的数据
                    //	console.log(e.target.result)
					//如果读取的是图片则直接可以在img上显示
					var previewimage=document.querySelector('.previewimage')
					previewimage.innerHTML ='<img src='+reader.result+'>'+previewimage.innerHTML;
                    _this.imgfile.push(reader);
                    
                  
                    //把添加的图片预览放到到全局
                    store.dispatch('replaceimgfiles', _this.imgfile)
                 
				}

				reader.onabort = function() {

					console.log('读取被中止')

				}

				reader.onerror = function() {

					console.log('读取异常')

				}

				reader.onprogress = function() {

					console.log('周期性调用')
				}

				//6.以数据形式读取
				reader.readAsDataURL(file);

			}
		},
		created(){
			console.log(this.$store.getters.previewpicture)
		},
		computed:{
			showPicture(){
				
			}
		}

	}
</script>

<style  lang='less'>
	.ImageUpload{
		overflow: hidden;
	}
	.upimg {
		position: relative;
		
	}
	
	.upimg img {
		width: 139/100rem;
	}
	
	.upimg input {
		display: block;
		width: 139/100rem;
		height: 139/100rem;
		position: absolute;
		top: 0;
		opacity: 0;
		left: 0;
	}
	.ImageUpload>div{
		display:inline-block;
	}
	.previewimage{
		display:inline-block;

	}
    .previewimage img{
		width: 139/100rem;
		height: 139/100rem;
		margin-right:18/100rem;
		
	}
</style>