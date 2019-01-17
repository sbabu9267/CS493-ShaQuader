var Mycollege=
{
    name:"York",
    location:"Jamaica",
    President:{name:"Provis",Lname:"Doish"},
    Provost:{name:"Joan",Lname:"Rivers"},
    Departments:[
        {DepName:"ComputerScience"},
        {DepName:"Business Administration"},
        {DepName:"Physics"},
        {DepName:"Chemistry"},
        {DepName:"Nursing"}
    ],
}

var studentList;

var requestURL="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
var request = new XMLHttpRequest();
request.open('Get',requestURL);
request.responseType="json";
request.send();
request.addEventListener("load",reqListener);

function reqListener()
{
    console.log(request.response);
    studentList=request.response;
    console.log(studentList);
    var STDATA=JSON.parse(studentList);

}

//    var StudentN= document.getElementById("stuName");
//   var StudentLN= document.getElementById("stuLname");
//    var StudentAd= document.getElementById("stuAddress");
//    var StudentPH= document.getElementById("stuphone");

//    var requestURL="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
//    var request = new XMLHttpRequest();
//    request.open('Get',requestURL);
//    request.responseType="json";
//    request.send();
//    request.addEventListener("load",reqListener);
























var student={
    name:"Bob",
    lname:"Jones",  
    music: ["Rock","HipHop"," Folk"," Country"," RagTime"],
    Year: 1967,
    courses:[
        {courseNum:"CS464", courseName:"Web Development"},
        {courseNum:"GS443",courseName:"Global positioning"},
        {courseNum:"DS332",courseName:"Data Structures"}
        
    ],
       BIO: function (){
           return "My name is "+this.name+" "+this.lname+" "+"and I like "+this.music;
       },
       CoursesDone: function () {
           var sad="";
           for(let n of this.courses)
           {
            sad=sad+n.courseNum+" "+n.courseName+"\n";
        
           }
           return sad;
       }
}

console.log(student.BIO());
console.log(student.CoursesDone());

