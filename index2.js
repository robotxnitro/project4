
   let knight = document.getElementById('knight');

   function changeColor(){
       let red = document.getElementById('red').value;
       let green =document.getElementById('green').value;
       let blue = document.getElementById('blue').value;
       knight.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`;
   }
   function rangeValue(value){
    const root = document.documentElement
    root.style.setProperty('--opacity1', (100 -value)/100);
    root.style.setProperty('--opacity2', value/100 );
}


   document.getElementById('red').addEventListener("input",changeColor);
   document.getElementById('green').addEventListener("input",changeColor);
   document.getElementById('blue').addEventListener("input",changeColor);