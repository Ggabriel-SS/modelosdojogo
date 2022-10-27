let pFogo = new Image()
let pAgua = new Image()
let pAr = new Image()
let pTerra = new Image()
let ataqueAgua = new Image()
let ataqueFogo = new Image()
let ataquefortefogo = new Image()
let escudoagua = new Image()
let escudodefogo = new Image()
let botfescudo = new Image()
let botfespada = new Image()
let botaescudo = new Image()
let botaespada = new Image()
ataquefortefogo.src = 'imagens/personagens/fogo/ataqueforteesquerdo.png'
ataqueAgua.src ='imagens/personagens/agua/ataqueagua.png'
ataqueFogo.src = "imagens/personagens/fogo/ataquedefogo.png"
pFogo.src = 'imagens/personagens/fogo/spritesdefogo.png'
pAgua.src = 'imagens/personagens/agua/aguaanimado1.png'
background.src = 'imagens/recursos/praia.png'
escudoagua.src='imagens/personagens/agua/escudodeagua.png'
escudodefogo.src='imagens/personagens/fogo/escudodefogo.png'
botaescudo.src = 'imagens/personagens/agua/escudobot.png'
botaespada.src = 'imagens/personagens/agua/espadabot.png'
botfescudo.src = 'imagens/personagens/fogo/escudobot.png'
botfespada.src = 'imagens/personagens/fogo/espadabot.png'
let rec = {
  xRec: 0,
  yRec: 100,
  lRec: 0,
  aRec: 60,
  x: 0,
  y: 0,
  l:0,
  a: 100

}
let aguap = new personagem(canvas.width - 130, canvas.height - 140,110,110,5,125,95,95,500,40)
let fogop = new personagem(5,canvas.height - 140, 110,110,5,5,95,95,400,55)
let placar = new telas(15,15,250,15)
let placarp2 = new telas(canvas.width - placar.x - placar.l,placar.y,placar.l,placar.a)
let pjuiz = new telas(placar.x + placar.l,placar.y/2, placarp2.x - (placar.x + placar.l), 40)
let energia1 = new telas(placar.x,placar.y + placar.a + 2,5,placar.a)
let energia2 = new telas(placarp2.x + placarp2.l - 5,placarp2.y + placarp2.a + 2,5,placarp2.a)
 let i = 0
 let velo = 50
 let cont = 0
 let ani = 2
 let turnos = true
 let j = 0
 let k = 0
 let l = 0
function nivel1(){
  if(cont >= 9){
   aguap.inXr = 120*(i%4) + 5 
   fogop.inXr = 120*(i%4) + 5 
   i++
  } 
  cont = ++cont % 10
  back.desenha(background) 
  aguap.desenho(pAgua)
  fogop.desenho(pFogo)
  fogop.botoes(botfespada,0)
  fogop.botoes(botfescudo,37)
  aguap.botoes(botaescudo,0)
  aguap.botoes(botaespada,37)
  
  ctx.fillStyle = 'blue'
  for(j = 0; j < fogop.energia; j++){
  ctx.fillRect(energia1.x + j*10,energia1.y,energia1.l,energia1.a)
  }
  for(k = 0; k < aguap.energia; k++){
  ctx.fillRect(energia2.x - k*10,energia2.y ,energia2.l,energia2.a)
  }
  
  ctx.fillStyle = 'red'
  ctx.fillRect(placar.x,placar.y,placar.l,placar.a)
  ctx.fillRect(placarp2.x,placarp2.y,placarp2.l,placarp2.a)
  
  ctx.fillStyle = 'grey'
  ctx.fillRect(pjuiz.x,pjuiz.y,pjuiz.l,pjuiz.a)
  ctx.fillStyle = 'white'
  ctx.font = "10px Arial"
  ctx.fillText(fogop.vida, placar.x + 2, placar.y + 10)
  ctx.fillText(aguap.vida,placarp2.x + placarp2.l - 20,placarp2.y + 10)
  

  if(32 in a && !turnos){
aguap.verificador = true
turnos = true
  }
  if(aguap.verificador){
    aguap.ataque(ataqueAgua,120,-1,120*2)
    if(aguap.colisao(fogop.x + fogop.l, 0) && placar.l > 0){
      if(fogop.escud <= 0){
        fogop.vida -= aguap.dano1
        placar.l -= placar.l/(fogop.vida/fogop.dano1)
        } else {
      fogop.escud -= aguap.dano1
        }
      
    }
  }

  if(66 in a && aguap.energia >= 1 && !turnos && aguap.escud + aguap.vida*(20/100) <= aguap.vida){
  aguap.ver = true
  aguap.escud += aguap.vida*(20/100)
  aguap.energia += 1
  turnos = true
  }

  if(aguap.ver){
  ctx.fillStyle = 'blue'
  ctx.fillRect(placarp2.x + placarp2.l - aguap.escud/2,placarp2.y,aguap.escud/2,placarp2.a)
  ctx.fillStyle = 'white'
  ctx.font = "10px Arial"
  ctx.fillText(aguap.vida,placarp2.x + placarp2.l - 20,placarp2.y + 10)
    aguap.escudo(escudoagua,0)
    if(aguap.escud <= 0){
      aguap.ver = false
    }
}

  if(65 in a && turnos){
fogop.verificador = true
turnos = false
}

  if(83 in a && turnos && fogop.escud + fogop.vida*(20/100) <= placar.l){
    fogop.ver = true
    fogop.escud += fogop.vida*(20/100)
    fogop.energia += 1
    turnos = false
  }
  if(fogop.ver){
    fogop.escudo(escudodefogo, 15)
    ctx.fillStyle = 'blue'
    ctx.fillRect(placar.x,placar.y,fogop.escud,placar.a)
    ctx.fillStyle = 'white'
    ctx.font = "10px Arial"
    ctx.fillText(fogop.vida,placar.x + 2,placar.y + 10)
    if(fogop.escud <= 0){
      fogop.ver = false
    }

  }
  if(fogop.verificador){
    fogop.ataque(ataqueFogo,120,1,0)
    if(fogop.colisao(aguap.x,1) && placarp2.l > 0){
      
      if(aguap.escud <= 0){
      aguap.vida -= fogop.dano1
      placarp2.x += placarp2.l/(aguap.vida/fogop.dano1)
      placarp2.l -= placarp2.l/(aguap.vida/fogop.dano1)
      } else {
        aguap.escud -= fogop.dano1
      }
    }
  }

  if(fogop.vida <= 0 || aguap.vida <= 0){
    //ctx.clearRect(0,0,600,400)
  }
  
  if(l < 100)
  l++
  fogop.ataqueforte(rec,ataquefortefogo,l)
}
let teste1 = new Image()
teste1.src = 'imagens/personagens/fogo/teste.png'

function teste(){
  ctx.clearRect(0,0,300,300)
  if(i < 40)
  i++
  ctx.drawImage(teste1,rec.xRec + (j++%3)*40,rec.yRec,rec.lRec + i,rec.aRec + i,100,100,rec.l + i,rec.a + i)
}
//setInterval(teste,100)
setInterval(nivel1,100)
document.addEventListener('keydown', function(e){
    a[e.keyCode] = true
   }, false)
document.addEventListener('keyup', function(e){
    delete a[e.keyCode] 
   }, false)