const btn = document.getElementById("btn");
const start = document.getElementById("start");
const number = document.getElementById("num");
number.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter') result();
})
const random = Math.round(Math.random()*100);
let count = 0;
let guesses = [];
function result(){
    guesses.push(number.value);
    count++;
    const existingDiv = document.getElementsByClassName("para");
    if(existingDiv.length > 0){
        for(let val of existingDiv)
        document.body.removeChild(val);
    }
    const para = document.createElement("div");
    para.className = "para";
 if(number.value > random) para.innerHTML = `Too high! <div>Your guesses are : ${guesses}</div>`
 else if(number.value < random) para.innerHTML = `Too low! <div>Your guesses are : ${guesses}</div>`
 else{ 
    para.innerHTML = `Hurray You won! After ${count} tries. <div>Accuracy : ${100-count}%</div><div>Your guesses are : ${guesses}</div>`
    start.style.display = "unset";

}
 document.body.appendChild(para);
}
btn.addEventListener("click",result);

start.addEventListener("click",()=>{ location.reload(); })