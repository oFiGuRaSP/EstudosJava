function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = "img/manha.png"
        document.body.style.background = '#f9e6d6'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = "img/tarde.png"
        document.body.style.background = '#f08c49'
    } else {
        //boa noite
        img.src = "img/noite.png"
        document.body.style.background = '#011a37'
    }
}