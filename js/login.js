$(function() {
	//判断会员是否存在
	var local = window.localStorage;
	$('#userName').blur(function() {
		if(local['username'] != $('#userName').val()) {
			$('.userName').html("用户名不存在");
		} else {
			$('.userName').html("");
		}
	});
	//会员登录,跳转到官网
	$('.loginBut').click(function() {
		if(local['username'] == $('#userName').val() && local['userpassword'] == $('#userPass').val()) {
			alert("登录成功，为你跳转到官网。");
			window.location.href = "index.html?=" + $('#userName').val();
		}else{
			$('.userPass').html("密码不正确！");
		}
	});
	

});