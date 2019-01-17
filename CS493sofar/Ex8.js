function addNewMenu(){
	var Ulist = document.querySelector("ul.nav");
	var listitem = document.createElement("li");
	var anchor = document.createElement("a");
	Ulist.appendChild(listitem).appendChild(anchor);
}

function showText() {
	alert('hi');
	var LT = "WHAT WHAT ";
	document.getElementById("leadtext").innerText = LT;
}