<template>
	<div class="import-page">
		<div class='img-top'><img src="../assets/img/0/welcome_logo.png" alt="" /></div>
		<div class='img-bottom'><img src="../assets/img/0/welcome_logo2.png" alt="" /></div>
		<div class="copy">版权所有 北京科技娱乐开发公司</div>
	</div>
</template>

<script>
export default {
  name: 'index',
  data(){
  	return{
  		
  	}
  },
  created(){
  	setTimeout(function (){
		window.location.href = "http://localhost:8080/#/main/";
  	},2000)
  },
  methods:{
  	
  }
}	
</script>

<style lang="less" scoped>
.import-page{
	padding-left:60/100rem;
	height:100%;
	background:url('../assets/img/0/welcome_bg.png');
	background-size:100%;
}
.img-top img{
	margin-top:110/100rem;
	width:230/100rem;
	margin-left:-20/100rem;
	margin-bottom:50/100rem;
}
.img-bottom img{
	width:230/100rem;
}
.copy{
	position:absolute;
	bottom:50/100rem;
	font-size:24/100rem;
	color:#4d206c;
}
</style>