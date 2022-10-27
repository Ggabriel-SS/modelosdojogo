let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
function colisao(ataque, personagem){
    if(ataque < personagem){
      return true  
    }
    else{
        return false
    }
}
/*
function ataque(atq,ax,ay,iX,iY,Lr,Ar,x,){
        //ctx.clearRect(0,0,600,400)
        //ctx.drawImage(atq,iX,((i++)%8)*iY,Lr,Ar,ax += velo++,ay, 100, 100)
        ax += (velo++)*3
        ctx.drawImage(atq,iX,((i++)%8)*iY,Lr,Ar,ax,ay, 100, 100)
       if(colisao(canvas.width, ax + 200)){
        ax = x
        velo = 1
        verificador = false
       } 
} 
function ataque(atq,ax,ay,vel,iX,iY,Lr,Ar){
    setInterval(() => {
        ctx.clearRect(0,0,600,400)
        ctx.drawImage(atq,iX,((i++)%8)*iY,Lr,Ar,ax += vel,ay, 100, 100)
       //if(colisao(ax + 80, personagem1.x)){}
    }, 1)

}
*/
class telas{
    constructor(x,y,l,a){
        this.x = x,
        this.y = y,
        this.l = l,
        this.a = a
    }
    desenha(nome){
        ctx.drawImage(nome,this.x,this.y,this.l,this.a)
    }
}
class personagem{
     
    constructor(x, y, largura, altura, iX,iY,Lr,Ar, vida,dano) {
        this.x = x,
        this.y = y,
        this.l = largura,
        this.a = altura,
        this.inXr = iX,
        this.inYr = iY,
        this.lrec = Lr,
        this.Arec = Ar
        this.ax = this.x
        this.verificador = false
        this.vida = vida
        this.dano1 = dano
        this.escud = 0
        this.ver = false
        this.energia = 1
    }
     desenho(nome){ 
         ctx.drawImage(nome,this.inXr,this.inYr,this.lrec,this.Arec,this.x,this.y,this.l,this.a)
    }
    colisao(colisor, p){
        if(p == 1){
        if((this.ax + 90) > colisor){
          
          this.ax = this.x
          this.verificador = false
          
            return true  
          }
          else{
            return false
          }
      } else {
        if((this.ax + 45) < colisor){
            this.ax = this.x
          this.verificador = false
            return true  
          }
          else{
              return false
          }
    }
    }
    ataque(atq, orient, p, rec){
        this.ax += velo*p
        ctx.drawImage(atq,orient,rec,90,90,this.ax + 10,this.y, 100, 100)
    }
    ataqueforte(rec,img,i){
        ctx.drawImage(img,rec.xRec + (i%3)*100,rec.yRec,rec.lRec + i,rec.aRec + i,this.x + 30 + i,this.y,rec.l + i,rec.a)
    }
    escudo(escudo, pos){
        ctx.drawImage(escudo,pos + this.inXr,this.inYr,this.lrec,this.Arec,pos + this.x,this.y, this.l + pos, this.a + pos)
    }
    botoes(bot, pos){
        ctx.drawImage(bot, 0,0,32,32,this.x + pos,this.y + this.a - 8, 32,32)
    }

   
}
class poderes{
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.veloci = 3
    }
    
}
