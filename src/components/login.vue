<template >
	<div class="login">
		<mt-header fixed title="登陆">
			<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
		<el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="账号" prop="username">
			    <el-input v-model="ruleForm.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
			</el-form-item>
			
			<el-form-item>
			    <el-button  type="primary" @click="submitForm('ruleForm')" style="width:100%;margin-left:-33px;">登陆</el-button>
			    <el-button @click="resetForm('ruleForm')" style="float:right;margin-top:10px;">重置</el-button>
			  </el-form-item>
			</el-form>
	</div>
		
</template>

<script>

	export default {
	    data: function () {	    
	      	var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		            if (this.ruleForm.checkPass !== '') {
		            	this.$refs.ruleForm.validateField('checkPass');
		         	}
		          	callback();
		        }
	        };
	      	var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
	      	};
	     	return {
		        ruleForm: {
		          pass: '',
		          checkPass: '',
		          username: ''
		        },
		        rules2: {
			        pass: [
			            { validator: validatePass, trigger: 'blur' }
			        ],
			        checkPass: [
			            { validator: validatePass2, trigger: 'blur' }
			        ],
			        username: [
			        	{ required: true,message:'请输入账号', trigger: 'blur' },
			            { min: 3, message: '长度在3个字符以上', trigger: 'blur' }
			        ]
		        }
        	};
    	},
	  	methods:{
	  		// 登陆
		  	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('登陆成功');
		            this.$router.push({ path: '/footerGuide/takeOut' });
		          } else {
		            console.log('登陆失败!!');
		            return false;
		          }
	       		});
	      	},
	      	// 重置
		    resetForm(formName) {
		        this.$refs[formName].resetFields();
		    }
        }
    }
	
</script>
<!-- scoped是局部页面起作用 -->
<style scoped>
.form{
	margin-top: 40px;
}
.demo-ruleForm{
	margin-top: 60px;
	margin-left: -30px;
}
</style>




