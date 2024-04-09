(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) window.location.href = 'https://cocosbeans.me/brtracker/mobile_unsupported'})(navigator.userAgent || navigator.vendor || window.opera);

window.onload = () => {
    let states = {shell0:0,shell1:0,shell2:0,shell3:0,shell4:0,shell5:0,shell6:0,shell7:0}

    function updateImg(shell) {
        document.getElementById(shell).outerHTML =
            states[shell] === 0 ?
                '<img src="https://cocosbeans.me/brtracker/assets/br_roundunknown.png" width="128" alt="Unknown Round">' :
                states[shell] === 1 ?
                    '<img src="https://cocosbeans.me/brtracker/assets/br_roundlive.png" width="128" alt="Live Round">' :
                    '<img src="https://cocosbeans.me/brtracker/assets/br_roundblank.png" width="128" alt="Blank Round">'
    }

    function doProb() {
        var b = 0
        var l = 0

        for (k in states) {
            if(states[k] === 1)l++
            else if(v === 2)b++
        }
        document.getElementById('probability').innerHTML =
            `Live/Blank Ratio: ${l}/${b}<br>
            Odds of Live Round: ${l === 0 ? 0 : Math.round((l / (l + b)) * 100)}%<br>
            Odds of Blank Round: ${b === 0 ? 0 : Math.round((b / (l + b)) * 100)}%`
    }

    function changeShells(isFired, isLive) {
        for (k in states) {
            if(isFired){if(states[k] === 0){doProb();return;}if(states[k] === 1 && isLive){states[k]=0;doProb();return}else if(states[k] === 2 && !isLive){states[k]=0;doProb();return}
            }else{if(states[k] === 0){states[k] = isLive ? 1 : 2;doProb();return}}
        }
    }

    function clearAll(){if(confirm('Are you sure you want to reset all shells?'))states={shell0:0,shell1:0,shell2:0,shell3:0,shell4:0,shell5:0,shell6:0,shell7:0}}

    function credits() {
        document.getElementById('main').innerHTML =
            `<h2 style="margin-top:0;">Credits</h2>
                         <p style="word-wrap:wrap;text-align:left;">
                            This project was created by Blair Myhre (cocosbeans) on April 8, 2024.
                            The Buckshot Roulette Tracker is an open-source, individual project created,
                            maintained and owned by Blair Myhre. All website code is
                                <a href="https://github.com/cocos-beans/cocos-beans.github.io/tree/main/brtracker">open source</a>
                            and is protected under the Mozilla Public License 2.0.
                         </p>
                         <p style="text-align:left;">
                            • <a href="https://mikeklubnika.itch.io/buckshot-roulette">Buckshot Roulette</a>: Mike Klubnika<br>
                            • Website Background: Mike Klubnika<br>
                            &nbsp;&nbsp;(thanks hsam for capturing it!)<br>
                            • Web code: cocosbeans<br>
                            • Assets: Shotgun Shells from HiClipart (edited by cocosbeans)<br>
                            • Testrunning: hsam
                         </p>
                        `
        document.getElementById('credits').innerHTML = 'Refresh page for tracker'
    }

    document.getElementById("fire_live").addEventListener("click",()=>{changeShells(true,true)})
    document.getElementById("fire_blank").addEventListener("click",()=>{changeShells(true,false)})
    document.getElementById("resetshells").addEventListener("click",()=>{clearAll()})
    document.getElementById("credits").addEventListener("click",()=>{credits()})
}