const dragonButttom = document.getElementById('dragon-buttom')
const resetButtom = document.getElementById('retry-buttom')
const sectionReset = document.getElementById('retry')
const sectionCombat = document.getElementById('attack')

const spanDragonPlayer = document.getElementById('dragonPlayer')

const spanDragonenemy = document.getElementById('dragonEnemy')

const rewindAttacks = document.getElementById('result')

const rewindPlayerAttacks = document.getElementById('player-Attacks')
const rewindEnmeyAttacks = document.getElementById('enemy-attacks')

const playerLifePoints = document.getElementById('player-life')
const enemyLifePoint = document.getElementById('enemylife')
const target_container = document.getElementById('targets_container')
const attackContainer = document.getElementById('attackContainer')

const sectionViewMap = document.getElementById('view-map')
const map = document.getElementById('map')

const Fuegosangre_Attacks = [
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
]

const darkstorm_attacks = [
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
]

const skullmaker_attacks = [
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
]

const redtint_attacks = [
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
]

const nigthmare_attacks = [
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
]

const silentdeath_attack = [
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
]

let playerId= null
let enemyID = null
let beats = []
let dragonEnemigos = []
let buttons =[]
let beatsOption
let playerAttack = []
let enemyAttack = []
let dragonSelected
let myDragon 
let indexPlayerAttack
let indexEnemyAttack
let beastAttack
let lifenumber = 3
let enemynumber = 3
let inputFuegoSangre 
let enemyDragonAttack
let inputdarkstorm
let inputskullmaker 
let inputredtint 
let inputnigthmare 
let inputsilentdeath
let bloodButtom 
let ShadowButtom 
let poisonButtom 
let enemyVictories = 0
let playerVictories = 0
let canvaMap = map.getContext("2d")
let intervalo
let mapBackGround = new Image()
mapBackGround.src= './resources/mapa.png'

class Beast {
    constructor(name, photo, lifes, photoBeats, id = null){
        this.id=id
        this.name = name
        this.photo = photo
        this.lifes = lifes
        this.attacks = []
        this.x = 10
        this.y = 10
        this.width = 80
        this.height = 80
        this.photoMap = new Image()
        this.photoMap.src = photoBeats
        this.velocityX = 0
        this.velocityY = 0
    }

    printBeast(){
        canvaMap.drawImage(
            this.photoMap,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

let fuegosangre = new Beast('Fuegosangre','./resources/fuegosol.png',5,'./resources/fuegosolAvatar.png' )
let darkstorm = new Beast('Darkstorm', './resources/darkstorm.png', 5,'./resources/darkstormAvatar.png' )
let skullmaker = new Beast('Skullmaker','./resources/skullmaker.png', 5, './resources/skullmakerAvatar.png')
let redtint = new Beast('Redtint','./resources/redtint.png',5, './resources/redtintAvatar.png')
let nigtmare = new Beast('Nigtmare','./resources/nigthmare.png',5,'./resources/nigthmareAvatar.png')
let silentdeath = new Beast('Silentdeath','./resources/silentdeath.png',5, './resources/silentdeathAvatar.png')

fuegosangre.attacks.push(...Fuegosangre_Attacks)
darkstorm.attacks.push(...darkstorm_attacks)
skullmaker.attacks.push(...skullmaker_attacks)
redtint.attacks.push(...redtint_attacks)
nigtmare.attacks.push(...nigthmare_attacks)
silentdeath.attacks.push(...silentdeath_attack)


beats.push(fuegosangre,silentdeath,nigtmare,redtint,skullmaker,darkstorm)



function startGame (){
    sectionReset.style.display = 'none'
    sectionCombat.style.display = 'none'
    sectionViewMap.style.display = 'none'
    beats.forEach((Beast) => {
    beatsOption = `
    <input type="radio" name="dragon" id=${Beast.name}>
    <label class="dragontarget" for=${Beast.name}>
    <p>${Beast.name}</p>
    <img src=${Beast.photo} alt=${Beast.name}>
    </label> 
    `
    target_container.innerHTML += beatsOption  
inputFuegoSangre = document.getElementById('Fuegosangre')
inputdarkstorm = document.getElementById('Darkstorm')
inputskullmaker = document.getElementById('Skullmaker')
inputredtint = document.getElementById('Redtint')
inputnigthmare = document.getElementById('Nigtmare')
inputsilentdeath = document.getElementById('Silentdeath')
    
})
dragonButttom.addEventListener('click', selectDragon)
resetButtom.addEventListener('click', resetGame)
 
addGame()
}
function addGame(){
    fetch("http://localhost:8080/unirse")
        .then(function(res){
            if(res.ok){
                res.text()
                .then(function (respuesta) {
                    playerId = respuesta
                })
            }
        })
}

function selectDragon(){
    let play = 1
    let sectionselect = document.getElementById('dragon')
    if( inputFuegoSangre.checked){
        spanDragonPlayer.innerHTML = inputFuegoSangre.id
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputFuegoSangre.id
    }else if(inputdarkstorm.checked){
        spanDragonPlayer.innerHTML = inputdarkstorm.id
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputdarkstorm.id
    }else if(inputskullmaker.checked){
        spanDragonPlayer.innerHTML =  inputskullmaker.id
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputskullmaker.id
    }else if(inputredtint.checked){
        spanDragonPlayer.innerHTML = inputredtint.id
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputredtint.id
    }else if(inputnigthmare.checked){
        spanDragonPlayer.innerHTML = inputnigthmare.id
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputnigthmare.id 
    }else if(inputsilentdeath.checked){
        spanDragonPlayer.innerHTML = inputsilentdeath.id
        play = 1
        sectionselect.style.display = 'none'
        dragonSelected = inputsilentdeath.id    
    }else{
        alert("you dont select any dragon")
        play = 0;
    }
    if(play == 1){
        toSelectDragon(dragonSelected)
        extractAttacks(dragonSelected)
        sectionViewMap.style.display = 'flex'
        startMap()
        
    } 
}

function toSelectDragon(dragonSelected) {
    fetch(`http://localhost:8080/firequest/${playerId}`, {
        method: "post",
        headers: {
           "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            dragon:dragonSelected
        })
    })
}

function extractAttacks(dragonSelected){
    let attacks
    for (let i = 0; i < beats.length; i++) {
       if (dragonSelected === beats[i].name) {
        attacks = beats[i].attacks
       }
        
    }
    mostrarataques(attacks)
}

function mostrarataques(attacks){
    attacks.forEach((attack) =>{
        beastAttack = `
        <button id=${attack.id} class="attackButtom BAttack">${attack.nombre} 
<img src=${attack.image} alt="bloodSymbol">
        </button>
        `
        attackContainer.innerHTML += beastAttack
    })
    bloodButtom = document.getElementById('blood-buttom')
    ShadowButtom = document.getElementById('shadow-buttom')
    poisonButtom = document.getElementById('poison-buttom')
    buttons = document.querySelectorAll('.BAttack')

}

function secuencyAttack(){
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent === 'Blood \n\n        ') {
                playerAttack.push('BlOOD')
                console.log(playerAttack)
                button.style.background = '#112f58'
                button.disabled = true
            }else if (e.target.textContent == 'Poison \n\n        ') {
                playerAttack.push('POISON')
                console.log(playerAttack)
                button.style.background = '#112f58'
                button.disabled = true
            }else{
                playerAttack.push('SHADOW')
                console.log(playerAttack)
                button.style.background = '#112f58'
                button.disabled = true
            }
            if(playerAttack.length===4){
                sendAttacks()
            }
            
        })
    })
}

