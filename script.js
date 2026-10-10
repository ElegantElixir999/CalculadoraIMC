document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pesoInput = document.getElementById('peso').value;
    const alturaInput = document.getElementById('altura').value;

    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Cálculo do IMC: Peso / (Altura * Altura)
    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(2);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal (Eutrofia)';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III (Mórbida)';
    }

    // Exibindo os resultados na tela
    const resultadoDiv = document.getElementById('resultado');
    const valorImcP = document.getElementById('valor-imc');
    const classificacaoP = document.getElementById('classificacao');

    valorImcP.textContent = `Seu IMC é: ${imcArredondado}`;
    classificacaoP.textContent = `Classificação: ${classificacao}`;

    resultadoDiv.classList.remove('hidden');
});