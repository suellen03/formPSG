function rtotal(){
    let renda = parseFloat(document.getElementById('rendatotal').value);
    let qtdpessoas = parseFloat(document.getElementById('quantpessoa').value);
    let datanasc = document.getElementById('datanasc').value
    const datahj = new Date()
    const nasc = new Date(datanasc)
    let idade = datahj.getFullYear() - nasc.getFullYear();

    let rpercapita = parseFloat(renda / qtdpessoas);

    document.getElementById('cadastro').innerHTML = null
    document.getElementById('cadastro1').innerHTML = null
    document.getElementById('cadastro').classList.remove
    document.getElementById('cadastro1').classList.remove
    


    console.log(idade)
    console.log(rpercapita)

    if (idade < 16 || rpercapita > 1950) {
        document.getElementById('cadastro').innerHTML = "Você não está apto para fazer a matrícula, pois não atende os critérios requiridos pelo programa"
    } else if(idade >= 16 && rpercapita <= 1950) {
        document.getElementById('cadastro1').innerHTML = "Você está apto para fazer a matrícula! Entre em contato com (62) 3240-2950"
    } 
    document.getElementById('rendatotal').value = null
    document.getElementById('quantpessoa').value = null
    document.getElementById('datanasc').value = null
}
function calcularmedia(){
        n1 = parseFloat(document.getElementById("n1").value);
        n2 = parseFloat(document.getElementById("n2").value);
        n3 = parseFloat(document.getElementById("n3").value);
    
        let media = (n1 + n2 + n3) / 3;
    
        return media
}

function calcularPresencas(){
    let dia1 = parseInt(document.querySelector('input[name="dia1"]:checked').value)
    let dia2 = parseInt(document.querySelector('input[name="dia2"]:checked').value)
    let dia3 = parseInt(document.querySelector('input[name="dia3"]:checked').value)
    let dia4 = parseInt(document.querySelector('input[name="dia4"]:checked').value)
    let dia5 = parseInt(document.querySelector('input[name="dia5"]:checked').value)
    let dia6 = parseInt(document.querySelector('input[name="dia6"]:checked').value)
    let dia7 = parseInt(document.querySelector('input[name="dia7"]:checked').value)
    let dia8 = parseInt(document.querySelector('input[name="dia8"]:checked').value)
    let dia9 = parseInt(document.querySelector('input[name="dia9"]:checked').value)
    let dia10 = parseInt(document.querySelector('input[name="dia10"]:checked').value)
    let dia11 = parseInt(document.querySelector('input[name="dia11"]:checked').value)
    let dia12 = parseInt(document.querySelector('input[name="dia12"]:checked').value)
    let presenca = dia1 + dia2 + dia3 + dia4 + dia5 + dia6 + dia7 + dia8 + dia9 + dia10 + dia11 + dia12
    console.log(presenca)
    let percentual = parseInt((presenca / 12) * 100)
    return percentual
}


function  aprovacao() {
    let media = calcularmedia().toFixed(2);
    console.log(media)
    let presencas = calcularPresencas();
    console.log(presencas)

    document.getElementById('aprovado').innerHTML = null
    document.getElementById('recuperacao').innerHTML = null
    document.getElementById('reprovado').innerHTML = null
    document.getElementById('aprovado').classList.remove
    document.getElementById('recuperacao').classList.remove
    document.getElementById('reprovado').classList.remove
    
    if (media >= 6.0 && presencas >= 75) {
        document.getElementById('aprovado').innerHTML = "Aluno Aprovado! " + "Média: " + media + " Frequência: " + presencas + "%"

    }
    else if (media >= 5 && media < 6 && presencas >= 75) {
        document.getElementById('recuperacao').innerHTML =  "Aluno está na Recuperação! " + "Média: " + media + " Frequência: " + presencas + "%";
    }
    else {
        document.getElementById('reprovado').innerHTML =  "Aluno Reprovado! " + "Média: " + media + " Frequência: " + presencas + "%";
    }
    
}