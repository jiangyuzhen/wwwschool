/**
 * [ajaxPost ajax公共函数]
 * @param  {[type]} aUrl        [访问的URL]
 * @param  {[type]} aData       [访问参数]
 * @param  {[type]} successCont [回调函数]
 * @return {[type]}             [description]
 */
function ajaxPost(aUrl, aData, successCont, aAsync) {
    if (typeof(aAsync) == "undefined") {
        aAsync = true;
    }
    $.ajax({
        url: aUrl,
        type: 'POST',
        dataType: 'json',
        async: aAsync,
        data: aData,
        success: function (json) {
            if (json.Errorcode == 0) {
                successCont(json.Data);
            } else if (json.Errorcode == 8) {
                window.location.href = '/';
            } else {
                alert('请求错误!' + json.Errorcode);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}
/**
 * [GetDateStr 获取日期字符串]
 * @param {[type]} AddDayCount [距离现在时间]
 */
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
    return m + "-" + d;
}
/**
 * [getUrlParam 获取链接数据]
 * @param  {[type]} url [链接]
 * @return {[type]}      [description]
 */
function getUrlParam(url) {
    var reg = new RegExp("(^|&)" + url + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}
/**
 * [showPage 获取链接数据]
 * @param  {[type]} page [当前页码]
 * @param  {[type]} total_page [总页码]
 */
function showPage(page, total_page) {
    var str = '';
    str += "<a href='#' class='pages' page-id='1'>首页</a>";
    var next_page = Number(page) + 1;
    var prev_page = Number(page) - 1;
    if (next_page > total_page) {
        next_page = total_page;
    }
    if (prev_page < 1) {
        prev_page = 1;
    }
    for (var i = prev_page; i <= next_page; i++) {
        if (i == page) {
            str += "<a href='#' class='pages pagescur' page-id='" + i + "'>" + i + "</a>";
        } else {
            str += "<a href='#' class='pages' page-id='" + i + "'>" + i + "</a>";
        }
        ;

    }
    str += "<a href='#' class='pages' page-id='" + total_page + "'>尾页</a>";
    $(".show_pages").empty().append(str);
    page_click();
}


/**
 * 当前时间戳
 * @return <int>        unix时间戳(秒)
 */
function CurTime() {
    return Date.parse(new Date()) / 1000;
}
/**
 * 日期 转换为 Unix时间戳
 * @param <string> 2014-01-01 20:20:20  日期格式
 * @return <int>        unix时间戳(秒)
 */
function DateToUnix(string) {
    var f = string.split(' ', 2);
    var d = (f[0] ? f[0] : '').split('/', 3);
    var t = (f[1] ? f[1] : '').split(':', 3);
    return (new Date(
            parseInt(d[0], 10) || null, (parseInt(d[1], 10) || 1) - 1,
            parseInt(d[2], 10) || null,
            parseInt(t[0], 10) || null,
            parseInt(t[1], 10) || null,
            parseInt(t[2], 10) || null
        )).getTime() / 1000;
}

/**
 * 时间戳转换日期
 * @param <int> unixTime    待时间戳(秒)
 * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
 * @param <int>  timeZone   时区
 */
function UnixToDate(unixTime, isFull, timeZone) {
    if (typeof(timeZone) == 'number') {
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
    }
    var time = new Date(unixTime * 1000);
    var ymdhis = "";
    ymdhis += time.getUTCFullYear() + "-";
    ymdhis += (time.getUTCMonth() + 1) + "-";
    ymdhis += time.getUTCDate();
    if (isFull === true) {
        ymdhis += " " + time.getUTCHours() + ":";
        ymdhis += time.getUTCMinutes() + ":";
        ymdhis += time.getUTCSeconds();
    }
    return ymdhis;
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return decodeURI(arr[2]);
    else
        return null;
}

/*
 * Javascript base64_decode() base64解密函数
 用于解密base64加密的字符串
 * @param string str base64加密字符串
 * @return string 解密后的字符串
 */
function base64_decode(str) {
    var c1, c2, c3, c4;
    var base64DecodeChars = new Array(
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
        -1, -1
    );
    var i = 0, len = str.length, string = '';

    while (i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (
        i < len && c1 == -1
            );

        if (c1 == -1) break;

        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (
        i < len && c2 == -1
            );

        if (c2 == -1) break;

        string += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return string;

            c3 = base64DecodeChars[c3]
        } while (
        i < len && c3 == -1
            );

        if (c3 == -1) break;

        string += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) return string;
            c4 = base64DecodeChars[c4]
        } while (
        i < len && c4 == -1
            );

        if (c4 == -1) break;

        string += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }
    return string;
}

function setSystem(append_by, id) {
    var new_id = '';
    for (var i = 1; i <= id; i++) {
        new_id += 1;
    }
    var str = '<div id="select_' + id + '" data-id="' + id + '" style="display:inline-block" class="select_system"><select name="category_' + new_id + '" id="category_' + new_id + '" class="system_' + id + ' cap_select" onChange="system_change(\'category_'+ new_id +'\');"><option value="">请选择</option></select></div>';
    $(append_by).after(str);
    getFirstSystem('#category_'+new_id);
}

/**
 * [getFirstSystem 获取一级层级]
 * @return {[type]} [description]
 */
function getFirstSystem(id){
    ajaxPost('/pubblico/getNextSystemForm',{parent_id:0},function(Data){
        var data=Data.system_form;
        var str='';
        for(var i in data){
            str+='<option value='+data[i].s_y_f_id+'>'+data[i].s_y_f_name+'</option>';
        }
        $(id).append(str);
    });

}

/**
 * [system_change 为层级添加上点击查找子层级事件]
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
function system_change(val) {
    var str = val; //select的id
    var select_id = $('#' + str).parent().attr('id');
    var data_id = $('#' + str).parent().data('id');
    var num; //当前级数
    var id; // 分类id
    num = str.substr(9);
    var nownum = parseInt(num) + 1; // 将字符串转换为数字
    id = $("#" + str + "").val();
    var r = /^[1-9]+[0-9]*]*$/;　//正整数
    var new_id = '';
    for (var i = 1; i <= data_id; i++) {
        new_id += 1;
    }
    ;
    if (!r.test(id)) {
        //清空过时的选项
        $(".system_" + data_id).each(function (index) {
            if (parseInt(new_id) + index > num) {
                $(this).remove();
            }
        })

        return false;
    }
    ajaxPost('/pubblico/getNextSystemForm', {parent_id: id}, function (Data) {
        var result = Data.system_form;
        if (result != 0) {
            var html = "<select name='category_" + nownum + "' id='category_" + nownum + "' class='cap_select system_" + data_id + "' onChange=system_change('category_" + nownum + "'); >";
            html += "<option value=''>请选择分类 </option>";
            var datas = eval(result);
            $.each(datas, function (i, val) {
                html += "<option value='" + val.s_y_f_id + "' >" + val.s_y_f_name + "</option>";
            });
            html += "</select>";
            //清空过时的选项
            $(".system_" + data_id).each(function (index) {
                if (parseInt(new_id) + index > num) {
                    $(this).remove();
                }
            })
            $("#" + select_id).append(html);
        } else {
            //清空过时的选项
            $(".system_" + data_id).each(function (index) {
                if (parseInt(new_id) + index > num) {
                    $(this).remove();
                }
            })
        }
    });
}


/*
*2016.1.19
*数据验证
*传入类名、回调函数
* 
 */ 
    function infoValidate(classname,func){
        $("."+classname).blur(function(event) {
            $("."+classname).next().remove();
            var data=$("."+classname).val();
            if (data=='') {
                $("."+classname).after('<span class="font_color_red wrong">选项不能为空</span>');
                return false;
            }else{
                if(typeof(func) == "undefined"){
                    return true;
                }else{
                    func();
                }
            }
        });
     }


/*
*2016.1.19
* 判断是否为手机号
 */ 
function checkMobile(str) {
    var re = /^1\d{10}$/;
    if (re.test(str)) {
        return 1;
    } else {
        return 0;
    }
}


/*
*2016.1.19
* 判断是否为email
 */ 
function checkEmail(str){
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(re.test(str)){
          return 1;
    } else {
        return 0;
    }
}