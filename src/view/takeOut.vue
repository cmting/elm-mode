<template >
	<div class="home">
		<mt-header fixed title="定位">
			<router-link to="/footerGuide/Discover" slot="left">
		    	<mt-button icon="search"></mt-button>
			</router-link>
			<mt-button  slot="right"><router-link to="/login" style="color:white;font-size:12px">登录|注册</router-link></mt-button>
		</mt-header>
		<mt-swipe :auto="4000">
		    <mt-swipe-item >
		    	<li class="iconImg" v-for="item in takeData">
			    	<div style="text-align:center"><img slot="icon" src="../assets/img/drink.png"></div>
				    <div style="text-align:center">
				    	<a href="javascript:void(0);" @click="routeTo(item)">{{ item.name }}</a>
				    </div>
			    </li>
		    </mt-swipe-item>
			<mt-swipe-item >
		    	<li class="iconImg" v-for="item in takeData">
			    	<div style="text-align:center">
			    		<img slot="icon" src="../assets/img/food.png">
			    	</div>
				    <div style="text-align:center">
				    	<a href="javascript:void(0);" @click="routeTo(item)">{{ item.name }}</a>
				    </div>  
			    </li>
		    </mt-swipe-item>		   
		</mt-swipe>
		<!-- 附近商家 -->
		<header class="headerstore">
			<div style="float:left"><img src="../assets/img/store.png"></div>
			<div class="nearstore">附近商家</div>
		</header>
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="6">
			<div style="clear:both" v-for="item in storeData">
				<a href="javascript:void(0);" @click="routeto(item)">
					<div class="partOne">
						<img src="../assets/img/nearstore.png">
					</div>
					<div class="partTwo">
						<mt-badge size="small" type="warning">品牌</mt-badge>
						<a class="effect">效果演示</a>
						<div style="font-size:12px;margin-top:5px">￥{{item.ToSend}}起送/配送费约￥{{item.DeliveryFee}}</div>
					</div>
					<div class="partThree">
						<div style="float:right">
							<a style="font-size:12px;">保 准 票</a>
							<div><mt-badge size="small" type="primary">蜂鸟专送</mt-badge></div>
						</div>
					</div>
				</a>
			</div>
		</div>
		
	</div>	
</template>

<script>
import {api} from '../global/api.js'
export default {
	data: function () {
	    return {
	       takeData:null,
	       star:null,
	       storeData:null

	    }
	},
	mounted:function(){
	    this.getData();
	},
	methods:{
		// 导入json文件
	  	getData:function(){
	  		this.$http.get(api.takeOut).then(
                function(response){
                    // alert("请求成功");
                    // console.log(response.data);
                    this.takeData=response.data.takeData;
                    this.storeData=response.data.storeData;
                    
                },function(){
                    alert("请求不成功");
                }
            )
	  	},
	  	//push路径
	  	routeTo:function(item){
		  		this.$router.push(item.link);
		  	},
		// 加载更多
		loadMore() {
		  this.loading = true;
		  setTimeout(() => {
		    let last = this.storeData[this.storeData.length - 1];
		    for (let i = 1; i <= 6; i++) {
		      this.storeData.push(last + i);
		    }
		    this.loading = false;
		  }, 2500);
		},
		routeTo:function(item){
		  		this.$router.push(item.link);
		},
		routeto:function(item){
		  		this.$router.push(item.link);
		}
	}
}
</script>

<style scoped>
a{
	text-decoration: none;
	color: #666;
}
.mint-swipe{
	margin-top: 40px;
	width: 100%;
	height: 180px;
	border-bottom:1px solid #E4E4E4; 
}
.iconImg{
	list-style: none;
	float: left;
	width: 21%;
	margin: 5px;
	padding-top: 5px;
}
.iconImg a{
	font-size: 12px;
	text-decoration: none;
}
.nearstore{
	float:left;
	font-size:12px;
	margin-top:1px;
	margin-left:4px;
	color:#666;
}
.headerstore{
	border-top:1px solid #E4E4E4;
	margin-top:5px;
	margin-bottom: 20px;
}
.effect{
	font-size:14px;
	color:black;
	font-weight:bold;
}
.partOne  {
	float: left;
	width: 20%;
}
.partTwo{
	float: left;
	width: 41%;
}
.partThree{
	float: left;
	width: 39%;
}
</style>