package apps;
import servico.Padrao;

public class Browser extends Padrao{
    public void iniciar() {
        System.out.println("Browser Selecionado!");
        validarConectadoInternet();
        exibirPagina();
        adicionarNovaAba();
        atualizarPagina();
    }
    private void exibirPagina(){
        System.out.println("Exibindo Página");
    }
    private void adicionarNovaAba() {
        System.out.println("Adicionando nova aba");
    }

    private void atualizarPagina() {
        System.out.println("Atualizando a página");
    }
}