var my_div=document.querySelectorAll("#plot");
console.log(my_div)
var i=0;

function myFunction() {
    i = Math.min(Math.max(parseInt(i), 0), 171);
    for(let j=0;j<my_div.length;j++){
        my_div[j].innerHTML ="<img src='images/plots/"+(i+j)+".png' height=250px width=250px>"; 
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