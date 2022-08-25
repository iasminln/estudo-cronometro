const btnIniciar = document.querySelector('.cronometro .btn-iniciar')
const btnParar = document.querySelector('.cronometro .btn-parar')
const timerCronSeg = document.querySelector('.cronometro .timerSeg')
const timerCronMin = document.querySelector('.cronometro .timerMin')
const timerCronHora = document.querySelector('.cronometro .timerHora')

let seg = 0
let min = 0
let hora = 0
let contagem 

function iniciarCronometro () {

  contagem = setInterval(()=>{
    timerCronSeg.innerText = seg++

    if(seg === 5){
      min++
      seg=0
     
 
    } 
    
    if(min === 5){
      hora++
      min=0
      
      
    }

    timerCronMin.innerText = min
    timerCronHora.innerText = hora


  }, 500)

  

}

function pararCronometro (){
  clearInterval(contagem)

}

btnIniciar.addEventListener("click", iniciarCronometro)
btnParar.addEventListener("click", pararCronometro)

