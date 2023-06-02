package apps;
import servico.ServicoMensagem;

public class FacebookMessenger extends ServicoMensagem{
    public void enviarMensagem() {
        System.out.println("Facebook Selecionado!");
        validarConectadoInternet();
        System.out.println("Enviando Mensagem");
        salvarHistoricoMessenger();
    }

    public void receberMensagem() {
        System.out.println("Recebendo Mensagem");
    }

    private void salvarHistoricoMessenger() {
        System.out.println("Salvando histórico");
    }
}