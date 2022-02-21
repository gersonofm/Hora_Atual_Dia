function carregar() { // função atualizar página
    var msg = window.document.getElementById("msg"); // recebe o div msg
    var foto = window.document.getElementById("imagem"); // recebe a img imagem
    var data = new Date();
    var hora = data.getHours(); // recebe hora atual
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) { // BOM DIA
        foto.src = "fotomanha.png"; // seleciona imagem
        window.document.body.style.background = "#fed142" // altera cor de fundo
    } else if (hora < 18) { // BOA TARDE
        foto.src = "fototarde.png"; // seleciona imagem
        window.document.body.style.background = "#ff9501" // altera cor de fundo
    } else { // BOA NOITE
        foto.src = "fotonoite.png"; // seleciona imagem
        window.document.body.style.background = "#272c30" // altera cor de fundo
    }
}