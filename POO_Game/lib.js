let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
class Player{
    constructor(pontox, pontoy, largura, altura,vel, img){
        this.x = pontox,
        this.y = pontoy,
        this.altura = altura,
        this.largura = largura,
        this.vida = 3,
        this.velocidade = vel,
        this.img = new Image(),
        this.img.src = img
    }
    colidir(Inimigo){
        if(Inimigo.x + Inimigo.altura > this.y && Inimigo.x > this.x && Inimigo.x + Inimigo.largura < this.x + this.largura){
            console.log("Colidiu")
            this.vida -= 1;
        }
    }
    desenhar(){
        ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura)
    }
    cair(){
        this.y += this.velocidade
    }
    voltar(){
        if(this.y >= 782){
            this.y = 0
        }
    }
    moverDireita(){
        if(this.x + this.largura < 500){
            this.x += 100
        }
    }
    moverEsquerda(){
        if(this.x > 0){
            this.x -= 100
        }
    }
}
