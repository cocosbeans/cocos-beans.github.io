let input = document.getElementById('input')
let output = document.getElementById('output')

const version = '1.0.0a'

// Commands

const help =
    new Command('help', 'List all commands')
        .argumentv('string', 'cmd', 'Get verbose info on a specific command', true)
        .process(() => {

        })

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

// Constructors

class Command {
    constructor(keyword, description) {
        this.data = new Object()
        this.data.keyword = keyword
        this.data.description = description
        this.data.args = new Array()
    }

    argument(flag, description, setsValue, isOptional, shorthand = "none") {
        this.data.args.push({
            type: 'novalue',
            optional: isOptional,
            data: {
                flag: flag,
                description: description,
                short: shorthand,
                value: setsValue
            }
        })
    }

    argumentv(type, uid, description, isOptional) {
        this.data.args.push({
            type: 'value',
            optional: isOptional,
            data: {
                uid: uid,
                description: description,
                type: type
            }
        })
    }

    process(exec) {
        this.data.execute = exec
    }
}