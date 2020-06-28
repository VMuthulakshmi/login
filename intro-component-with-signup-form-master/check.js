window.onload = init;

function init() {
//prevent from autoreload after submit
  let initForm = document.getElementById("my_form");
  initForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
}
function check_email(email){
 //  alert("here for check")
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }else{
   //  alert("wrong email")
   return (false)
  }
}
function check() {
    
    var sts_fname=false
    var sts_lname=false
    var sts_email=false
    var sts_pwd=false
//    console.log(!sts_email)
    // const form=document.getElementById('my_form');
      const fName = document.getElementById('fName');
      const lName = document.getElementById('lName');
      const email = document.getElementById('email');
      const pwd = document.getElementById('pwd');
     // var submitbtn = document.getElementById('submit');
     if(!fName.value && !sts_fname){
        throwmsg(fName,"errorfname","first name cannot be empty")
      //  alert("first name cannot be empty");
        sts_fname=true
     }else {
        removemsg("errorfname",fName)
        //alert("remove");
        sts_fname=false
     }
     if(!lName.value && !sts_lname){
        throwmsg(lName,"errorlname","last name cannot be empty")
    //    alert("last name cannot be empty");
        sts_lname=true
     }else {
        removemsg("errorlname",lName)
  //      alert("remove");
        sts_lname=false
     }
     if(!pwd.value && !sts_pwd){
        throwmsg(pwd,"errorpwd","Password cannot be empty")
//        alert("password cannot be empty");
        sts_pwd=true
     }else{
        // alert("else of pwd")
        removemsg("errorpwd",pwd)
        sts_pwd=false
     }
    if(check_email(email.value)){
      if(!email.value && !sts_email){
         throwmsg(email,"erroremail","Looks like this is not email")
        // alert("name cannot be empty");
         sts_email=true
      }else{
         removemsg("erroremail",email)
         sts_email=false
      }
     }
     else{
      throwmsg(email,"erroremail","Looks like this is not email")
        // alert("name cannot be empty");
         sts_email=true
     }
   
     // alert("VEtri.......fnam"+fName);
      console.log("clicked");
    }  
function throwmsg(input_text,element,msg){
    let error=document.getElementById(element)
    error.innerHTML=msg
    error.style.color="Red"
 //   input1=document.getElementById(input_text)
    if(input_text.id!="email"){
        input_text.style.border="2px solid red";
}
    else{
        input_text.style.border="2px solid red";
        input_text.placeholder="email@example/com"
    }
    console.log(msg);
   console.log(input_text);
    console.log(element)
}
function removemsg(input_text,change_red){
 element=document.getElementById(input_text)
    console.log(element)
  //  alert("remove"+input_text.id+change_red.id)
 element.style.visibility="hidden" 
 change_red.style.border="2px solid #ccc";
  
}