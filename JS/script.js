var botaoadc = document.getElementById('butadc')
botaoadc.addEventListener('click', adicionar)
var botaofim = document.getElementById('butfim')
botaofim.addEventListener('click', finalizar)
var num = document.getElementById('txtnum')
var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var valores = []

function adicionar() {
    let n = Number(num.value)
    let valid = valores.indexOf(n)
    if(num.value.length == 0 || n > 100 || n == 0) {
        alert('Campo não preenchido ou valor inválido!')
    } else if(valid != -1) {
        alert('Valor já adicionado na lista, insira outro valor!')
        } else {
            tab.innerHTML = ''
            valores.push(n)
            for(let pos in valores){
            let item = document.createElement('option')
            tab.value = `tab${pos}`
            tab.appendChild(item)
            item.text += `Valor ${valores[pos]} adicionado`
            res.innerHTML = ''
        }
        num.value = ''
        num.focus()
    }
}


function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores válidos para finalizar!')
    } else {
        var soma = 0
        for(let pos in valores){
            valores.sort((a, b) => a - b)
            maior = valores[pos]
            menor = valores[0]
            soma += valores[pos]
        }
        let media = soma/valores.length
        res.innerHTML = ``
        res.innerHTML += `<br>Ao todo, foram adicionados ${valores.length} dados.</br>`
        res.innerHTML += `<br>O maior valor adicionado foi ${maior}.</br>`
        res.innerHTML += `<br>O menor valor adicionado foi ${menor}.</br>`
        res.innerHTML += `<br>A soma dos valores adicionados é ${soma}.</br>`
        res.innerHTML += `<br>A média dos valores adicionados é ${media}.</br>`
    }
}