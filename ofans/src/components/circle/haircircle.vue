<template>
	<div class="haircircle">
		<header>
			<router-link :to="{path:'/main/circle'}" class="left">取消</router-link>
			发圈子
			<span class="right">发送</span>
		</header>
		
		<article>
		  <textarea  placeholder="想和大家说(30字以内)....."  onkeyup="this.value=this.value.substring(0, 30)"></textarea>
		  <div class='pictures'>
		  	<img src="../../assets/img/29-30-34/照片添加-1.png" alt=""  @click="addImages" v-if="addpicture==1"/>
		  	<Photograph v-else-if="addpicture==2"/>
		  	<ImageUpload v-else-if="addpicture==3"/>
		  	<div class="prompting" @click="selectWay">
		  		<span>添加本地图片</span>
		  		<span>拍照</span>
		  	</div>
		  </div>
		
			
		</article>
		<footer>
			<a href="javascript:;" class="insertmap">
				<img src="../../assets/img/29-30-34/1-1.png" alt="" />
				插入位置
				<img src="../../assets/img/29-30-34/插入箭头.png" alt=""  class='insertright'/>
			</a>
			
			<a href="javascript:;" class="insertvoice">
				<img src="../../assets/img/29-30-34/2-1.png" alt="" />
				插入语音
			</a>
			</footer>
	</div>
</template>

<script>
	import ImageUpload from './details/imageupload'
	import Photograph from './details/photograph'
	export default{
		name:'HairCircle',
		data(){
			return{
				addpicture:1
			}
		},
		components:{
			ImageUpload,
			Photograph
		},
		methods:{
			addImages(){
				$('.prompting').css({"display":'block'})
				

			},
			selectWay(event){
				$('.prompting').css({"display":'none'})
				if(event.target.innerText=="添加本地图片"){
			     this.addpicture=3;
			     
				}else{
					 this.addpicture=2;
				}
				console.log( this.addpicture)
			},
			cancel(){
                       console.log(111)			}
			
			
		}
	}
</script>

<style scoped lang="less">

.container{
	width: 100%;
	height: 100px;
}

.haircircle header{
	height:95/100rem;
	background:#a54be8;
	color:white;
	position: relative;
	text-align:center;
	line-height:95/100rem;
	font-size:36/100rem;
	
}
.haircircle header .left{
	position:absolute;
    left:0;
    line-height:95/100rem;
    font-size:32/100rem;
    margin-left:32/100rem;
	
}

.haircircle header .right{
	position:absolute;
    right:0;
    line-height:95/100rem;
    color:#fff100;
    font-size:32/100rem;
    margin-right:32/100rem;
}
.haircircle article{
	padding:20/100rem;
	background:white;
}
.haircircle article textarea{
	width:80%;
	border:0;
	height:220/100rem;
	padding:0 20/100rem;
	resize: none;
	font-size:30/100rem;
	outline: none;
	color:#313131;
	
}
.haircircle article .pictures{
	min-height:220/100rem;
	background:white;
	padding:32/100rem 40/100rem;
	margin-bottom:10/100rem;
	position:relative;
	

}
.prompting{
	position:absolute;
	top:10%;
	display:none;
}
.prompting span{
	display:block;
	width:139/100rem;
	margin:15/100rem 0;
	background:gray;
	border-radius:5px;
	color:white;
	text-align:center;
    padding:3px 0;	
}

.haircircle article .pictures img{
		width:139/100rem;
}
footer{
	margin-bottom:40/100rem;
}
footer a{
	display:block;
	margin:20/100rem 40/100rem;
	line-height:80/100rem;
	font-size:26/100rem;
	color:#7b7781;
	position:relative;
	border:1px solid #decbdc;
	border-radius:10/100rem;
}
footer a img{
	vertical-align: middle;
	height:42/100rem;
	margin:18/100rem 24/100rem 18/100rem 20/100rem;
}
footer a .insertright{
	position:absolute;
	right:24/100rem;
	width:24/100rem;
}

</style>