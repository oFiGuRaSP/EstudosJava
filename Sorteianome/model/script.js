const addNames = document.getElementById('txtnome')
const names = [];

//adiciona os nomes
function adicionar() {

    if (!names.includes(addNames.value.toUpperCase())) {

        addNames.focus()
    }
    else {
        alert('Sem nome repitido, FILHO DA PUTA')
        addNames.value = ''
        return false

    }

    if (!addNames.value.length == 0) {
        names.push(addNames.value.toUpperCase())


    } else {
        alert('Preenche essa porra, FILHO DA PUTA!')
        return false
    }


    const showNames = names.reduce((accumulator, amount) => amount, '')
    nomes.innerHTML += `${showNames}</br>`

    addNames.value = ''
    addNames.focus()
}

//sortear quem vai fazer o narguile
function sortear() {

    let res = document.querySelector('div#res')
    const quantNomes = names.length
    sorteiaNomes = Math.floor(Math.random() * quantNomes)

    res.innerHTML = names[sorteiaNomes].toUpperCase()
}