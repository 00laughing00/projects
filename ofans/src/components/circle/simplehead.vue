<template>
	<!--简单换名头部-->
	<div class="SimpleHead">
		<header>
			<router-link :to="{path:'/main/circle'}"><img src="../../assets/img/4/f-1.png" alt="" /></router-link>
			
			{{titlename}}
			
		</header>
	</div>
</template>

<script>
	export default{
		name:'SimpleHead',
		data(){
			return{
				
			}
		},
		props:{
			titlename:String
			
		}
	}
</script>

<style scoped lang="less">
.SimpleHead header{
	height:95/100rem;
	background:#a54be8;
	color:white;
	position: relative;
	text-align:center;
	line-height:95/100rem;
	font-size:36/100rem;
	
}
.SimpleHead header img{
	position:absolute;
    left:0;
	margin:32/100rem  40/100rem ;
	width:17/100rem;
	height:31/100rem;
	
}


</style>