function sendAttacks(){
    fetch(`http://localhost:8080/firequest/${playerId}/attacks`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: playerAttack
        })
    })

    intervalo = setInterval(getAttacks, 50)
}

function getAttacks(){
    fetch(`http://localhost:8080/firequest/${enemyID}/attacks`)
    .then(function(res){
        if (res.ok){
            res.json()
            .then(function ({ataques}){
                if(ataques.length===4){
                    enemyAttack = ataques
                    combat()
                }
            })
        }
    })
}

function selectEnemy (enemyBeast){
        spanDragonenemy.innerHTML = enemyBeast.name
        enemyDragonAttack = enemyBeast.attacks
        secuencyAttack()
}

function otherAttack(){
    let enemyPunch = azar(0,enemyDragonAttack.length-1)
        if(enemyPunch == 0|| enemyPunch ==1){
            enemyAttack.push('BlOOD')
        }else if(enemyPunch == 2){
            enemyAttack.push('SHADOW')
        }else{
            enemyAttack.push('POISON')
        }
        startcombat()
}
function startcombat() {
    if(playerAttack.length===4){
        combat()
    }
}

function battlefinish(){
        if(playerVictories==enemyVictories){
            createFinalMessage("this combat was a draw")
        }else if (playerVictories>enemyVictories) {
            createFinalMessage("you won this combat")
        }else{
            createFinalMessage("you lost this combat")
            
        }    
}


function createFinalMessage(finalResult){
    rewindAttacks.innerHTML = finalResult
    sectionReset.style.display = 'flex'
}

