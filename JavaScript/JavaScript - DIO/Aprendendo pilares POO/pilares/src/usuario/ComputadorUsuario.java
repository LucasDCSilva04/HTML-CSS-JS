package usuario;

import apps.FacebookMessenger;
import apps.MSNMessenger;
import apps.TelegramMessenger;
import servico.ServicoMensagem;
import java.util.Scanner;

public class ComputadorUsuario {
    public static void main(String[] args) {
        
        boolean op = true;
        
        do{
            try{
                Scanner in = new Scanner(System.in);
                System.out.println("Selecione o app que deseja utilizar \n 1 -> Facebook \n 2 -> Telegram \n 3 -> MSN");
                int appEscolhido = in.nextInt();

                ServicoMensagem smi = null;
                
                switch (appEscolhido) {
                    case 3:
                        smi = new MSNMessenger();
                        break;
                    case 2:
                        smi = new TelegramMessenger();
                        break;
                    case 1:
                        smi = new FacebookMessenger();
                        break;
                    default:
                        break;
                }

                smi.enviarMensagem();
                smi.receberMensagem();

                System.out.println("\n Deseja escolher outro app? \n 1 -> Sim \n 2 -> Não, quero desligar o sistema");
                int loop = in.nextInt();
                if (loop == 2) {
                    op = false;
                }
                }catch (Exception e){
                        System.err.println("\n Deve-se digitar um número de 1 a 3! \n");
                }

        }while(op == true);
    }
}