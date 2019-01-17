var empList =[
    {
        "fname": "Sharad",
        "lname": "Volz"
    },
    {
        "fname": "Constance",
        "lname": "Dech"
    },
    {
        "fname": "Myra",
        "lname": "Comeau"
    },
    {
        "fname": "Noriess",
        "lname": "Dabbs"
    },
    {
        "fname": "Esperanza",
        "lname": "Shrestha"
    },
    {
        "fname": "Eugene",
        "lname": "Barron"
    },
    {
        "fname": "Petr",
        "lname": "Ravenelle"
    },
    {
        "fname": "Cristina",
        "lname": "Terry"
    },
    {
        "fname": "Victoria",
        "lname": "Aresti"
    },
    {
        "fname": "Byron",
        "lname": "Yarber"
    }
];


function Addtotable(empList)
{
	var empTable = document.getElementById("empData");
		for(let n of empList)
			{
				var tabrow= document.createElement("TR");
				var Fnode= document.createElement("TD");
				var Lnode=document.createElement("TD");
				Fnode.innertext = n.fname;
				Lnode.innertext = n.lname;
				tabrow.appendchild(Fnode);
				tabrow.appendchild(Lnode);
				empTable.appendchild(tabrow);
			}

}


console.log(Addtotable());
























//var animal = new Object();

//animal.name="doug";
//animal.color="brown";

//console.log(animal);

//console.log("Name : "+ animal.name);
//console.log("Color : "+ animal.color);

//animal.name = "Cat"; //modify object//

//Object Literals//

//var animal={
//	name: "Tiger",
//	color: "Orange",
//	age: 11,
//	'previous owner ' : [
//	{fname:"john",lastname: "doe"},
//	{fname: "jay",lastname: "day"},
//	{fname: "lady",lastname: "lou"}],
//	likes: ["food", "toys", "games"],
//	bio: function() {
//		return "My " + this.name + " is " + this.color;
//}
//};

//console.log(animal);
//console.log("Name : "+animal.name);
//console.log("Color : "+ animal['color']);
//console.log("previous owner: " +animal["previous owner"]);

//var owner="previous owner";
//console.log("previous owner :" + animal[owner]);

//for(var i=0; i<animal.likes.length; i++){
//	console.log("it likes: "+animal.likes[i]);
//

//for(let n of animal.likes)
//{
//	console.log("it likes: "+n);
//}
//console.log(animal.bio());

//for(let n of animal["previous owner"])
//{
//	console.log(n.fname+ " "+ n.lastname);
//}
//



