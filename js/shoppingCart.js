$(function() {
	//显示，隐藏
	$('.dress').hover(function() {
		$('.dressWrap').show();
		$('.dressMag').show();
	}, function() {
		$('.dressWrap').hide();
		$('.dressMag').hide();
	});
	//拖动dressMag放大镜
	$('.dress').mousemove(function(event) {
		var ev = event || window.event;
		//兼容IE
		var mouseX = ev.pageX || ev.clientX + $(window).scrollLeft(); //鼠标X轴
		var mouseY = ev.pageY || ev.clientY + $(window).scrollTop(); //鼠标Y轴
		//获取dressMag、放大镜的width和height
		var magWidth = $('.dressMag').width();
		var magHeight = $('.dressMag').height();
		//获取dress、的width和height
		var minImgWidth = $('.dress').width();
		var minImgHeight = $('.dress').height();
		//获取dressWrap、的width和height
		var maxImgWidth = $('.dressWrap').width();
		var maxImgHeight = $('.dressWrap').height();
		//dressWrapImg、的width和height
		var imagWidth = $('.dressWrapImg').width();
		var imagHeight = $('.dressWrapImg').height();
		//dress、距离可视窗口的top和left
		var minImgTop = $('.dress').offset().top;
		var minImgLeft = $('.dress').offset().left;
		//放大镜dressMag可以移动的距离（元素左边距离定位父元素的左边距离）
		var limitX = minImgWidth - magWidth;
		var limitY = minImgHeight - magHeight;
		//放大镜dressMag跟鼠标一起移动
		var x = mouseX - minImgLeft - magWidth / 2;
		var y = mouseY - minImgTop - magHeight / 2;
		//放大镜dressMag可移动的距离
		//X轴的移动方位
		if(x > limitX) {
			x = limitX;
		} else if(x < 0) {
			x = 0;
		}
		//Y轴的移动方位
		if(y > limitY) {
			y = limitY;
		} else if(y < 0) {
			y = 0;
		}
		//放大镜dressMag移动的位置
		$('.dressMag').css({
			'left': x,
			'top': y
		});
		//放大比例
		var X = (maxImgWidth - imagWidth) / (minImgWidth - magWidth);
		var Y = (maxImgHeight - imagHeight) / (minImgHeight - magHeight)
		$('.dressWrapImg').css({
			'left': x * X,
			'top': y * Y
		});
	});
	//增。减商品
	var num = 1;
	$('.numberPlus').click(function(){
		if(num > 1){
			num = Number($('.inp').get(0).value) - 1;
			$('.inp').val(num);
		}else{
			num = 1;
		}
	});
	$('.numberReduce').click(function(){
		num = Number($('.inp').get(0).value) + 1;
		$('.inp').val(num);
	});
	/*加、减img,鼠标移入、移进*/
	$('.numberPlus').hover(function(){
		$('.numberPlus').css('background','#000');
		$('.numberPlus img').get(0).src = "img/reduce3.png";
	},function(){
		$('.numberPlus').css('background','#fff');
		$('.numberPlus img').get(0).src = "img/reduce4.png";
	});
	$('.numberReduce').hover(function(){
		$('.numberReduce').css('background','#000');
		$('.numberReduce img').get(0).src = "img/plus6.png";
	},function(){
		$('.numberReduce').css('background','#fff');
		$('.numberReduce img').get(0).src = "img/plus7.png";
	});
	//AJAX
	var num = Number(window.location.search.split("=")[1]);
	if(num>=0 && num<4){
		$.ajax({
			type: "get",
			url: "file/weddingDressData.json",
			async: true,
			dataType: "json", 
			data: {
				
			},
			success: function(result){
				/*标题*/
				$('.middleFontOne').html(result['subpageData'][0]['title'][num]);
				/*次数*/
				$('.count').html(result['subpageData'][0]['frequency'][num]);
				/*介绍*/
				$('.info').html(result['subpageData'][0]['introduce'][num]);
				/*价格*/
				$('.price').html(result['subpageData'][0]['price'][num]);	
				/*小图片*/
				$('#minImg img').get(0).src = "img/" + result['subpageData'][0]['img'][num];
				/*大图片*/
				$('.dressWrap img').get(0).src = "img/" + result['subpageData'][0]['maxImg'][num];
				/*婚纱的阐述*/
				$('.dressFontNoe').html(result['subpageData'][0]['describeOne'][num]);
				$('.dressFontTwo').html(result['subpageData'][0]['describeTwo'][num]);
				$('.dressFontThree').html(result['subpageData'][0]['describeThree'][num]);
			}
		});
	}
});