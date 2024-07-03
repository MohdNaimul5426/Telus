function validation(){
    let user=document.querySelector("#user").value;
    let pass=document.querySelector("#pass").value;

    if(user==""){
        document.querySelector("#username").innerHTML=" ** Please fill the username field"
        return false;
    }
    if(user.length<=2 || user.length>20){
        document.querySelector("#username").innerHTML=" ** Username length must be between 2 and 20"
        return false;
    }
    if(!isNaN(user)){
        document.querySelector("#username").innerHTML=" ** Only characters are allowed"
        return false;
    }
    if(pass==""){
        document.querySelector("#passwords").innerHTML=" **  Please fill the password field";
        return false;
    }
    if(pass.length<=5 || pass.length>20){
        document.querySelector("#password").innerHTML=" **  Password length must be between 5 and 20";
        return false;
    }
    if(pass !=confirmpass){
        document.querySelector("#confirmpass").innerHTML=" **  Password doesnot match the confirm password";
        return false;
    }
}