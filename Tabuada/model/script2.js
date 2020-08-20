function calcular(){

    var num = Number.parseInt(document.getElementById('txtnum').value)
    var res = document.getElementById('seltab')

    //res.innerHTML = num
if(!num == null){
    num = 0
}else{res.innerHTML = null
    
    for (var c = 0; c <= 10; c++){
        
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${c * num}`
        res.appendChild(item)
        //res.innerHTML += c
        //res.innerHTML += `${num} x ${c} = ${c * num}</br>`
        
    }
}
}