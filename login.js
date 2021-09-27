function validateUser()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if((username=="newton"&& password=="newton123")||(username=="admin"&& password=="admin123"))
{
   // alert("login succesfully");
    //return false;
    document.getElementById("loginhead").innerHTML="Login Successfull...";
   // document.getElementById("loginhead").style.color = 'blue';
   //var msg = document.getElementById("loginhead").value;
   //msg.style.color = "orange";
}
else if(username==""&&password==""){
   // alert("field can't be empty");
    document.getElementById("loginhead").innerHTML="field can't be empty..."
      //document.getElementById("loginhead").style.color = "red";
}
else
{
    //alert("login failed. The username or password is incorrect");
    document.getElementById("loginhead").innerHTML="Login Failed..."

}
}