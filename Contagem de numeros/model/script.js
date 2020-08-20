function contar() {
    let ini = Number(document.getElementById('txti').value)
    let fim = Number(document.getElementById('txtf').value)
    let passo = Number(document.getElementById('txtp').value)
    let res = document.getElementById('res')

    if (!ini || !fim || !passo){
        res.innerHTML = 'Impossivel fazer a contagem'
    } else{
        res.innerHTML = 'Contando: '
        let i = ini
        let f = fim
        let p = passo
    if (p <= 0){
        window.alert('Passo invalido! Considerando PASSO = 1')
        p = 1
    }
    if (i < f){
        //contagem crescente
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        //contagem regressiva
        for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`   
        }
    }  
        res.innerHTML += `\u{1F3C1}`   
    }
}