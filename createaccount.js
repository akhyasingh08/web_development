document.getElementById("SIGN UP").addEventListener("click",function(event){
    event.preventDefault();
    checkData();
});     
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var pass = document.getElementById("pass");
    function checkData(){
        var usernameValue =username.value.trim();
        var emailValue =email.value.trim();
        var passwordValue =password.value.trim();
        var passValue =pass.value.trim();
        if(usernameValue==""){
        setError(username , "username can't be blank");
        }else{
        setSuccess(username);
        }
        if(emailValue==""){
            setError(email , "email can't be blank");
        }else if(isEmail(emailValue)){
            setError(email,"email not valid");
        }
        else{
            setSuccess(email);
        }
        if(passwordValue==""){
        setError(password , "username can't be blank");
        }else{
        setSuccess(password);
        }
        if(passValue==""){
        setError(pass , "username can't be blank");
        }else if(passwordValue!==passValue){
            setError(pass , "password not matched");
        }
        else{
        setSuccess(pass);
        }
    }
function setError(u , msg){
    var parentBox = u.parentElement;
    parentBox.className="input-field error";
    var span = parentBox.querySelector("span");
    var fa= parentBox.querySelector(".fa");
    span.innerText = msg;
    fa.className="fa fa-circle-exclamation-circle";
}
function setSuccess(u){
    var parentBox = u.parentElement;
    parentBox.className="input-field success";
    var fa= parentBox.querySelector('.fa');
    fa.className="fa fa-circle-check";
}
function isEmail(e){
    var reg=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}