let states = {
    shell0: 0, shell1: 0,
    shell2: 0, shell3: 0,
    shell4: 0, shell5: 0,
    shell6: 0, shell7: 0
}

let qstates = {
    shell0: 0, shell1: 0,
    shell2: 0, shell3: 0,
    shell4: 0, shell5: 0,
    shell6: 0, shell7: 0
}

function updateImages(queue) {
    if (!queue) {
        for ([k, v] of Object.entries(states)) {
            document.getElementById(k).outerHTML =
                states[k] === 0 ?
                    `<img id="${k}" src="../assets/round_unknown.png" width="64" alt="Unknown Round">` :
                    states[k] === 1 ?
                        `<img id="${k}" src="../assets/round_live.png" width="64" alt="Live Round">` :
                        states[k] === 2 ?
                            `<img id="${k}" src="../assets/round_blank.png" width="64" alt="Blank Round">` :
                            `<img id="${k}" src="../assets/round_shot.png" width="64" alt="Dead Round">`
        }
    } else {
        for ([k, v] of Object.entries(qstates)) {
            document.getElementById(`q${k}`).outerHTML =
                qstates[k] === 0 ?
                    `<img id="q${k}" src="../assets/round_unknown.png" width="64" alt="Unknown Round">` :
                    qstates[k] === 1 ?
                        `<img id="q${k}" src="../assets/round_live.png" width="64" alt="Live Round">` :
                        qstates[k] === 2 ?
                            `<img id="q${k}" src="../assets/round_blank.png" width="64" alt="Blank Round">` :
                            `<img id="q${k}" src="../assets/round_shot.png" width="64" alt="Dead Round">`
        }
    }
}

function probability() {
    var blank = 0
    var live = 0

    for (k in states) {
        if (states[k] === 1) live++
        else if (states[k] === 2) blank++
    }

    var total = live + blank

    document.getElementById('probability').innerHTML =
        `Live/Blank Ratio: ${live}/${blank}<br>
        Odds of Live Round: ${live === 0 ? 0 : Math.round((live / total) * 100)}%<br>
        Odds of Blank Round: ${blank === 0 ? 0 : Math.round((blank / total) * 100)}%`
}

function addShell(isLive) {
    for (k in states) {
        if (states[k] === 0) {
            states[k] = isLive ? 1 : 2
            return
        }
    }
}

function removeShell(queue) {
    if (queue) {
        for (i = 7; i === 0; i--) {
            if (qstates[i] === 2 || qstates[i] === 3) qstates[i] = 0
            return
        }
    } else {
        for (i = 7; i === 0; i--) {
            if (states[i] === 2 || states[i] === 3) states[i] = 0
            return
        }
    }
}

function fireShell(isLive) {
    for (k in states) {
        console.log(String(isLive) + states[k])
        if (states[k] === 1 && isLive) {
            states[k] = 3
            qstates[k] = 1
            return
        } else if (states[k] === 2 && !isLive) {
            states[k] = 3
            qstates[k] = 2
            return
        }
    }
}

function clearAll() {
    if (confirm('Are you sure you want to reset all shells?')) {
        states = {
            shell0: 0, shell1: 0,
            shell2: 0, shell3: 0,
            shell4: 0, shell5: 0,
            shell6: 0, shell7: 0
        }
        qstates = {
            shell0: 0, shell1: 0,
            shell2: 0, shell3: 0,
            shell4: 0, shell5: 0,
            shell6: 0, shell7: 0
        }
    }
}

function credits() {
    document.getElementById('main').innerHTML =
        `<h2 style="margin-top:0;">Credits</h2><p style="word-wrap:wrap;text-align:left;">This project was created by Blair Myhre (cocosbeans) on April 8, 2024. The Buckshot Roulette Tracker is an open-source, individual project created, maintained and owned by Blair Myhre. All website code is<a href="https://github.com/cocos-beans/cocos-beans.github.io/tree/main/brtracker">open source</a>and is protected under the Mozilla Public License 2.0.</p><p style="text-align:left;">• <a href="https://mikeklubnika.itch.io/buckshot-roulette">Buckshot Roulette</a>: Mike Klubnika<br>• Website Background: Mike Klubnika<br>&nbsp;&nbsp;(thanks hsam for capturing it!)<br>• Web code: cocosbeans<br>• Assets: Shotgun Shells from HiClipart (edited by cocosbeans)<br>• Testrunning: hsam</p>`
    document.getElementById('credits').innerHTML = 'Refresh page for tracker'
}

document.getElementById('add_live').addEventListener('click', () => {
    addShell(true)
    updateImages(false)
    probability()
})

document.getElementById('add_blank').addEventListener('click', () => {
    addShell(false)
    updateImages(false)
    probability()
})

document.getElementById('resetshells').addEventListener('click', () => {
    clearAll()
    updateImages(false)
    updateImages(true)
    probability()
})

document.getElementById('fire_live').addEventListener('click', () => {
    console.log(qstates)
    fireShell(true)
    updateImages(false)
    updateImages(true)
    probability()
})

document.getElementById('fire_blank').addEventListener('click', () => {
    console.log(qstates)
    fireShell(false)
    updateImages(false)
    updateImages(true)
    probability()
})