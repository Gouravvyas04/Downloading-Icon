var flow = document.querySelector(".flow");
var count = 0;
setInterval(function(){
    if(count == 100 || count >=100){
        flow.style.width = "100%";
    }
    else{
        count++;
        flow.style.width = count+"%";
    }
},100)
