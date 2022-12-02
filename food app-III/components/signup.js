
import navbar   from "./navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let arr= JSON.parse(localStorage.getItem("signup"))||[]
class User{
    #password
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
     }
    signup(name,email,password){
        let  res=true;

        arr.forEach((el)=>{
           if(el.email==email){
               res=false
           }
        })
   
        if(res==true){
           arr.push(this)
           localStorage.setItem("signup",JSON.stringify(arr))
           window.location.href="login.html"
        }else{
           alert("User all ready exist!")
           window.location.href="login.html"
        }
   }

}

document.getElementById("sign").addEventListener("submit", function(){
    signup(event)
   
})
let signup=(event)=>{
    event.preventDefault();
    let form=document.querySelector("form")
    let name=form.name.value;
    let email=form.email.value;
    let password=form.password.value;

    let c1=new User(name,email,password)
    c1.signup(name,email,password);
}