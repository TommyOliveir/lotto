const Btn = document.getElementById("btn")

function getLottoNumbers(){
    const winningNums = []
    for (let i = 0; i < 6; i++){
        winningNums.push(Math.round(Math.random()*100))
    }
    return winningNums
}

function getWinningNumbersHtml(){
    return getLottoNumbers().map(function(num){
        return `<div class="number">${num}</div>`
    }).join('')
}


function render() {
    document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml()
}
render()

Btn.addEventListener("click", function(){
    return render()

})
