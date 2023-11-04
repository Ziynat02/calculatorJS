
//day and night start
let sun = document.querySelector(".sun");
let month = document.querySelector(".month");
let calculator = document.querySelector(".calculator");
month.addEventListener("click",()=>{
    sun.style.display="block";
    month.style.display="none";
    calculator.classList.toggle("lightCalculator");
    // clear.forEach(list=>{
    //     list.classList.toggle("lightClear");
    // });
    
});
sun.addEventListener("click",()=>{
    month.style.display="block";
    sun.style.display="none";
     calculator.classList.toggle("lightCalculator");
    // clear.classList.toggle("lightClear");
});
//day and night end

// click button start
 let input = document.querySelector("input");
input.addEventListener("click",()=>{
    
});
// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener("click",()=>{
//         if(this.innerHTML=="="){
//             value.innerHTML=eval(eval);
//         }else if(this.innerHTML=="CLR"){
//           value.innerHTML="";  
//         }else{
//             value.innerHTML+=this.innerHTML;
//         }
//     });
    
// }
//click button end