var my_div=document.querySelectorAll("#plot");
console.log(my_div)
var i=0;

function myFunction() {
    i = Math.min(Math.max(parseInt(i), 0), 171);
    for(let j=0;j<4;j++){
        my_div[j].innerHTML ="<img src='plots/"+(i+j)+".png' height=200px width=200px>"; 
        }
  }  
function nextImage() {   
    i=i+4;   
    myFunction();
}

function prevImage() { 
    i=i-4;
    myFunction();
}