
document.addEventListener("DOMContentLoaded",init);

function init(){
	document.querySelector("body").addEventListener("click", blockmove);
	var block=document.getElementById("mousemove");

	function blockmove (event){

		if(event.ctrlKey) {

		console.log("Coordinate X: "+ event.clientX + "Y: "+event.clientY);
		block.setAttribute("style","top:"+event.clientY+"px; left:"+event.clientX+"px;");

		}

		// var blockmove = function(event){
		//	console.log("Coordinate X: "+ event.clientX + "Y: "+event.clientY);
		//	block.setAttribute("style","top:"+event.clientY+"px; left:"+event.clientX+"px;");
		//}
	}
}
	