function azar(min, max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

function printAttacks(result){
        let newPlayerAttack = document.createElement('p')
        let newEnemyAttack = document.createElement('p')
        rewindAttacks.innerHTML = result
        newPlayerAttack.innerHTML = indexPlayerAttack
        newEnemyAttack.innerHTML =indexEnemyAttack
        rewindPlayerAttacks.appendChild(newPlayerAttack)
        rewindEnmeyAttacks.appendChild(newEnemyAttack)
}

function indexBothOponents(index) {
    indexPlayerAttack = playerAttack[index]
    indexEnemyAttack = enemyAttack[index]
}

function combat(){
    clearInterval(intervalo)
    for (let i = 0; i < playerAttack.length; i++) {
        if (playerAttack[i] == enemyAttack[i]) {
            indexBothOponents(i)
            printAttacks("its a draw")
        }else if( playerAttack[i] == 'POISON' && enemyAttack[i] == 'BlOOD'){
            indexBothOponents(i)
            printAttacks("you won")
            playerVictories = playerVictories+1
            playerLifePoints.innerHTML= playerVictories 
        }else if( playerAttack[i] == 'BlOOD' && enemyAttack[i] == 'SHADOW'){
            indexBothOponents(i)
            printAttacks("you won")
            playerVictories = playerVictories+1
            playerLifePoints.innerHTML= playerVictories
        }else if( playerAttack[i] == 'SHADOW' && enemyAttack[i] == 'POISON'){
            indexBothOponents(i)
            printAttacks("you won")
            playerVictories = playerVictories+1
            playerLifePoints.innerHTML= playerVictories
        }else{
            indexBothOponents(i)
            printAttacks("you loose")
            enemyVictories = enemyVictories+1
            enemyLifePoint.innerHTML= enemyVictories
        }
        
    }
battlefinish()
}

function printCanva(){

    myDragon.x = myDragon.x + myDragon.velocityX
    myDragon.y = myDragon.y + myDragon.velocityY
    canvaMap.clearRect(0,0,map.width, map.height)
    canvaMap.drawImage(
        mapBackGround,
        0,
        0,
        map.width,
        map.height
    )
    myDragon.printBeast()

    sendPosition(myDragon.x, myDragon.y)   

    dragonEnemigos.forEach(function (dragon){
        dragon.printBeast()
        colitionsReview(dragon)
    })
}

function sendPosition(x,y) {
    fetch(`http://localhost:8080/firequest/${playerId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if(res.ok){
            res.json()
            .then(function({enemies}){
                console.log(enemies)
                dragonEnemigos = enemies.map(function(enemie){
                    let dragonEnemigo = null
                    const dragonName = enemie.dragon.name||""
                    if(dragonName=="Fuegosangre"){
                        dragonEnemigo = new Beast('Fuegosangre','./resources/fuegosol.png',5,'./resources/fuegosolAvatar.png', enemie.id)
                    }else if(dragonName=="Skullmaker"){
                        dragonEnemigo = new Beast('Skullmaker','./resources/skullmaker.png', 5, './resources/skullmakerAvatar.png', enemie.id)
                    }else if(dragonName=="Redtint"){
                        dragonEnemigo = new Beast('Redtint','./resources/redtint.png',5, './resources/redtintAvatar.png', enemie.id)
                    }else if(dragonName=="Nigtmare"){
                        dragonEnemigo = new Beast('Nigtmare','./resources/nigthmare.png',5,'./resources/nigthmareAvatar.png', enemie.id)
                    }else if(dragonName=="Silentdeath"){
                        dragonEnemigo = new Beast('Silentdeath','./resources/silentdeath.png',5, './resources/silentdeathAvatar.png', enemie.id)
                    }else if(dragonName=="Darkstorm"){
                        dragonEnemigo = new Beast('Darkstorm', './resources/darkstorm.png', 5,'./resources/darkstormAvatar.png', enemie.id)
                    }

                    dragonEnemigo.x = enemie.x
                    dragonEnemigo.y = enemie.y    
                    
                    return dragonEnemigo                
                })
            })
        }
    })
}

function moveRIGTH() {
    myDragon.velocityX = 5
}

function moveLEFT() {
    myDragon.velocityX = -5
}

function moveDOWN() {
    myDragon.velocityY = 5
}

function moveUP() {
    myDragon.velocityY = -5
}

function stopMovement(){
    myDragon.velocityX = 0
    myDragon.velocityY = 0
}

function resetGame(){
    location.reload()
}

function keyPressed(event){
    switch (event.key) {
        case 'ArrowUp':
            moveUP()
            break;
        case 'ArrowDown':
            moveDOWN()
            break;

        case 'ArrowLeft':
            moveLEFT()
            break;

        case 'ArrowRight':
            moveRIGTH()
            break;
        default:
            break;
    }
}

function startMap() {
    map.width = 800
    map.height = 550
    myDragon = getDragon()
    intervalo = setInterval(printCanva, 80)
    window.addEventListener('keydown', keyPressed)
    window.addEventListener('keyup', stopMovement)
}

function getDragon(){
    for (let i = 0; i < beats.length; i++) {
        if (dragonSelected === beats[i].name) {
         return beats[i]
        }
     }
}

function colitionsReview(enemyBeast){
    const upEnemy = enemyBeast.y
    const downEnemy = enemyBeast.y + enemyBeast.height
    const rigthEnemy = enemyBeast.x + enemyBeast.width
    const leftEnemy = enemyBeast.x

    const upBeast = myDragon.y
    const downBeast = myDragon.y + myDragon.height
    const rigthBeast = myDragon.x + myDragon.width
    const leftBeast = myDragon.x

    if (downBeast < upEnemy||
        upBeast > downEnemy||
        rigthBeast < leftEnemy||
        leftBeast > rigthEnemy){
        return    
    }
    stopMovement()
    clearInterval(intervalo)
    enemyID = enemyBeast.id
    sectionCombat.style.display = 'flex'
    sectionViewMap.style.display= 'none'
    selectEnemy(enemyBeast)
}

window.addEventListener('load', startGame)