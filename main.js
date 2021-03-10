const addedtegs = document.querySelectorAll(".content span")
const h1 = document.querySelector(".red").innerHTML

const red = "helow"
const funcS = () =>{
    for(i = 0; i < red.length; i++){
        console.log(red[i]);
        red.innerHTML = `<h1>${red[i]}</h1>`
        
    }
}

funcS()




addedtegs.forEach((teg)=>{
    teg.classList.add("desc")

})

