public class Usuario {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

            smartTv.diminuirVolume();
            System.out.println("Volume Atual ?: " + smartTv.volume);
            smartTv.diminuirVolume();
            System.out.println("Volume Atual ?: " + smartTv.volume);
            smartTv.diminuirVolume();
            System.out.println("Volume Atual ?: " + smartTv.volume);
            smartTv.aumentarVolume();
            System.out.println("Volume Atual ?: " + smartTv.volume);

            System.out.println("Tv Ligada ?: " + smartTv.ligada);
            System.out.println("Canal Atual ?: " + smartTv.canal);
            
        
        smartTv.ligar ();
            System.out.println("Tv Ligada ?: " + smartTv.ligada);
            
            System.out.println("Canal Atual ?: " + smartTv.canal);
        smartTv.mudarCanal(15);
            System.out.println("Canal Atual ?: " + smartTv.canal);
            
        
        smartTv.desligar ();
            System.out.println("Tv Ligada ?: " + smartTv.ligada);
    }
}
