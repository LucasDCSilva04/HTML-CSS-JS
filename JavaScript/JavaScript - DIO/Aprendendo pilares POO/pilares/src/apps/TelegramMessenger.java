package apps;
import servico.ServicoMensagem;

public class TelegramMessenger extends ServicoMensagem{
    public void enviarMensagem() {
        System.out.println("Telegram Selecionado!");
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