/**
 * Created by zhangrong on 2016/8/6.
 */

/*
 新增一个wrap函数，用户封装调用函数
 */


function def_proc_error(jqxhr) {
    if(! window.iclosed){
        if(jqxhr.status==401){
            location = ex.appendSearch(js_config.login_url || '/accounts/login' ,{next:encodeURIComponent(location.href)})
        } else if(jqxhr.status !=0){
            alert(jqxhr.statusText+':code is;'+jqxhr.status+jqxhr.responseText)
            throw(jqxhr.statusText+':code is;'+jqxhr.status+jqxhr.responseText)
        }else{
            alert('maybe server offline,error code is '+jqxhr.status)
            throw('maybe server offline,error code is '+jqxhr.status)
        }
        //hide_upload()
        cfg.hide_load()
    }
}

// window.__proc_ajax_error=def_proc_error

export function hook_ajax_msg(proc_port_error,proc_ajax_error){
    if(proc_port_error){window.__proc_port_error=proc_port_error}
    if(proc_ajax_error){window.__proc_ajax_error=proc_ajax_error}
    if(window.hook_ajax_msg_mark){
        return
    }
    window.hook_ajax_msg_mark = true
    $(window).bind('beforeunload',function () {
        window.iclosed=true
    })

    //$(document).ajaxSuccess(function (event,data) {
    //    window.__proc_port_error(data,event)
    //})
    $(document).ajaxError(function (event,jqxhr, settings, thrownError) {
        window.__proc_ajax_error(jqxhr)
    })
    //hook_ajax_csrf()
}

export function hook_ajax_csrf() {
    // needed in django context,because django has csrf system enabled by default
    // used for fetch and generate CSRF code for POST ,used with django CSRF middleware
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
}



//export function show_upload(){
//    $('#load_wrap').show()
//}
//export function hide_upload(second){
//    if(second){
//        setTimeout(function () {
//            $('#load_wrap').hide()
//        }, second);
//    }else{
//        $('#load_wrap').hide()
//    }
//}

//
//if(!window.__uploading_mark){
//    window.__uploading_mark=true
//    document.write(`
//		<style>
//		._popup{
//			position: fixed;
//			top: 0;
//			left: 0;
//			right: 0;
//			bottom: 0;
//			display:none;
//			z-index: 9000;
//		}
//		#_upload_inn{
//			background: rgba(88, 88, 88, 0.2);
//			border-radius: 5px;
//			width:180px;
//			height:120px;
//			z-index: 9500;
//			/*padding:30px 80px ;*/
//		}
//		.imiddle{
//		    position: absolute;
//	        top: 50%;
//	        left: 50%;
//	        transform: translate(-50%, -50%);
//	        -ms-transform:translate(-50%, -50%); 	/* IE 9 */
//			-moz-transform:translate(-50%, -50%); 	/* Firefox */
//			-webkit-transform:translate(-50%, -50%); /* Safari 和 Chrome */
//			-o-transform:translate(-50%, -50%);
//
//	        text-align: center;
//			/*display: table;*/
//	        z-index: 10000;
//    	}
//    	#_upload_mark{
//    		float: left;
//
//    	}
//		</style>`)
//    $(function(){
//        $('body').append(`<div class="_popup" id="load_wrap"><div id='_upload_inn' class="imiddle">
//		<div  id="_upload_mark" class="imiddle"><i class="fa fa-spinner fa-spin fa-3x"></i></div></div></div>`)
//    })
//}
//
