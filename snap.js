
const username=document.getElementById("username");
const password=document.getElementById("password");
const loginBtn=document.getElementById("login");

loginBtn.disabled=true;
    function snap(){
            if( username.value!=="" && password.value!==""){
                 loginBtn.style.backgroundColor="yellow";
                loginBtn.style.color="black";
                loginBtn.disabled=false;
         }
        }
