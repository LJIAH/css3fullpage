/**
 * Created by hxsd on 2017/4/20.
 */
$(function(){


    //1. fullpage
    $(".main").fullpage({
        sectionsColor:["#1bbc9b","#1bbc9b","#1bbc9b","#1bbc9b"]
    });

    //2.������Ƶ����
    var audiobox=document.getElementById("audiobox");
    var audio=document.getElementById("audio");
    audiobox.onclick=function(){
        //�������ͣ��
        if(audio.paused)
        {
            audio.play();
        }
        else{
            audio.pause();
        }
    }



})