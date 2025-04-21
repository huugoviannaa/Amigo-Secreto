let listagem = [];

//função para adicionar os nomes dos sorteados
function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    /*if(listagem.includes(nomeAmigo)){
        alert('Nome ja adicionado !');
        return;
    }*/
    
    let listaAmigos = document.getElementById('lista-amigos');
    listagem.push(nomeAmigo);
    listaAmigos.textContent = listagem;
    nomeAmigo = document.getElementById('nome-amigo').value = '';

 

    atualizarLista();
}

//função para sortear os numeros
function sortear(){
    let listaSorteio = document.getElementById('lista-sorteio');
    listagem.sort((a,b) => Math.random() - 0.5);
    console.log(listagem);

    if(listagem.length <= 1){
        alert('Não é possivel executar o sorteio com 1 participante !');
        return;
    }

    for (let i = 0; i < listagem.length; i++ ) {
        if(i == listagem.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + `<p id="lista-sorteio">${listagem[i]} --> ${listagem[0]}</p>`;
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + `<p id="lista-sorteio">${listagem[i]} --> ${listagem[i + 1]}</p>`;
        
        }
       
    }    
}

function excluirAmigo(index) {
    listagem.splice(index, 1);
    atualizarLista();
    
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < listagem.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listagem[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

//função para reiniciar o sorteador
function reiniciar(){
    listagem = [];
    listaAmigos = document.getElementById('lista-amigos').textContent = '';
    listaSorteio = document.getElementById('lista-sorteio').textContent = '';
    console.log(listagem);

}