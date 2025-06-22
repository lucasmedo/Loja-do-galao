
function enviarPedido() {
    const endereco = document.getElementById("endereco").value;
    if (endereco.trim() === "") {
        alert("Por favor, digite um endereço válido.");
    } else {
        const numero = "559889180397";
        const mensagem = "Olá, quero pedir um galão para o seguinte endereço: " + encodeURIComponent(endereco);
        const url = "https://wa.me/" + numero + "?text=" + mensagem;
        window.open(url, "_blank");
    }
}
