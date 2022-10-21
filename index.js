
const mario= document.querySelector('.mario');
const barril= document.querySelector('.barril');
const barril2= document.querySelector('.barril2');
const contador = document.getElementById('contador');
const moverNuvem = document.getElementById('.moverNuvem');
tempo =1;
const pulo=()=>{
   mario.classList.add('pulo')      
   
  
   setTimeout(()=>{
    mario.classList.remove('pulo')   
   },600)
 }

const contaa =setInterval(()=>{
   
  contador.innerHTML =`Tempo:${tempo++}` ; 

  
},1000)


const fase1= setTimeout (()=>{
barril2.style.display= "block "
   
},2000)

const fase2= setTimeout (()=>{
  barril2.style.animation="  moverBarril 2s infinite linear "
     
  },4000)
  
 
    

const loop = setInterval(()=>{
const barrilfim = barril.offsetLeft; 
const maisBarrill = barril2.offsetLeft;

const mariopula = +window.getComputedStyle(mario).bottom.replace("px", "")
 
if( maisBarrill<=96 && maisBarrill>0 && mariopula<=70 ){     
  barril.style.animation ="none" 
  barril.style.left =`${ barrilfim}px`; 
   
  barril2.style.animation ="none" 
  barril2.style.left =`${maisBarrill}px`; 
 
 
  mario.style.animation ="none" 
  mario.style.bottom=`${mariopula}px`; 



  
  mario.src ='./imagens/game-over.png'
  mario.style.width ="65px"
  mario.style.marginleft ="100px"
  mario.style.height='90px';

  clearInterval(loop)
  clearInterval(contaa)
 
 }
  
},100)


const loop2 = setInterval(()=>{
  const barrilfim = barril.offsetLeft; 
  const maisBarrill = barril2.offsetLeft;
  
  const mariopula = +window.getComputedStyle(mario).bottom.replace("px", "")
   
  if( barrilfim<=96 &&  barrilfim>0 &&  mariopula<=80  ){     
    barril.style.animation ="none" 
    barril.style.left =`${ barrilfim}px`; 
     
    barril2.style.animation ="none" 
    barril2.style.left =`${maisBarrill}px`; 
   
   
    mario.style.animation ="none" 
    mario.style.bottom=`${mariopula}px`; 
  
  
  
    
    mario.src ='./imagens/game-over.png'
    mario.style.width ="65px"
    mario.style.marginleft ="100px"
    mario.style.height='90px';
  
    clearInterval(loop2)
    clearInterval(contaa)
   
   }
    
  },100)
  

document.addEventListener('keydown', pulo)


function recarregarAPagina(){
    window.location.reload();
} 
