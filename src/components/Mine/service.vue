<template >
	<div class="Integral">
		<mt-header fixed title="服务中心">
			<router-link to="/footerGuide/Mine" slot="left">
		    	<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="sectionOne">
				<div class="partone">
					<img  src="../../assets/img/Online.png">
					<div class="font14"><button @click="MessageBox()">在线客服</button></div>
				</div>
				<div class="parttwo">
					<img  src="../../assets/img/telephone.png">
					<div class="font14"><button @click="MessageBox()">在线客服</button></div>
				</div>
		</div>
		<div class="sectionTwo">热门问题</div>
		<div class="sectionThree">
			<a href="javascript:void(0);"  v-for="item in listData" @click="routeTo(item)">
					<div class="box1">
						<a class="brand">{{item.name}}</a>
						<img slot="icon" src="../../assets/img/left.png" style="float:right;" >
					</div>				
			</a>
			
		</div>
	</div>
		
</template>

<script>
import { MessageBox } from 'mint-ui';//messageBox引入才可以用
import {api} from '../../global/api.js'//引用接口
	export default {
		data: function () {
		    return {
		    listData:null
		    }
		},
		mounted:function(){
	    this.getData();
		},
	    methods:{
	    	//push路径
		  	routeTo:function(item){
		  		this.$router.push(item.link);
			},
			// 导入json文件
		  	getData:function(){
		  		this.$http.get(api.service).then(
	                function(response){
	                    console.log(response.data);
	                    this.listData=response.data.listData;
	                    
	                },function(){
	                    alert("请求不成功");
	                }
	            )
		  	},
		  	// 弹出消息框
		  	MessageBox:function(){
				MessageBox.confirm('', {
	                message: '在线客服电话：10105757',
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
.sectionOne{
	margin-top: 50px;
	position: absolute;
	width: 100%;
}
.sectionTwo{
	margin-top:120px;
	position: absolute;
	width: 100%;
}
.sectionThree{
	margin-top:160px;
	position: absolute;
	width: 100%;
}
.partone{
	width: 50%;
	float: left;
	text-align: center;
}
.parttwo{
	width: 50%;
	float: left;
	text-align: center;	
}
.font14{
	font-size: 14px;
	color: #666;
}
.HotAnswer{
	clear: both;
}
.sectionThree .box1{
	float:left;
	width:100%;
	border-bottom: 1px solid #f1f1f1;
}
a{
	font-size: 14px;
	color: #666;
}
</style>