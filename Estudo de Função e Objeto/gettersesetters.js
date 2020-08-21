let usuarios = [{
    nome: 'Alexandre',
    idade: 32
}, 
{
    nome: 'Teobaldo',
    idade: 84
}, 
{
    nome: 'Xinforinfola',
    idade: 12
}, 
{
    nome: 'Felipa',
    idade: 32
}
];
// console.log(usuarios[1].nome)
// console.log(usuarios[3].nome, usuarios[3].idade)

var usuario = {
    posicao: 0,
    get atual(){
        return usuarios [this.posicao]
    },
    set atual(posicao){
        this.posicao = posicao;
    },
    proximo(){
        ++this.posicao;
    },
    anterior() {
        --this.posicao;
    }
}

//console.log (usuario.atual)

console.log (usuario.atual);
usuario.proximo();

console.log (usuario.atual);
usuario.proximo();

usuario.proximo();
console.log (usuario.atual);

usuario.anterior(usuario.atual);
console.log(usuario.atual)

usuario.atual = 0;
console.log(usuario.atual);

usuario.atual = 3;
console.log(usuario.atual);