function rtotal(){
    let renda = parseFloat(document.getElementById('rendatotal').value);
    let qtdpessoas = parseFloat(document.getElementById('quantpessoa').value);
    let datanasc = document.getElementById('datanasc').value
    const datahj = new Date()
    const nasc = new Date(datanasc)
    let idade = datahj.getFullYear() - nasc.getFullYear();

    let rpercapita = parseFloat(renda / qtdpessoas);

    if (idade < 16 && rpercapita < 1950) {
        document.getElementById('cadastro').innerHTML = "Você não está apto para fazer a matrícula"
    } else {
        document.getElementById('cadastro').innerHTML = "Você está apto para fazer a matrícula! Entre em contato com (00) 9 0000-0000"
    }
   
}