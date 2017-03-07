function slider(param){
	var attr=param.getAttribute("src");
	document.getElementsByClassName("slider")[0].setAttribute("style","background-image:url("+attr+")")
}