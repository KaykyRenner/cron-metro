function relogio(){
const container = document.querySelector('.container')
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
iniciar.addEventListener('click',function(event){
    relogio.style.color='black'
    clearInterval(Timer)
    IniciaRelo()
})
pausar.addEventListener('click',function(event){
    relogio.style.color='red'
    clearInterval(Timer)
})
zerar.addEventListener('click',function(event){
    clearInterval(Timer)
    seconds-=seconds
    relogio.innerHTML = `00:00:00`
})
function CriaHoras(){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}
let seconds = 0;

function IniciaRelo(){
        Timer = setInterval(function(){
        console.log(CriaHoras(seconds))
        seconds+=1;
        relogio.innerHTML = CriaHoras(seconds)
    }, 1000)}
IniciaRelo()
}
relogio()
