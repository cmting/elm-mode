<template >
	<div class="nearstore">
		<mt-header fixed title="效果演示" style="z-index:2">
			<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
		<div class="sectionOne">
			<div class="partone"><img slot="icon" src="../../assets/img/nearstore.png"></div>
			<div class="parttwo">
				<div>商家配送、分钟送达、配送费￥5</div>
				<div>公告：欢迎观临，用餐高峰请提前下单，谢谢</div>
			</div>
			<div class="partthree"><img  src="../../assets/img/right.png" style="float:right;" >
			</div>

		</div>
		<div class="sectionTwo">
			<div class="partone">
			<mt-badge size="x-small" type="error">减</mt-badge>
			<span>满30减5，满60减8（APP专享）</span>
			</div>
			<div class="parttwo"><span>4个活动</span><img  src="../../assets/img/smallright.png" style="float:right;" >
			</div>
		</div>
		<!-- tab切换 -->
		<div class="sectionThree"> 
		    <div class="nav"> 
			    <mt-button class="tab1" @click="active = 'tab-container1'"><a class="navOne">商品</a></mt-button> 
			    <mt-button class="tab2" @click="active = 'tab-container2'"><a class="navOne">评价</a></mt-button> 
		    </div>  
		      <!-- tab内容 -->
		    <div class="page-tab-container">  
		      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable> 

		        <mt-tab-container-item id="tab-container1">
				    <div>
			          		<li class="li"><a href="" class="font12">热销榜</a></li> 
			          		<li class="li"><a href="" class="font12">优惠</a></li>
			          		<li class="li"><a href="" class="font12">好吃又实惠</a></li>
			          		<li class="li"><a href="" class="font12">盖烧饭</a></li>
			          		<li class="li"><a href="" class="font12">披萨</a></li>
			          		<li class="li"><a href="" class="font12">汉堡</a></li>
			          		<li class="li"><a href="" class="font12">甜点</a></li>
			        </div>
			        <div>
			        	
			        </div>	
		        </mt-tab-container-item>  
		          	
		        <mt-tab-container-item id="tab-container2"> 
		        	qq   
		        </mt-tab-container-item>  

		      </mt-tab-container>  

		    </div>  
		  </div>  

	</div>
	
</template>

<script>

	export default {
	    data: function () {
		    return {
		    active: 'tab-container1' ,
		    active1: 'tab-container1' 
		    }
	    },
	  	methods:{
		  	getData:function(){
		  		//这里可以写ajax方法
		  	}
	    }
    }
</script>
<!-- scoped是局部页面起作用 -->
<style scoped>
.navOne{
	border-bottom: 2px solid #26A2FF;
	font-size:14px;

}
.sectionOne{
	margin-top: 32px;
	margin-left: -8px;
	background-color: #26A2FF;
	clear: both;
	position: fixed;
	width: 320px;
	z-index: 2;
	width:100%;

}
.sectionTwo{
	margin-top: 75px;
	margin-left: -8px;
	background-color: #26A2FF;
	clear: both;
	position: fixed;
	width: 320px;
	font-size: x-small;
	color: #fff;
	z-index: 2;	
	width:100%;
}
.sectionThree{
	z-index: 1;
	margin-top: 100px;
	position: absolute;
}
.sectionOne .partone{
	width: 15%;
	float: left;
	margin-top: -5px;
}
.sectionOne .parttwo{
	width: 80%;
	float: left;
	font-size: x-small;
	color: #fff;	
}
.sectionOne .partthree{
	width: 5%;
	float: left;
}
.sectionTwo .partone{
	width: 75%;
	float: left;
	margin-left: 5px;
}
.sectionTwo .parttwo{
	width: 20%;
	float: left;
}
.sectionThree .nav{
	position: fixed;
	z-index: 2;
	width: 100%;
	margin-left: -8px;
	margin-top: -8px;
}
.page-tab-container{
	margin-top: 35px;
}
.tab1,.tab2{
	width: 50%;
	float: left;
	text-align: center;
}
.li{
	list-style: none;
	display: block;
	width: 76px;
	height: 55px;
}
.font12{
	font-size: 12px;
	text-decoration:none;
	color:#666;

}
</style>