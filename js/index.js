function findAddress(){
    if(cep.value.length == 9){
        fetch(`https://viacep.com.br/ws/${cep.value.replace('-','')}/json/`)
        .then(response => response.json())
        .then(response => {
            logradouro.value = response.logradouro;
            bairro.value = response.bairro;
            localidade.value = response.localidade;
            uf.value = response.uf;
        })
    }
}