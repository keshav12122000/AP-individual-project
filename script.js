function validate()
{
    var username=document.getElementById("uname");
    var password=document.getElementById("pass");
    var email=document.getElementById("email");

    if(username.value =="" || password.value=="")//if values are NULL
    {
        alert("Don't Disclose Your Details");
    }
    else{
        alert("successfully Created");
    }

}