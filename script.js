// Seleciona o botão de impressão
document.getElementById("print-os").addEventListener("click", function() {
    // Chama a função de impressão do navegador
    window.print();
});

// Função para calcular o total
function calcularTotal() {
    let total = 0;

    // Seleciona todas as linhas da tabela, ignorando o cabeçalho
    document.querySelectorAll('.service-box table tbody tr').forEach(linha => {
        const quantidadeInput = linha.querySelector('td:nth-child(1) input');
        const valorInput = linha.querySelector('td:nth-child(3) input');

        if (quantidadeInput && valorInput) {
            // Garante que os valores sejam numéricos e não vazios
            const quantidade = parseFloat(quantidadeInput.value) || 0;
            const valor = parseFloat(valorInput.value) || 0;

            total += quantidade * valor;
        }
    });

    // Atualiza o total na página
    document.getElementById('total').innerText = `R$ ${total.toFixed(2)}`;
}

// Adiciona event listeners para os campos de quantidade e valor
document.querySelectorAll('.service-box table tbody tr input').forEach(input => {
    input.addEventListener('input', calcularTotal);
});
