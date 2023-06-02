package servico;

public abstract class ServicoMensagem {
    public abstract void enviarMensagem();

    public abstract void receberMensagem();

    protected void validarConectadoInternet() {
        System.out.println("Validando Internet");
    }
}