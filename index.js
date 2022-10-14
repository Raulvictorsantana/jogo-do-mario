
const mario= document.querySelector('.mario');
const barril= document.querySelector('.barril');

const pulo=()=>{
   mario.classList.add('pulo')      
   
  
   setTimeout(()=>{
    mario.classList.remove('pulo')
   },600)
  
   
 }
 
const loop = setInterval(()=>{
const barrilfim = barril.offsetLeft;
const mariopula = +window.getComputedStyle(mario).bottom.replace("px", "")

if(barrilfim<=96  &&barrilfim>0 && mariopula<=80){     
  barril.style.animation ="none" 
  barril.style.left =`${ barrilfim}px`;
 
  mario.style.animation ="none" 
  mario.style.bottom=`${mariopula}px`;
  mario.src ='./imagens/game-over.png'
  mario.style.width ="65px"
  mario.style.marginleft ="100px"
  mario.style.height='90px';

  clearInterval(loop)
  
 }
  
},100)

console.log ()


document.addEventListener('keydown', pulo)
