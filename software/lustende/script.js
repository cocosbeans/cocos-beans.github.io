let input = document.getElementById('input')
let output = document.getElementById('output')

const version = '1.0.0a'

// Initialization

window.onload = () => {
    output.innerHTML = `
        (${color(`LUSTENDE ${version}`, '57A25F')} | ${color('(c) cocosbeans 2024', 'CA74E4')})<br>
        (${color(`DOM Loaded @ ${new Date()}`, 'A7A7A7')})<br>
        (${color('BEGIN PROGRAM', 'A7A7A7')})<br>
        `
}

// CLI Stuff

function print(text = "") {
    output.innerHTML += `<br>${text}`
}

function color(text, hex) {
    return `<span style="color:#${hex};">${text}</span>`
}

function fmtInput() {
    print(`(${color(`LUSTENDE ${version}`, '57A25F')}) ${color('~$', 'A7A7A7')} ${input.value}`)
}

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        fmtInput()
        interaction()
        input.value = ""
    }
})

// Interaction

function fmtOutput(out) {
    print(`&emsp;(${color(`LUSTENDE ${version}`, '57A25F')}) ${out}`)
}

function interaction() {
    var inputv = input.value.toLowerCase()
    var a = inputv.split(' ')

    switch (a[0]) {
        case '':
            fmtOutput('You inputted nothing. I can\'t do anything with nothing.')
            break
        case 'nothing':
            fmtOutput(`You inputted nothing. You literally inputted '${a[0]}'.`)
            break
        default:
            fmtOutput(`${color(`I don't know what '${a[0]}' means. Say 'help' for commands.`, 'C52E2E')}`)
            break
    }
}