// =========================================================
// MENSAGEM DE BOAS-VINDAS
// =========================================================
window.onload = function() {
    console.log("Site minimalista carregado com sucesso!");
};

// =========================================================
// MANIPULAÇÃO DO DOM E EVENTOS DE CLIQUE
// =========================================================
const logo = document.querySelector('header h1');
logo.addEventListener('click', function() {
    alert("Você clicou no logo da Tech Solutions!");
    logo.textContent = "Tech Solutions - Líder em TI"; 
    
    // ATUALIZADO: Agora muda para o ciano elétrico minimalista
    logo.style.color = "#00adb5"; 
});

// =========================================================
// VALIDAÇÃO SIMPLES DE FORMULÁRIO
// =========================================================
const formulario = document.getElementById('formContato');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === "" || email === "" || telefone === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios!");
        } else {
            alert("Olá, " + nome + "! Sua mensagem sobre '" + assunto + "' foi enviada com sucesso. Entraremos em contato em breve!");
            formulario.reset();
        }
    });
}
