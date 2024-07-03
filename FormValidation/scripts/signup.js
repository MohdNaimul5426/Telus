function validation(){
    let name=document.querySelector("#name").value;
    let user=document.querySelector("#user").value;
    let pass=document.querySelector("#pass").value;
    let confirmpass=document.querySelector("#conpass").value;
    let mobileNumber=document.querySelector("#mobileNumber").value;
    let emails=document.querySelector("#emails").value;

    if(name==""){
        document.querySelector("#Name").innerHTML=" ** Please fill the Name field";
        return false;
    }
    if(emails==""){
        document.querySelector("#emailids").innerHTML=" **  Please fill the Email id field";
        return false;
    }
    if(emails.indexOf('@')<=0){
        document.querySelector("#emailids").innerHTML=" ** Invalid Email";
        return false;
    }
    if(emails.charAt(emails.length-4) !="." && emails.charAt(emails.length-3) !="."){
        document.querySelector("#emailids").innerHTML=" ** Invalid Email";
        return false;
    }
    if(user==""){
        document.querySelector("#username").innerHTML=" **  Please fill the Username field";
        return false;
    }
    if(!isNaN(user)){
        document.querySelector("#username").innerHTML=" **  Only characters are allowed";
        return false;
    }
    if(pass==""){
        document.querySelector("#password").innerHTML=" **  Please fill the password field";
        return false;
    }
    if(pass.length<=5 || pass.length>20){
        document.querySelector("#password").innerHTML=" **  Password length must be between 5 and 20";
        return false;
    }
    if(pass!=confirmpass){
        document.querySelector("#confirmpass").innerHTML=" **  Password mismatch";
        return false;
    }
    if(confirmpass==""){
        document.querySelector("#username").innerHTML=" **  Please fill the confirmpassword field";
        return false;
    }

    if(mobileNumber==""){
        document.querySelector("#mobileno").innerHTML=" **  Please fill the Mobile Number field";
        return false;
    }
    if(isNaN(mobileNumber)){
        document.querySelector("#mobileno").innerHTML=" **  user must write digits only not characters";
        return false;
    }
    if(mobileNumber.length!=11){
        document.querySelector("#mobileno").innerHTML=" **  Mobile number must be 11 digit only";
        return false;
    }

    

}