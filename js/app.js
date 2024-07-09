const listaDeAmigos = [];
let listaSorteio = document.getElementById('lista-sorteio');
let amigosIncluidos = document.getElementById('lista-amigos');


function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');
   
    if (nomeDoAmigo.value == '' || nomeDoAmigo.value == ' '){
        alert('Favor inserir um nome.');
    }
    else if (listaDeAmigos.includes(nomeDoAmigo.value)){
        alert('Este nome ja foi inserido.');
    }
    else{
        listaDeAmigos.push(nomeDoAmigo.value);
        amigosIncluidos.innerHTML = listaDeAmigos.join(', ');
    }
    nomeDoAmigo.value = '';
    
    atualizarLista();
    atualizarSorteio();
}

function excluirAmigo(index) {
    listaDeAmigos.splice(index,1);
    atualizarLista();
    atualizarSorteio();
}

function sortear(){
  
    if(listaDeAmigos.length < 4){
        alert('Adicione pelo menos 4 amigos.')
        return;
    }

    embaralha(listaDeAmigos);

    for(let i = 0; i < listaDeAmigos.length; i++){
        if(i == listaDeAmigos.length - 1)
            {
                listaSorteio.innerHTML += listaDeAmigos[i] + '→' + listaDeAmigos[0] + '<br>'

            }
        else{
                listaSorteio.innerHTML += listaDeAmigos[i] + '→' + listaDeAmigos[i + 1] + '<br>'
            }
    }
}

function reiniciar(){
    listaDeAmigos.splice(0,listaDeAmigos.length);
    listaSorteio.innerHTML = ''
    amigosIncluidos.innerHTML = ''
}

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function atualizarSorteio() {
    listaSorteio.innerHTML = '';
}


function atualizarLista() {
    amigosIncluidos.innerHTML = '';
    
    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaDeAmigos[i];
        paragrafo.classList.add('underline-on-hover')
       
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        amigosIncluidos.appendChild(paragrafo);
    }
}