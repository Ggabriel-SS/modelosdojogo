import java.util.Random; 
public class Luta{
    Random rand = new Random();
    private Lutador desafiado; 
    private Lutador desafiante;
    private int rounds;
    private boolean aprovada;
    public Luta(Lutador des, Lutador dsn, int ro){
        this.setdesafiado(des);
        this.setdesafiante(dsn);
        this.setrounds(ro);
        this.marcarluta(des, dsn);
    }
    public Lutador getdesafiado(){
        return this.desafiado;
    }
    public Lutador getdesafiante(){
        return this.desafiante;
    }
    public int getrouds(){
        return this.rounds;
    }
    public boolean getaprovada(){
        return this.aprovada;
    }
    public void setdesafiado(Lutador des){
        this.desafiado = des;
    }
    public void setdesafiante(Lutador dsn){
        this.desafiante = dsn;
    }
    public void setrounds(int ro){
        this.rounds = ro;
    }
    public void setaprovada(boolean ap){
        this.aprovada = ap;
    }
    public void marcarluta(Lutador l1, Lutador l2){
        if(l1.getcategoria().equals(l2.getcategoria())  && l1 != l2){
            this.setaprovada(true);
            this.setdesafiado(l1);
            this.setdesafiante(l2);
        }else{
            this.setaprovada(false);
            this.setdesafiado(null);
            this.setdesafiante(null);
        }
    }
    public void lutar(){
       if(this.aprovada){
           System.out.println("--- Desafiado ---");
           this.desafiado.apresentar();
           System.out.println("++= Desafiante =++");
           this.desafiante.apresentar();
           int vencedor = rand.nextInt(3);
           switch(vencedor){
               case 0: System.out.println("Empatou!");
               desafiado.empatarluta();
               desafiante.empatarluta();
               break;
               case 1: System.out.println(desafiado.getnome() + " Ganhou");
               desafiado.ganharluta();
               desafiante.perderluta();
               case 2: System.out.println(desafiante.getnome() + " Ganhou");
               desafiante.ganharluta();
               desafiado.perderluta();
           }
       } else {
           System.out.println("Luta não pode acontecer");
       } 
    }
}




