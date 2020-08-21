let usuario = {
    nome: 'Alexandre',
    idade: 32,
    profissão: 'Arquiteto',
    nascimento: 1988,
    hobbies: ['Musica', 'Programar', 'Jogar PS4', 'cozinhar']
}

//console.log(usuario['idade'])

usuario.ano = 2020;

//console.log(usuario)

usuario.competenciasHobbies = {
    Musica: ['Violão', 'Pandero'],
    Programas: ['Java', 'PHP', 'JavaScript'],
    jogosPS4: ['RPG', 'MMORPG', 'Luta', 'Moba', 'Puzzles']
}

    var usuario2 = {
        digaoi: function(name){
            return `Olá ${name}`
        }
    }

console.log (usuario2.digaoi('Alexandre'))

var cor = 'azul';
var usuario3 = {
    nome: 'Alexandre',
    cor
}

//console.log(usuario3)

var usuario4 = {
    nome: 'Alexandre',
    idade:32
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'São Paulo'
}

//merge de objetos
var novoUsuario = Object.assign({}, usuario4, extraInfo) //{} gera um usuario novo e o usuario4 e extrainfo foram inseridos dentro dele
//Object.assign(usuario4, extraInfo) usuario4 vira o principal e o extraInfo foi inserido dentro de usuario4

//console.log(novoUsuario)

var novoUsuario2 = {
    ...usuario4, //esses ... significam spread ou seja espalham os valores na variavel novoUsuario2
    ...extraInfo,
    sexo: 'M',
    profissão:'Arquiteto'

}

//console.log(novoUsuario2)

var nomeVariavel = 'Estado';
var nome = 'ÚltimoNome'

var usuario5 = {
    [nome]: 'Nerdido',
    [nomeVariavel]: 'São Paulo'
}

console.log(usuario5)