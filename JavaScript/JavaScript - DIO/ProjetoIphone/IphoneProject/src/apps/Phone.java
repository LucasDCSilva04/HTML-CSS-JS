package apps;
import servico.Padrao;

public class Phone extends Padrao{
    public void iniciar() {
        System.out.println("Telefone Selecionado!");
        validarConectadoInternet();
        ligar();
        atender();
        iniciarCorreioVoz();
    }
    private void ligar() {
        System.out.println("Fazendo chamada Mensagem");

    }
    private void atender() {
        System.out.println("Atendendo chamada Mensagem");
    }

    private void iniciarCorreioVoz() {
        System.out.println("Correio de voz");
    }
}