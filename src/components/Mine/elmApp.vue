<template >
	<div class="Integral">
		<mt-header fixed title="下载">
			<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
		<div class="appImg">
			<img  src="../../assets/img/app.png">
			<div class="font16">下载饿了么APP</div>
			<mt-button class="down" size="large" @click="MessageBox()">下载</mt-button>
			
		</div>	
	</div>
		
</template>

<script>
import { MessageBox } from 'mint-ui';//messageBox引入才可以用
	export default {
	    data: function () {
		    return {
		    
		    }
	  	},
	    methods:{
		  	getData:function(){
		  		//这里可以写ajax方法
		  	},
		  	//弹出消息框
		  	MessageBox:function(){
				MessageBox.confirm('', {
	                message: 'IOS用户请前往APPStore下载？',
	                title: '提示',
	                confirmButtonText: '确认',
	                cancelButtonText: '取消'
	            }).then(action => {
	                if (action == 'confirm') {
	                    console.log('确认');
	                }
	            }).catch(err => {
	                if (err == 'cancel') {
	                    console.log('取消');
	                }
	            });
		    }
	    }
    }
</script>
<!-- scoped是局部页面起作用 -->
<style scoped>
.appImg{
	margin-top: 50px;
	text-align: center;
}
.font16{
	font-size: 16px;
	color: #666;
	margin-top: 10px;
}
.down{
background-color: #4cd964;
color: white;
margin-top: 20px;
}
</style>