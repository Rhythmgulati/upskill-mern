let namesection = document.querySelector("header h1 span");
let nameinput = document.querySelector(".inputs input");
let btn = document.querySelector(".inputs button");
let boxes = document.querySelectorAll(".box");

btn.addEventListener("click",()=>{
    namesection.textContent =  nameinput.value;
})
boxes.forEach(function(box){
    box.addEventListener("click",function(){
        var color = this.getAttribute("data-color");
        box.style.backgroundColor=color;
    })
})
