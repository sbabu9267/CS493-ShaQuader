var animal = new Object();


animal.name = "Dog";
animal.color ="Brown";

console.log(animal);

console.log("Name : " + animal.name);

console.log("Color : " + animal.color);

animal.name = "Cat";

console.log("Name : " + animal.name);

console.log("Color : " + animal.color);

// Object Literal
var animal = {
    name: "Dog",
    color: "Brown",
    age: 8,
    'previous owners' : [
            {name:"John",lastname:"Doe"}, 
            {name:"Jane",lastname:"Kim"}, 
            {name:"Mary",lastname:"Davis"}],
    likes : ["Food", "Toy", "Go Out"],
    bio: function(){
        return "My " + this.name  + " is " + this.color ;
    }
};

console.log("Name : " + animal.name);

console.log("Color : " + animal.color);
console.log("Color : " + animal['color']);

console.log("Previous Owner : " + animal["previous owners"]); //output array of objects

console.log("Age : " + animal.age);

// var owner = "previous owners";
// console.log("Previous Owner : " + animal[owner]);

console.log(animal.likes);

// for (var i=0; i< animal.likes.length; i++){
//     console.log("He likes: " + animal.likes[i]);
// }

for (let n of animal.likes){
    console.log("He likes: " + n);
}

console.log(animal.bio());

for (let n of animal["previous owners"]){
    console.log(n.name + " "+ n.lastname);

}














//another example
var person ={
    name: 'Jane',
    lastname: 'Doe',
    age: 35,
    sports: ["Soccer", "Basketball"],
    bio: function(){
        var likes ="";
        for (let i of this.sports){
            likes += i + " ";
        }
        return ("Name: " + this.name + " Last Name: " + this.lastname + " Age: " + this.age + " Likes: " + likes );
    }
};


// for (var i =0; i<person.sports.length; i++) {
//     console.log("Likes: " + person.sports[i]);
// }

for (let i of person.sports) {
    console.log("Likes " + i);
}

console.log(person.bio());

//setting object members
person.name="John";
person.sports=["Tennis", "Swimming", "Golf"];

console.log(person.bio());

var myDataName = "name";
console.log("My name is " + person[myDataName]);

//adding new member names
person["gender"] ="female";

console.log("Gender is  " + person["gender"]);

//car
var car ={
    name: "Honda",
    model: "Civic",
    weight: "500kg",
    color: "gray",
    driver: {
        name: "John",
        lastname: "Doe"
    }
}
console.log(car);






//Exercise#10 Task2
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
document.addEventListener("DOMContentLoaded",)
var rowData = document.getElementById("empData");
console.log(rowData.innerHTML);


for (let n of empList){

    // console.log(n.fname + " " + n.lname);
    //1st way
    // var previousHTML = rowData.innerHTML;
    // var string = "<tr><td >"+n.fname+"</td><td >"+ n.lname+"</td></tr>";
    // rowData.innerHTML = previousHTML+string;

    //another way
    var row = document.createElement("tr");
    var cellname = document.createElement("td");
    var celllast = document.createElement("td");

    cellname.innerText = n.fname;
    celllast.innerText = n.lname;

    row.appendChild(cellname);
    row.appendChild(celllast);
    rowData.appendChild(row);


}



//© 2019 GitHub, Inc.
//Terms
//Privacy
//Security
//Status
//Help
//Contact GitHub
//Pricing
//API
//Training
//Blog
// About
