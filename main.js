        document.addEventListener("DOMContentLoaded", () => {
            const botoesAdicionar = document.querySelectorAll(".adicionar");
            const listaPedido = document.getElementById("lista-pedido");
            const totalElemento = document.getElementById("total");
            const botaoFinalizarPedido = document.getElementById("finalizar-pedido");
            let total = 0;
    
            if (!listaPedido || !totalElemento || !botaoFinalizarPedido) {
                console.error("Erro: Elementos de pedido não encontrados.");
                return;
            }
    
            botoesAdicionar.forEach((botao) => {
                botao.addEventListener("click", () => {
                    const produto = botao.parentElement;
                    const nome = produto.querySelector("h3").textContent;
                    const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$", "").replace(",", "."));
    
                    const itemPedido = document.createElement("li");
                    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
                    listaPedido.appendChild(itemPedido);
    
                    total += preco;
                    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
                });
            });
    
            // Simula finalização do pedido
            botaoFinalizarPedido.addEventListener("click", () => {
                alert("Pedido finalizado com sucesso! " + totalElemento.textContent);

                listaPedido.innerHTML = '';

                total = 0;

                totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`; 
            });
        });
    