function verificar (){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados do ano novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','img/criancah.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','img/adolecenteh.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','img/adultoh.png')
            } else{
                //idoso
                img.setAttribute('src','img/idoso.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','img/criancam.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','img/adolecentem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','img/adultom.png')
            } else{
                //idoso
                img.setAttribute('src','img/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}