/*Created by lixin on 2018/3/13.*/

// {  "url":"xxxx",param:"xxx",callback:function(){},"method":xxx}
function ajaxFn(obj){
    //ajax
    var xmlHttp;
    if(window.XMLHttpRequest){ //DOM
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject){ //IE
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState==4&&xmlHttp.status==200){
            console.log(xmlHttp.responseText);
            obj.callback(xmlHttp);
        }
    }

     if(obj.method=="get"&&obj.param.length>0){
         obj.url = obj.url+"?"+obj.param;
     }

    xmlHttp.open(obj.method,obj.url);
    //�����post ����Ҫ���ñ�ͷ�ı���
    if(obj.method=="post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(obj.param);
    }else{
        xmlHttp.send(null);
    }

}