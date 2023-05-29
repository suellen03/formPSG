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
        document.getElementById('cadastro1').innerHTML = "Você está apto para fazer a matrícula! Entre em contato com (00) 9 0000-0000"
    } 
    document.getElementById('rendatotal').value = null
    document.getElementById('quantpessoa').value = null
    document.getElementById('datanasc').value = null
}