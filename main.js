const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btns = $$('.btn')
const btnClear = $('.clear')
const btnDelete = $('.delete')
const screenResult = $('.screen-result')
const screenCalculation = $('.screen-calculation')

let result = ''
let output = ''

btns.forEach(btn => {
    btn.onclick = () => {
        switch (btn.textContent) {
            case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
                output += btn.textContent
                screenCalculation.textContent = output
                break;
            case '/':
                if (onCalculating(result)) {
                    result += output
                    result += '/'
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                    output = ''
                } else {
                    result = calculator(Number(result.slice(0, result.length - 1)), Number(output), result.slice(-1))
                    result+='/'
                    output = ''
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                }
                break;
            case 'x':
                if (onCalculating(result)) {
                    result += output
                    result += 'x'
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                    output = ''
                } else {
                    result = calculator(Number(result.slice(0, result.length - 1)), Number(output), result.slice(-1))
                    result+='x'
                    output = ''
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                }
                break;
            case '+':
                if (onCalculating(result)) {
                    result += output
                    result += '+'
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                    output = ''
                } else {
                    result = calculator(Number(result.slice(0, result.length - 1)), Number(output), result.slice(-1))
                    result+='+'
                    output = ''
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                }
                break;
            case '-':
                if (onCalculating(result)) {
                    result += output
                    result += '-'
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                    output = ''
                } else {
                    result = calculator(Number(result.slice(0, result.length - 1)), Number(output), result.slice(-1))
                    result+='-'
                    output = ''
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                }
                break;
            case '=':
                if(!onCalculating(result)){
                    result = calculator(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                    output = ''
                    screenResult.textContent = result
                    screenCalculation.textContent = ''
                }
                if(output != '') {
                    screenResult.textContent = output
                    screenCalculation.textContent = ''
                    result = output
                    output = ''
                }
                break
            case '.':
                output+='.'
                screenCalculation.textContent = output
                break
            default:
                break
        }
    }
});

function onCalculating(str) {
    let count = 0
    for (let i in str) {
        if (str[i] === '/' || str[i] === 'x' || str[i] === '-' || str[i] === '+') {
            count++
        }
    }
    return count === 1 ? false : true
}

function calculator(a,b,str) {
    switch (str) {
        case '/':
            return a / b
            break
        case 'x':
            return a * b
            break
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        default:
            break
    }
}

btnDelete.onclick = () => {
    output = output.slice(0, -1)
    screenCalculation.textContent = output
    if(output === '') screenCalculation.textContent = '0'
}

btnClear.onclick = () => {
    output = '0'
    screenCalculation.textContent = output
    result = ''
    screenResult.textContent = result
}