
function Usuario(){
    //console.log(this)
    this.nome = 'Alexandre'
    this.idade = 32
    this.soma = function (a,b){
        return a + b
    }
}

    //Usuario();
    
    var usuario = new Usuario()
    console.log(usuario)

    console.log(usuario.nome)
    console.log(usuario.idade)
    console.log(usuario.soma(10,4))

    function Personagem (p1, p2, p3) {
        console.log (p1, p2, p3)
        console.log(this)
    }

    var persoanegemThis = {
            nome: 'Hulk'
        
    }

    //Personagem.call(persoanegemThis, 'param1', 123, [5])

    //Personagem.apply(persoanegemThis, ['testeee', 321, [1,2,3]])

    var pers = Personagem.bind(persoanegemThis, 'teste', 'testando')
        pers('!!!')