function fuja() {
    const botaoNao = document.getElementById("nao")

    // Obter as dimensões da janela visível
    const larguraJanela = window.innerWidth
    const alturaJanela = window.innerHeight

    // Calcular os limites para o botão
    const maxX = larguraJanela - botaoNao.offsetWidth
    const maxY = alturaJanela - botaoNao.offsetHeight

    // Gerar posições aleatórias dentro dos limites
    const aleatorioX = Math.random() * maxX
    const aleatorioY = Math.random() * maxY

    // Certifique-se de que o botão tem `left` e `top` definidos
    if (!botaoNao.style.left || !botaoNao.style.top) {
        botaoNao.style.left = `${botaoNao.offsetLeft}px`
        botaoNao.style.top = `${botaoNao.offsetTop}px`
    }

    // Atualizar as posições suavemente
    requestAnimationFrame(() => {
        botaoNao.style.left = `${aleatorioX}px`
        botaoNao.style.top = `${aleatorioY}px`
    })
}

// Garantir compatibilidade com toques no celular
document.getElementById("nao").addEventListener("touchstart", fuja)
