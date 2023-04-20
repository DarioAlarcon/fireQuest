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
let beatsOption
let playerAttack
let enemyAttack
let dragonSelected
let beastAttack
let lifenumber = 3
let enemynumber = 3
let inputFuegoSangre 
let inputdarkstorm
let inputskullmaker 
let inputredtint 
let inputnigthmare 
let inputsilentdeath
let bloodButtom 
let ShadowButtom 
let poisonButtom 


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
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🟣', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
)

darkstorm.attacks.push(
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🟣', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},

)

skullmaker.attacks.push(
    {nombre: '🟣', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🟣', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},

)

redtint.attacks.push(
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🟣', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},

)

nigtmare.attacks.push(
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
    {nombre: '🟣', id: 'poison-buttom', image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},

)

silentdeath.attacks.push(
    {nombre: '🔴', id: 'blood-buttom', image:'./resources/shadow_the_hedgehog_black_arms_symbol_by_scourg3z_der0065-fullview.png'},
    {nombre: '🟣', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: '🟣', id: 'poison-buttom',image:'./resources/Poison-Type-Pokemon-Sword-and-Shield.png'},
    {nombre: '⚫', id: 'shadow-buttom', image:'./resources/kaijudo_shadow_civilization_symbol_by_contreras19_d6gs0mb-fullview.png'},
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
        <button id=${attack.id} class="attackButtom">${attack.nombre} 
            <img src=${attack.image} alt="bloodSymbol">
        </button>
        `
        attackContainer.innerHTML += beastAttack
    })
    bloodButtom = document.getElementById('blood-buttom')
    ShadowButtom = document.getElementById('shadow-buttom')
    poisonButtom = document.getElementById('poison-buttom')
    bloodButtom.addEventListener('click', bloodAttack)
    ShadowButtom.addEventListener('click', shadowAttack)
    poisonButtom.addEventListener('click', poisonAttack)
}

function selectEnemy (){
        let enemyRandom = azar(0,beats.length)
        spanDragonenemy.innerHTML = beats[enemyRandom].name
}

function otherAttack(){
    let enemyPunch = azar(1,3)
        if(enemyPunch == 1){
            enemyAttack = 'BlOOD'
            //alert("the enemy dragon used " + enemyAttack + " Attack")
        }else if(enemyPunch == 2){
            enemyAttack = 'SHADOW'
            //alert("the enemy dragon used " + enemyAttack + " Attack")
        }else if(enemyPunch == 3){
            enemyAttack = 'POISON'
            //alert("the enemy dragon used " + enemyAttack + " Attack")
        }
        combat()
}

function battlefinish(){
        if(lifenumber == 0){
            rewindAttacks.innerHTML = 'you lost the battle 😒'
            bloodButtom.disabled = true
            ShadowButtom.disabled = true
            poisonButtom.disabled = true
            sectionReset.style.display = 'flex'
        }else if(enemynumber == 0){
            rewindAttacks.innerHTML = 'you won the battle 😂'
            bloodButtom.disabled = true
            ShadowButtom.disabled = true
            poisonButtom.disabled = true
            sectionReset.style.display = 'flex'
        }
}

function azar(min, max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

function bloodAttack(){
    playerAttack = 'BlOOD'
    otherAttack()
}

function shadowAttack(){
    playerAttack = 'SHADOW'
    otherAttack()
}

function poisonAttack(){
    playerAttack = 'POISON'
    otherAttack()
}

function printAttacks(result){
        let newPlayerAttack = document.createElement('p')
        let newEnemyAttack = document.createElement('p')
        rewindAttacks.innerHTML = result
        newPlayerAttack.innerHTML = playerAttack
        newEnemyAttack.innerHTML =enemyAttack
        rewindPlayerAttacks.appendChild(newPlayerAttack)
        rewindEnmeyAttacks.appendChild(newEnemyAttack)
}

function combat(){
    if( playerAttack == enemyAttack){
        printAttacks("its a draw")
       }else if( playerAttack == 'POISON' && enemyAttack == 'BlOOD'){
        printAttacks("you won")
        enemynumber=enemynumber-1
        enemyLifePoint.innerHTML = enemynumber 
       }else if( playerAttack == 'BlOOD' && enemyAttack == 'SHADOW'){
        printAttacks("you won")
        enemynumber=enemynumber-1
        enemyLifePoint.innerHTML = enemynumber
       }else if( playerAttack == 'SHADOW' && enemyAttack == 'POISON'){
        printAttacks("you won")
        enemynumber=enemynumber-1
        enemyLifePoint.innerHTML = enemynumber
       }else{
        printAttacks("you loose")
        lifenumber = lifenumber-1
        playerLifePoints.innerHTML= lifenumber
       }
       battlefinish()
}

function resetGame(){
    location.reload()
}

window.addEventListener('load', startGame)