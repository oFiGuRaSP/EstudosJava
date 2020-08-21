// var novoUsuario ={
//     nome: 'Alexandre',
//     idade: '32',
//     pais: 'Brasil'
// };

// var {nome, idade, pais} = novoUsuario;
// //console.log(nome, idade, pais);

// var {nome:primeiroNome} = novoUsuario;
// //console.log(primeiroNome);

// var {idade: idadeusuario} = novoUsuario;
// //console.log (idadeusuario);

// var novoUsuario2 = {
//     nome: {
//         primeiro: 'Alexandre',
//         //ultimo: 'Nerdido'
//     }
// };

// var {nome: {primeiro}} = novoUsuario2
// console.log(primeiro)

// var {nome: { segundo = 'Estevam'}} = novoUsuario2
// console.log(segundo)

// function imprimeUsuario ({nome, idade, sexo}){
//     console.log(nome)
//     console.log(idade)
//     console.log (sexo)

// }

// var usuarioFunction = {
//     nome: 'Alexandre',
//     idade: 32,
//     sexo: 'M'
// }

// imprimeUsuario(usuarioFunction)

// console.log(Object.keys(usuarioFunction)) //imprime o array
// console.log (Object.values(usuarioFunction)) //imprime os valores

var usuarioFunction = {
    nome: 'Alexandre',
    idade: 32,
    sexo: 'M'
}

var props = Object.keys(usuarioFunction);
console.log(props)

for (var i = 0; i < props.length; i++){
    //console.log(props[i]);
    //console.log(usuarioFunction[props[i]])
}

for (var prop of props) {
    //console.log('usuarioFunction 2 ', usuarioFunction[prop])
}

for (var prop2 in usuarioFunction){
    if (usuarioFunction.hasOwnProperty(prop2)){
        console.log(prop2, usuarioFunction[prop2])

    }
    
}

