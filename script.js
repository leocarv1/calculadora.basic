function Calcular(){
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var escolha = document.getElementsByName('radcal')
    var res = document.getElementById('res')
    var numero1 = Number(num1.value)
    var numero2 = Number(num2.value)
    if (escolha[0].checked){
        var resultado = numero1 + numero2
        res.innerHTML = ''
        res.innerHTML += `${numero1} + ${numero2} = ${resultado}`
    }

    else if (escolha[1].checked){
        var resultado = numero1/numero2
        res.innerHTML = ''
        res.innerHTML += `${numero1} / ${numero2} = ${resultado}`
    }

    else if (escolha[2].checked){
        var resultado = numero1-numero2
        res.innerHTML = ''
        res.innerHTML += `${numero1} - ${numero2} = ${resultado}`
    }

    else if (escolha[3].checked){
        var resultado = numero1*numero2
        res.innerHTML = ''
        res.innerHTML += `${numero1} * ${numero2} = ${resultado}`
    }
    
}