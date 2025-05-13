let countdown = document.querySelector('#countdown');
let inputCountdown = document.querySelector('#input-countdown');
// button
let avvioBtn = document.querySelector('#avvioBtn')
let pausaBtn = document.querySelector('#pausaBtn')
let resetBtn = document.querySelector('#resetBtn')

let interval
let counter
let pausedCountdown = 0

avvioBtn.addEventListener('click', ()=>{
    clearInterval(interval)
    counter = inputCountdown.value 

    if(pausedCountdown !=0){
        counter = pausedCountdown
    }
    
    interval = setInterval(()=>{

        if(counter < 1){
            clearInterval(interval)
            countdown.innerHTML = `Time's up!`
        }else{
            countdown.innerHTML = counter
            counter --
            inputCountdown.value = '' 
        }

    }, 1000);


})

pausaBtn.addEventListener('click', ()=>{
    clearInterval(interval)
    pausedCountdown = counter
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(interval)
    counter.value = '' 
    countdown.innerHTML = ''
    counter = 0
    pausedCountdown = 0
})