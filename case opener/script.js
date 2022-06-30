const startscreen = document.querySelector('.startscreen')
const balance = document.querySelector('.balance')
const caseopen = document.querySelector('.case')
const openbtn = document.querySelector('.open')
const sellbtn = document.querySelector('.sell')
const start = document.querySelector('.startbtn')

openbtn.addEventListener('click', openCase)
start.addEventListener('click', startOpening)
sellbtn.addEventListener('click', sellItem)

let balanceValue = 100
balance.innerHTML = balanceValue

let casenumber = 0

const casecontent = ['1','1','1','1', '5','5','5','5', '10','10','10','10', '50','50','50','50', '100','100', '1000','1000', '10,000','10,000', '100.000' ]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function openCaseFunction() {
    const num = getRandomInt(8)
    caseopen.innerHTML = '€' + casecontent[num]
    casenumber = num
    sellbtn.style.display = ('block')
}

function startOpening() {
    startscreen.style.display = ("none")
}

function sellItem() {
    balanceValue += Number(casecontent[casenumber])
    balance.innerHTML = balanceValue
    caseopen.innerHTML = 'open again?'
    sellbtn.style.display = ('none')
}

function openCase(){
    if(Number(balance.innerHTML) > 10){
        openCaseFunction()
        balanceValue -= 10
        balance.innerHTML = balanceValue
    }
    else{
        alert("nemas para druze")
    }
}