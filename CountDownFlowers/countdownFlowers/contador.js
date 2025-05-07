const Contagem = document.getElementById('contador');
const  inputValue = document.querySelector('input');
const botaoContar = document.getElementById('btnContar');

botaoContar.addEventListener('click',function (e){
    let numeros=0;

    numeros=inputValue.value;
    inputValue.value=0;

    Contagem.innerText=numeros;


})

function Timer(){
    const diferenca=1;
    const algo = numeros - diferenca;
    Contagem.innerText=algo;

}
setInterval(Timer,1000);
