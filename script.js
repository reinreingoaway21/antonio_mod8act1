var fname = prompt("Please input your full name:")
var username = prompt("Please input your username:")
if (confirm("What is your gender? \n Click OK if you are a male \n Click Cancel if Female")== true){
    alert("Your profile gender is set to MALE");
    var gender = "M";
}else{
    alert("Your profile gender is set to FEMALE");
    var gender = "F"
}

var year = prompt("Please enter your Birth Year:")
var age = 2023 - year;
var desc = prompt("Please type a creative description of yourself")
if (confirm("Do you want to use a custom profile picture?")){
    var img = prompt("Please enter the file name of the picture. (Ex: slay.jpg )");
    alert("Profile picture has been updated.");
}else{
    alert("Ahh so wala image :<.");
}


document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gender;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src= img;