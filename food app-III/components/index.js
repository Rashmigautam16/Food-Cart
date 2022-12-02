

import navbar from "./navbar.js";

document.getElementById("navbar").innerHTML=navbar()



import { getdata,append} from "./search.js";

document.getElementById("query").addEventListener("input",function(){
    debounce(search,1000);  
})

let search=async()=>{
    let query=document.getElementById("query").value;
    let res=await getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    
    let container=document.getElementById("container");
    
    append(res,container);
}

let id;
let debounce=(func,delay)=>{
    if(id){
        clearInterval(id);
    }
    id=setTimeout(()=>{
        func()
    },delay)
}