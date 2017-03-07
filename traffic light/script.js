function red(){
	var i=0;
    var time=setInterval(function(){
    	if(i<6){
    		document.getElementById("red").style.opacity=1;
    		document.getElementById("yellow").style.opacity=0.3;
    		document.getElementById("green").style.opacity=0.3;
    	i++;
    	}else{
    		clearInterval(time);
    		yellow();
    	}
    },1000);
}

function yellow(){
	var i=0;
    var time=setInterval(function(){
    	if(i<3){
    		document.getElementById("yellow").style.opacity=1;
    		document.getElementById("red").style.opacity=0.3;
    		document.getElementById("green").style.opacity=0.3;
    	i++;
    	}else{
    		clearInterval(time);
    		green();
    	}
    },1000);
}

function green(){
	var i=0;
    var time=setInterval(function(){
    	if(i<8){
    		document.getElementById("green").style.opacity=1;
    		document.getElementById("red").style.opacity=0.3;
    		document.getElementById("yellow").style.opacity=0.3;
    	i++;
    	}else{
    		clearInterval(time);
    		red();
    	}
    },1000);
}

red();