package usuario;

import apps.MusicPlayer;
import apps.Browser;
import apps.Phone;
import servico.Padrao;
import java.util.Scanner;

public class ComputadorUsuario {
    public static void main(String[] args) {
        
        boolean op = true;
        
        do{
            try{
                Scanner in = new Scanner(System.in);
                System.out.println("Selecione o app que deseja utilizar \n 1 -> Browser \n 2 -> Phone \n 3 -> Music Player");
                int appEscolhido = in.nextInt();

                Padrao smi = null;
                
                switch (appEscolhido) {
                    case 1:
                        smi = new Browser();
                        break;
                    case 2:
                        smi = new Phone();
                        break;
                    case 3:
                        smi = new MusicPlayer();
                        break;
                    default:
                        break;
                }

                smi.iniciar();

                System.out.println("\n Deseja escolher outro app? \n 1 -> Sim \n 2 -> Não, quero desligar o sistema");
                int loop = in.nextInt();
                
                if (loop == 2) {
                    op = false;
                }

                in.close();

                }catch (Exception e){
                        System.err.println("\n Deve-se digitar um número de 1 a 3! \n");
                }

        }while(op == true);
    }
}