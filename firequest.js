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

let beats = []
let buttons =[]
let beatsOption
let playerAttack = []
let enemyAttack = []
let dragonSelected
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

class Beast {
    constructor(name, photo, lifes){
        this.name = name
        this.photo = photo
        this.lifes = lifes
        this.attacks = []
    }
}

let fuegosangre = new Beast('Fuegosangre','./resources/fuegosol.png',5)
let darkstorm = new Beast('Darkstorm', './resources/darkstorm.png', 5)
let skullmaker = new Beast('Skullmaker','./resources/skullmaker.png', 5)
let redtint = new Beast('Redtint','./resources/redtint.png',5)
let nigtmare = new Beast('Nigtmare','./resources/nigthmare.png',5)
let silentdeath = new Beast('Silentdeath','./resources/silentdeath.png',5)

fuegosangre.attacks.push(
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
)

darkstorm.attacks.push(
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},

)

skullmaker.attacks.push(
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},

)

redtint.attacks.push(
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},

)

nigtmare.attacks.push(
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},

)

silentdeath.attacks.push(
    {nombre: 'Blood', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: 'Poison', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Poison', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: 'Shadow', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
)

beats.push(fuegosangre,silentdeath,nigtmare,redtint,skullmaker,darkstorm)



function startGame (){
    dragonButttom.addEventListener('click', selectDragon)
    resetButtom.addEventListener('click', resetGame)
    sectionReset.style.display = 'none'
    sectionCombat.style.display = 'none'
    beats.forEach((Beast) => {
    beatsOption = `
    <input type="radio" name="dragon" id=${Beast.name}>
    <label class="dragontarget" for=${Beast.name}>
    <p>${Beast.name}</p>
    <img src=${Beast.photo} alt=${Beast.name}>
    </label> 
    `
    target_container.innerHTML += beatsOption   
})

 inputFuegoSangre = document.getElementById('Fuegosangre')
 inputdarkstorm = document.getElementById('Darkstorm')
 inputskullmaker = document.getElementById('Skullmaker')
 inputredtint = document.getElementById('Redtint')
 inputnigthmare = document.getElementById('Nigtmare')
 inputsilentdeath = document.getElementById('Silentdeath')

}

function selectDragon(){
    let play = 1
    let sectionselect = document.getElementById('dragon')
    if( inputFuegoSangre.checked){
        spanDragonPlayer.innerHTML = inputFuegoSangre.id
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputFuegoSangre.id
    }else if(inputdarkstorm.checked){
        spanDragonPlayer.innerHTML = inputdarkstorm.id
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputdarkstorm.id
    }else if(inputskullmaker.checked){
        spanDragonPlayer.innerHTML =  inputskullmaker.id
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputskullmaker.id
    }else if(inputredtint.checked){
        spanDragonPlayer.innerHTML = inputredtint.id
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputredtint.id
    }else if(inputnigthmare.checked){
        spanDragonPlayer.innerHTML = inputnigthmare.id
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
        dragonSelected = inputnigthmare.id 
    }else if(inputsilentdeath.checked){
        spanDragonPlayer.innerHTML = inputsilentdeath.id
        play = 1
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        dragonSelected = inputsilentdeath.id    
    }else{
        alert("you dont select any dragon")
        play = 0;
    }
    if(play == 1){
        extractAttacks(dragonSelected)
        selectEnemy()
    } 
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
            }else if (e.target.textContent == 'Poison \n\n        ') {
                playerAttack.push('POISON')
                console.log(playerAttack)
                button.style.background = '#112f58'
            }else{
                playerAttack.push('SHADOW')
                console.log(playerAttack)
                button.style.background = '#112f58'
            }
            otherAttack()
        })
    })
}

function selectEnemy (){
        let enemyRandom = azar(0,beats.length-1)
        spanDragonenemy.innerHTML = beats[enemyRandom].name
        enemyDragonAttack = beats[enemyRandom].attacks
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
    bloodButtom.disabled = true
    ShadowButtom.disabled = true
    poisonButtom.disabled = true
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

function resetGame(){
    location.reload()
}

window.addEventListener('load', startGame)