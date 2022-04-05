
let date = new Date().getHours();
console.log(date);
if(date<=6){
    let div = document.getElementById('first');
    div.style.backgroundColor='black'
}
else{
    let div= document.getElementById('first');
    div.style.backgroundColor='white';
}