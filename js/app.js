let listagem = [];

//função para adicionar os nomes dos sorteados
function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    listagem.push(nomeAmigo);
    listaAmigos.textContent = listagem;
    nomeAmigo = document.getElementById('nome-amigo').value = '';
}

//função para sortear os numeros
function sortear(){
    let listaSorteio = document.getElementById('lista-sorteio');
    listagem.sort((a,b) => Math.random() - 0.5);
    console.log(listagem);

    for (let i = 0; i < listagem.length; i++ ) {
        if(i == listagem.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + `<p id="lista-sorteio">${listagem[i]} --> ${listagem[0]}</p>`;
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + `<p id="lista-sorteio">${listagem[i]} --> ${listagem[i + 1]}</p>`;
        
        }
       
    }    
}

//função para reiniciar o sorteador
function reiniciar(){
    listagem = [];
    listaAmigos = document.getElementById('lista-amigos').textContent = '';
    listaSorteio = document.getElementById('lista-sorteio').textContent = '';
    console.log(listagem);

}