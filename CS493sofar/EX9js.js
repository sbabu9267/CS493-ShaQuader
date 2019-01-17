document.addEventListener("DOMContentLoaded" , init );

function init(){
    document.getElementsByClassName("btn")[0].addEventListener("click", showText);
    document.getElementsByClassName("btn")[1].addEventListener("click", addNewMenu);
    document.getElementsByClassName("btn")[2].addEventListener("click", removeMenu);
    document.getElementsByClassName("btn")[3].addEventListener("click", changeImage);
    document.getElementsByClassName("btn")[4].addEventListener("click", showAlert);


    document.getElementById("btn-new-task").addEventListener("click", addToDo );
    var todoList = document.getElementById("todo-tasks");
    var newtask = document.getElementById("new-task");

    function addToDo(msg){
        // alert("hello ");
        var listItem = document.createElement("li");
        var checkBox = document.createElement("input");
        var label = document.createElement("label");
        var deleteButton = document.createElement("button");

        checkBox.type ="checkbox";
        deleteButton.className ="delete";
        deleteButton.innerText = "X";
        if(typeof(msg)=='string')
        {
        label.innerText = msg;
    }else {
        label.innerText = newtask.value;
    }

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        checkBox.addEventListener("click",TaskCompleted);
        deleteButton.addEventListener("click",RemoveTask);



    }

    function TaskCompleted(){
        console.log(this);
        var label=this.nextSibling;
        label.setAttribute("style","text-decoration: line-through;");
    }

function RemoveTask(){
    console.log(this.parentNode.parentNode);
    todoList.removeChild(this.parentNode);
}

    function addNewMenu(){
        var ulist = document.querySelector("ul.nav");
        var listitem = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.innerHTML="New Menu";
        anchor.setAttribute("class","nav-link");
        anchor.setAttribute("href","#");
        listitem.appendChild(anchor);
        ulist.appendChild(listitem);
    }
    function removeMenu(){
        var ulist = document.querySelector("ul.nav");
        var lastchild = ulist.lastElementChild;
        ulist.removeChild(lastchild);
    }

    function showAlert(msg){
        var alertString="<div class='alert alert-success'>";
        alertString += msg + "</div>";
        document.getElementById("alertbox").innerHTML= alertString;
    }
    function showText(){
        var showText="I love coding!!!";
        document.getElementById("leadtext").innerHTML= showText;
    }

    function changeImage(){

        var myImage = document.querySelector("img");
        var imageFile = myImage.getAttribute("src");
        
        if (imageFile == "image/YorkLogo-1.png") {
            myImage.setAttribute("src","image/YorkLogo-2.png");
        } else {
            myImage.setAttribute("src","image/YorkLogo-1.png");
        }
    }

}

var todoArrayList=["Pay Bills", "Buy Toothpaste", "Get Cash", "Finish Work"];
for(var i=0; i<todoArrayList.length;i++)
{
    .addToDo(todoArrayList[i]);
}

//console.log(myArray[0]);
//console.log(myArray.length);
//myArray[0]+="athon";
//{
//}
//var temp="bob,sad,fad,dad";
///console.log("lenght is now" + myArray.length);
//{
//    console.log(myArray[i]);
//
//for(var i=0;i<btnList.length; i++){
//    console.log(btnList[i].innerHTML);
//{

