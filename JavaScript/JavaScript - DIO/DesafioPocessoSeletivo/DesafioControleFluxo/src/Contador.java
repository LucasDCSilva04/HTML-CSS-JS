import java.util.Scanner;

public class Contador {
	public static void main(String[] args) {
		//Scaneando as informações inseridas no terminal
		Scanner terminal = new Scanner(System.in);
		System.out.println("Digite o primeiro parâmetro");
		int parametroUm = terminal.nextInt();
		System.out.println("Digite o segundo parâmetro");
		int parametroDois = terminal.nextInt();

		try {
			// chamando o método contendo a lógica de contagem
			contar(parametroUm, parametroDois);

		} catch (ParametrosInvalidosException e) {
			//Mensagem de erro
			System.out.println("");
			System.out.println("O primeiro número deve ser menor que o segundo número!");
			System.out.println("");
		}

	}

	static void contar(int parametroUm, int parametroDois) throws ParametrosInvalidosException {
		// validar se parametroUm é MAIOR que parametroDois e lançar a exceção
		if (parametroUm > parametroDois) {
			// lançar exceção
			throw new ParametrosInvalidosException();
		} else {
			int contagem = parametroDois - parametroUm;
			System.out.println("");
			// realizar o for para imprimir os números com base na variável contagem
			for (int i = 0; i < contagem; i++) {
				System.out.println("Imprimindo número " + (i + 1));
			}
		}
	}
}
