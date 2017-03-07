$(function() {
	//查看学习情况 的tab效果
	$("#first_point").click(function(){
		$(this).addClass("report_cur");
		$(this).next().removeClass("report_cur");
		$("#first_tab").show();
		$("#second_tab").hide();
	});
	$("#second_point").click(function(){
		$(this).addClass("report_cur");
		$(this).prev().removeClass("report_cur");
		$("#first_tab").hide();
		$("#second_tab").show();
	});

	//布置测试 给卷子起名字 按钮可按效果
	$("#nameform :text").on("input",function(evt){
	 if($(this).val().trim().length){
	    $("#to_secondstep_button").removeAttr("disabled");
	    $("#to_secondstep_button").css("background-color","#55aee5");
	 }else{
	    $("#to_secondstep_button").prop("disabled","disabled");
	    $("#to_secondstep_button").css("background-color","#999999");
  	}
	});

	// 点击下一步到第二步
	$("#to_secondstep_button").click(function(){
	    $("#make_name").hide();
	    $("#secondstep").show();
	    $("#strp_img_first").attr({disabled:false, src:"images/test_name_gray.png"});
	    $("#strp_img_second").attr({src:"images/test_make_blue.png"});

	});
	//点击图标返回第一步
	$("#strp_img_first").click(function(){
	    $("#make_name").show();
	    $("#secondstep").hide();
	    $("#strp_img_first").attr({disabled:true, src:"images/test_name_blue.png"});
	    $("#strp_img_second").attr({src:"images/test_make_gray.png"});
	});

	// 组题 一级知识点 点击伸缩
	$(".firstfloor>div>a").click(function(){
	$("#myul a").not($(this)).css("background-image","url('images/plus_on.png')");
	var ulNode=$(this).parent().nextAll();
	$(".firstfloor>div>a").parent().nextAll().not(ulNode).slideUp();
	$(".secondfloor>div>a").parent().nextAll().not(ulNode).slideUp();
	ulNode.slideToggle();
	if ($(this).css("background-image").indexOf("plus_on.png")>=0) {
		$(this).css("background-image","url('images/cut.png')");
	}else{
		$(this).css("background-image","url('images/plus_on.png')");
	}
	});
	// 组题 二级知识点 点击伸缩
	$(".secondfloor>div>a").click(function(){
	$(".secondfloor a").not($(this)).css("background-image", "url('images/plus_on.png')");
	var ulNode=$(this).parent().nextAll();
	$(".secondfloor>div>a").parent().nextAll().not(ulNode).slideUp();
	ulNode.slideToggle();
	if ($(this).css("background-image").indexOf("plus_on.png")>=0) {
		$(this).css("background-image","url('images/cut.png')");
	}else{
		$(this).css("background-image","url('images/plus_on.png')");
	}

	});

	//数量加减
	$(".subone").click(function(){
	var t = $(this).parent().find("input[type=text]");
	var sum=parseInt(t.val());
	if(sum>0){
		t.val(parseInt(t.val())-1);
		}
	});
	$(".addone").click(function(){
	var t = $(this).parent().find("input[type=text]");
	 t.val(parseInt(t.val())+1);
	});


	//自定义checkbox
	$(".choose_box").click(function(){
	if ($(this).hasClass("choose_ischeck")) {
		$(this).removeClass("choose_ischeck");
		$(this).nextAll().hide();
		$("#to_thirdstep_button").prop("disabled","disabled");
    		$("#to_thirdstep_button").css("background-color","#999999");

	} else{
		$(this).addClass("choose_ischeck");
		$(this).nextAll().show();
		$("#to_thirdstep_button").removeAttr("disabled");
    		$("#to_thirdstep_button").css("background-color","#55aee5");
	}
	});



})