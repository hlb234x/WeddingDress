var confirm = document.getElementById("confirm");
var verificationCode = null;
function JudgeInf(id) {
	this.wap = document.getElementById(id);
	this.inps = this.wap.getElementsByTagName("input");
	this.eleI = this.wap.getElementsByTagName("i");
	this.storag = null;  
	this.valu = null;
}
//用户名
JudgeInf.prototype.submitInf = function() {
	this.inps[0].placeholder = "请输入用户名";
	var that = this;
	that.inps[0].onblur = function() {
		if(that.inps[0].value == "") {
			that.eleI[0].innerHTML = "用户名不能为空";
			that.storag = false;
		}else if(that.inps[0].value.match(/^[a-z0-9_-]{3,16}$/)) {
			that.eleI[0].innerHTML = "格式符合";
			that.storag = true;
		}else {
			that.eleI[0].innerHTML = "输入要求：a-z0-9-_ 3-16位数";
			that.storag = false;
		}
	}
}
//密码
JudgeInf.prototype.passw = function() {
	this.inps[1].placeholder = "请输入密码";
	var that = this;
	that.inps[1].onblur = function() {
		if(that.inps[1].value == "") {
			that.eleI[1].innerHTML = "密码不能为空";
			that.storag = false;
		}else if(that.inps[1].value.match(/^[a-z0-9_-]{6,18}$/)) {
			that.eleI[1].innerHTML = "格式符合";
			that.storag = true;
			that.valu = that.inps[1].value;
		}else {
			that.eleI[1].innerHTML = "请输入a-z0-9_-六到十六位的密码";
			that.storag = false;
		}
	}
}
//重复密码
JudgeInf.prototype.pass = function() {
	this.inps[2].placeholder = "请输入密码";
	var that = this;
	that.inps[2].onblur = function() {
		if(that.inps[2].value == "") {
			that.eleI[2].innerHTML = "密码不能为空";
			that.storag = false;
		}else if(that.inps[2].value != that.valu){
			that.eleI[2].innerHTML = "密码不一致";
			that.storag = false;
		}else if(that.inps[2].value == that.valu){
			that.eleI[2].innerHTML = "格式正确";
			that.storag = true;
		}
	}
}
//验证码
JudgeInf.prototype.code = function() {
	this.inps[3].placeholder = "请输入验证码";
	var that = this;
	that.inps[3].onblur = function() {
		if(that.inps[3].value == "") {
			that.eleI[3].innerHTML = "验证码不能为空";
			that.storag = false;
		}else if(that.inps[3].value != verificationCode){
			that.eleI[3].innerHTML = "验证码不正确，区分大小写";
			that.storag = false;
		}else if(that.inps[3].value == verificationCode){
			that.eleI[3].innerHTML = "格式正确";
			that.storag = true;
		}
	}
}
//提交判断
JudgeInf.prototype.contrast = function() {
	if(this.storag == true) {
		alert("恭喜你，注册成功！");
		//写入数据
		var local = window.localStorage;  
		local.username = this.inps[0].value;
		local.userpassword = this.inps[1].value;
		//清空注册的值
		for(var i = 0; i < this.eleI.length; i++){
			this.eleI[i].innerHTML = "";
			this.inps[i].value = "";
			window.location.href = "login.html";
		}
	}else {
		alert("格式不对");
	}
}
//创建一个实例化对象
var jud = new JudgeInf("main");
jud.submitInf();
jud.passw();
jud.pass();
jud.code();
//提交按钮
confirm.onclick = function() {
	jud.contrast();
}
//验证码
var arrData = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
$('.checkCode').click(function(){
	var dataOne = Math.floor(Math.random()*9);
	var dataTwo = Math.floor(Math.random()*26);
	var dataFour = Math.floor(Math.random()*9);
	var dataThree = Math.floor(Math.random()*26);
	var timer = null;  //计时器id
	var num = 5; //计数
	verificationCode = dataOne + arrData[dataTwo] + dataFour + arrData[dataThree].toLowerCase();
	$('.checkCode').html(verificationCode);
	$('.checkCode').css({'font-size':'26px','font-family':'agency fb'});
	$('.register button').get(0).disabled = "disabled";
	$('.register i').eq(3).html("5s后，才能获取验证码");
	timer = setInterval(function(){
		num--;
		$('.register i').eq(3).html(num + "s后，才能获取验证码");
		if(num == 0){
			clearInterval(timer)
			$('.register i').eq(3).html("");
			$('.register button').get(0).disabled = "";
		}
	},1000);
});
