
let Nave = new Player(275,780,50,50,"imagens/nave.png")
let back = new Player(0,0,650,1156,'imagens/background.jpg')
let inimigo1 = new Player(0,0,100,100,1,'imagens/inimigo1.png')
let inimigo2 = new Player(295,0,20,100,1.5,'imagens/inimigo2.png')
let inimigo3 = new Player(400,0,100,100,1.9,'imagens/inimigo3.png')
let ms = 0
let ss = 0
let mm = 0
function jogo(){
    back.desenhar() 
    Nave.desenhar()
    inimigo1.desenhar()
    inimigo2.desenhar()
    inimigo3.desenhar()
    inimigo1.cair()
    inimigo2.cair()
    inimigo3.cair()
    inimigo1.colidir(Nave)
    inimigo2.colidir(Nave)
    inimigo3.colidir(Nave)
    inimigo1.voltar()
    inimigo2.voltar()
    inimigo3.voltar()
    time()
    if((ss == 10 || ss == 30) && ms == 0){
        inimigo1.velocidade += 1 
        inimigo2.velocidade += 1
        inimigo3.velocidade += 1
    }
    ctx.fillStyle = 'white'
    ctx.font = "25px Arial"
    ctx.fillText(`${mm}:${ss}:${ms}`,220,100)
}
function direita(){
    Nave.moverDireita()
}
function esquerda(){
    Nave.moverEsquerda()
}
function time(){
    ms++
    if(ms == 100){
            ss++
            ms = 0
        if(ss == 59){
            mm++ 
            ss = 0
        }
    }
}
setInterval(jogo,10)
