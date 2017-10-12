<template>
	<div class="Reviewimages">
		<header>
			<div @click="toback" class="left"><img src="../../assets/img/4/f-1.png" alt="" /></div>
			{{i+1}}/{{number}}
			<span class="right"><img src="../../assets/img/35/s-1.png" alt="" /></span>
		</header>
		
		<article>
			<img :src='showPicture' alt=""  class="cont"/>
		</article>
	</div>
	
</template>

<script>
	export default {
		name:'Reviewimages',
		data(){
			return{
				i:0,
				number:2,
				imgfile:[]
			}
		},
		methods:{
		
	     toback(){
	     	window.history.back();
	     	  
	     }
		},
		created(){
			console.log(this.$store.getters.previewpicture)
		},
		mounted(){
			var _this=this
			var article=document.querySelector('article');
			var startX;
			var endX;
			article.addEventListener("touchstart",function(){
				startX=event.touches[0].pageX;
			})
			article.addEventListener("touchend",function(){
				endX=event.changedTouches[0].pageX;
				if(endX-startX>5){
					console.log(_this.i)
					if(_this.i>0){
						_this.i=_this.i-1
					}
					
					
					
				}else{
					if(_this.i<_this.number-1){
						_this.i=_this.i+1
					}
					
					
				}
				
			})
			
		},
		
		computed:{
			showPicture(){
				var file=this.$store.getters.previewpicture;
				this.imgfile=file;
				this.number=file.length;
				
				//1. 获取第一个文件 （目前并不支持同时选择多文件）
				file =this.imgfile[this.i];
				if(file){
				return file.result;
				}
			   else{
			       alert('没有图片')
			   }

			   }
	     }
	     
		
	}
</script>

<style scoped lang="less">
.Reviewimages{
	height:100%;
}	
.Reviewimages header{
	height:95/100rem;
	background:#a54be8;
	color:white;
	position: relative;
	text-align:center;
	line-height:95/100rem;
	font-size:36/100rem;
	
}
.Reviewimages header img{
	width:21/100rem;
	height:37/100rem;
}
.Reviewimages header .left{
	position:absolute;
    left:0;
    top:16%;
    line-height:95/100rem;
    font-size:32/100rem;
    margin-left:32/100rem;
	
}

.Reviewimages header .right{
	position:absolute;
    right:0;
     top:16%;
    line-height:95/100rem;
    color:#fff100;
    font-size:32/100rem;
    margin-right:40/100rem;
}
.Reviewimages header .right img{
	width:35/100rem; height:43/100rem;
}
.Reviewimages article{
	height:100%;
	background:gray;
}
.Reviewimages article img{
	width:100%;
	height:1000/100rem;
}
</style>