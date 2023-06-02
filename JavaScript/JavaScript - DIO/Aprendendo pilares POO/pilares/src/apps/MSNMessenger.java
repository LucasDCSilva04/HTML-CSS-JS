package apps;
import servico.ServicoMensagem;

public class MSNMessenger extends ServicoMensagem{
    public void enviarMensagem() {
        System.out.println("MSN Selecionado!");
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