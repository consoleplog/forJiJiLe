function createXMLHttpRequest(){  
    try {  
        return new XMLHttpRequest();//大多数浏览器  
    } catch (e) {  
        try {  
            return ActiveXObject("Msxml2.XMLHTTP");//IE6.0  
        } catch (e) {  
            try {  
                return ActiveXObject("Micrsoft.XMLHTTP");//IE5.5  
            } catch (e) {  
                alert("哥们儿，你用的是什么浏览器啊?");//太古老了  
                throw e;  
            }  
        }  
    }  
}  
    window.onload = function(){//文档加载完毕后执行  
        var btn = document.getElementById("btn");  
        btn.onclick = function(){//给按钮的点击事件注册监听器  
            /* 
            AJAX四步操作,得到服务器的响应 
            把响应结果显示到h1元素中 
            */  
            //1.得到异步对象  
            var xmlHttp = createXMLHttpRequest();//调用创建xmlhttp的函数  
            /* 
            2.打开与服务器的连接 
            *指定请求方式 
            *指定请求的URL 
            *指定是否为异步请求 
            //注意：到客户端时已经没有了jsp，jstl等标签，服务器处理为了html 
            */  
            //服务器吧jsp变成了html发送过来了  
            xmlHttp.open("GET","<c:url value='/AServlet' />",true);  
            //3.发送请求  
            xmlHttp.send(null);//GET请求没有请求体，但也要给出null,不然FireFox可能不能发送  
            //4.给异步对象的onreadystatechange事件注册监听器  
            xmlHttp.onreadystatechange = function(){//当xmlHttp的状态发生变化时执行  
                //双重判断:xmlHttp的状态为4（服务器响应结束），以及服务器状态码为200(服务器响应成功)  
                if(xmlHttp.readyState==4&&xmlHttp.status==200){  
                    //获取服务器响应内容  
                    var text = xmlHttp.responseText;  
                    //获取h1元素  
                    console.log(text)
                }  
            }  
        }  
    }