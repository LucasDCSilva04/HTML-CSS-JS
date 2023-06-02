package servico;

public abstract class Padrao {
    public abstract void iniciar();

    protected void validarConectadoInternet() {
        System.out.println("Validando Internet");
    }
}