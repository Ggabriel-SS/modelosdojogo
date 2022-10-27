public class Lutador{
    private String nome;
    private String nacionalidade;
    private String categoria;
    private int idade, vitorias, derrotas, empates;
    private float peso, altura; 
    public void setnome(String no){
        this.nome = no;
    }
    public Lutador(String no, String na, int id, float al, float pe, int vi, int de, int em){
        this.setnome(no);
        this.setnacionalidade(na);
        this.setidade(id);
        this.setaltura(al);
        this.setpeso(pe);
        this.setvitoria(vi);
        this.setderrotas(de);
        this.setempates(em);
        this.setnome(no);
    }
    public void setcategoria(){
        if(peso < 52.2){
            this.categoria = "Inválido";
        } else if(peso <= 70.3){
            this.categoria = "Leve";
        } else if(peso < 83.9){
            this.categoria = "Médio";
        } else if(peso < 120.2){
            this.categoria = "Pesado";
        } else {
            this.categoria = "Inválido";
        }
        
    }
    public void setnacionalidade(String na){
        this.nacionalidade = na;
    }
    public void setidade(int id){
        this.idade = id;
    }
    public void setvitoria(int vi){
        this.vitorias = vi;
    }
    public void setderrotas(int de){
        this.derrotas = de;
    }
    public void setempates(int em){
        this.empates = em;
    }
    public void setpeso(float pe){
        this.peso = pe;
        this.setcategoria();
        }
    public void setaltura(float al){
        this.altura = al; 
    }
    
    public String getnome(){
        return this.nome;
    }
    public String getnacionalidade(){
        return this.nacionalidade;
    }
    public String getcategoria(){
        return this.categoria;
    }
    public int getidade(){
        return this.idade;
    }
    public int getvitorias(){
        return this.vitorias;
    }
    public int getderrotas(){
        return this.derrotas;
    }
    public int getempates(){
        return this.empates;
    }
    public float getaltura(){
        return this.altura;
    }
    public float getpeso(){
        return this.peso;
    }
    
    public void apresentar(){
        System.out.println("Lutador: " + this.getnome());
        System.out.println("Origem: " + this.getnacionalidade());
        System.out.println(this.getidade() + " anos");
        System.out.println(this.getaltura() + "m de altura");
        System.out.println("Pesando: " + this.getpeso());
        System.out.println("Ganhou:" + this.getvitorias());
        System.out.println("Perdeu: " + this.getderrotas());
        System.out.println("Empatou: " + this.getempates());
        
    }
    public void status(){
        System.out.println( this.getnome());
        System.out.println("É um peso " + this.getcategoria());
        System.out.println("Com" + this.getvitorias() + " vitórias");
        System.out.println( this.getderrotas()+ " derrotas");
        System.out.println(this.getempates() + "empates");
    }
    public void ganharluta(){
        this.setvitoria(this.getvitorias() + 1);
    }
    public void perderluta(){
        this.setderrotas(this.getderrotas() + 1);
    }
    public void empatarluta(){
        this.setempates(this.getempates() + 1);
    }
}









