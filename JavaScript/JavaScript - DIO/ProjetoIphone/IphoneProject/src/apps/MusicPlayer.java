package apps;
import servico.Padrao;

public class MusicPlayer extends Padrao{
    public void iniciar() {
        System.out.println("MusicPlayer Selecionado!");
        validarConectadoInternet();
        tocar();
        pausar();
        selecionarMusica();
    }
    private void tocar() {
        System.out.println("Tocando música");
    }

    private void pausar() {
        System.out.println("Pausando Música");
    }

    private void selecionarMusica() {
        System.out.println("Selecionando música");
    }
}