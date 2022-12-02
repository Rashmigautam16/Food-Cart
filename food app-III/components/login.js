
import navbar   from "./navbar.js";

document.getElementById("navbar").innerHTML=navbar()




let arr= JSON.parse(localStorage.getItem("signup"))
class User{
    #password
    constructor(email,password){
    
        this.email=email;
        this.password=password;
     }
    login(email,password){
        let flag=false;
        arr.forEach((el)=>{
            if(el.email==email && el.password==password){
                flag=true;
                alert("Login successful!");
                window.location.href="index.html";
                localStorage.setItem("login",true)
              
            }else if(el.email!=email){
             
                alert("User doesn't exist, Sign Up")
                window.location.href="signup.html";
            }else{
                alert("wrong credentials")
            }
            
        })
   }

}

document.getElementById("login").addEventListener("submit", function(){
    login(event)
    window.location.href="index.html"
})
let login=(event)=>{
    event.preventDefault();
    let form=document.querySelector("form")
   
    let email=form.email.value;
    let password=form.password.value;

    let c1=new User(email,password)
    c1.login(email,password);
}