function fuja(){
    let botaoN = document.querySelector(".nao");

    let largura= window.innerWidth;
    let altura= window.innerHeight;

    let maxX = largura - botaoN.offsetWidth;
    let maxY = altura - botaoN.offsetHeight;

    const aleatorioX = Math.floor(Math.random()* maxX);
    const aleatorioY = Math.floor(Math.random()* maxY);

    botaoN.style.left = aleatorioX + "px";
    botaoN.style.top = aleatorioY + "px";

}