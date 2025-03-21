document.addEventListener("DOMContentLoaded", function () {
    const addServiceBtn = document.getElementById("add-service");
    const serviceList = document.getElementById("service-list");
    const totalSpan = document.getElementById("total");
    const printBtn = document.getElementById("print-os");

    // Função para calcular o total
    function calcularTotal() {
        let total = 0;
        document.querySelectorAll("#service-list tr").forEach(row => {
            const quantidade = row.querySelector(".quantidade").value;
            const valor = row.querySelector(".valor").value;
            if (quantidade && valor) {
                total += parseFloat(quantidade) * parseFloat(valor);
            }
        });
        totalSpan.textContent = total.toFixed(2);
    }

    // Adicionar nova linha de serviço
    addServiceBtn.addEventListener("click", function () {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" class="servico"></td>
            <td><input type="number" class="quantidade" min="1"></td>
            <td><input type="number" class="valor" min="0" step="0.01"></td>
            <td><button type="button" class="remove-service">Remover</button></td>
        `;
        serviceList.appendChild(newRow);
    });

    // Remover serviço da lista
    serviceList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-service")) {
            event.target.closest("tr").remove();
            calcularTotal();
        }
    });

    // Atualizar total sempre que a quantidade ou valor forem alterados
    serviceList.addEventListener("input", function () {
        calcularTotal();
    });

    // Função para imprimir a OS
    printBtn.addEventListener("click", function () {
        window.print();
    });
});
