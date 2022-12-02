


//`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
let getdata =async(url)=>{
    let res=await fetch(url)
    let data=await res.json()

    return data.meals;
    
}

function append(data,container){

    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.strMealThumb
        // let idMeal=document.createElement("h2")
        // idMeal.innerText=el.idMeal;
        let strMeal=document.createElement("h2");
        strMeal.innerText=el.strMeal;
        let strInstructions=document.createElement("p");
        strInstructions.innerText=el.strInstructions;

        div.append(img,strMeal,strInstructions);

        container.append(div);
    })
}

export {getdata,append}