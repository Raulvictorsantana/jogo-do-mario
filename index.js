
const mario= document.querySelector('.mario');

const pulo=()=>{
   mario.classList.add('pulo')      
  
   setTimeout(()=>{
    mario.classList.remove('pulo')


   },600)
   
 }
 
document.addEventListener('keydown', pulo)
