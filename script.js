let todasMusicas = [
    {titulo:'Onda Forte',artista:'Planet Hemp', src:'musicas/onda-forte.mp3', img:'imagens/bateu-mesmo.png'},
    {titulo:'Love Like You',artista:'Steven Universo', src:'musicas/Love Like You (End Credits).mp3', img:'imagens/steven.png'},
    {titulo:'Everything Stays',artista:'Marceline', src:'musicas/Everything Stays Adventure Time copy.mp3', img:'imagens/marceline.png'},
    {titulo:'Soldier, Poet, King',artista:'Jacob Cook', src:'musicas/Soldier, Poet, King.mp3', img:'imagens/soldier-poet-king.png'},
    {titulo:'Tema Abertura Jornal Nacional',artista:'William Ereção', src:'musicas/TEMA JORNAL NACIONAL PISEIRO.mp3', img:'imagens/William-Bonner.png'}
];




let musica = document.querySelector('audio');

let indexMusica = 0;
renderizarMusica(indexMusica);

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeDaMusica = document.querySelector('.descricao h2');

let nomeDoArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

let botao_play = document.querySelector('.botao-play');

let botao_pause = document.querySelector('.botao-pause');




//Evetos
botao_play.addEventListener('click', tocarMusica);

botao_pause.addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if(indexMusica < 0 ){
        indexMusica = todasMusicas.length;
    }

    renderizarMusica(indexMusica);
    tocarMusica();
})

document.querySelector('.proxima').addEventListener('click', () =>{
    
    indexMusica++;
    
    if(indexMusica > todasMusicas.length){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
})

//Funções

function renderizarMusica(index){
    musica.setAttribute('src', todasMusicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeDaMusica.textContent = todasMusicas[index].titulo;
        nomeDoArtista.textContent = todasMusicas[index].artista;
        imagem.src = todasMusicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    botao_pause.style.display = 'block';
    botao_play.style.display ='none';
}



function pausarMusica(){
    musica.pause();
    botao_pause.style.display = 'none';
    botao_play.style.display ='block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = (musica.currentTime / musica.duration ) * 100 + '%';
    
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

    
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return `${campoMinutos}:${campoSegundos}`;
}

