let dragonButttom = document.getElementById('dragon-buttom')
let bloodButtom = document.getElementById('blood-buttom')
let ShadowButtom = document.getElementById('shadow-buttom')
let poisonButtom = document.getElementById('poison-buttom')
let resetButtom = document.getElementById('retry-buttom')
let sectionReset = document.getElementById('retry')
let sectionCombat = document.getElementById('attack')

let inputFuegoSangre = document.getElementById('fuegosangre')
let inputdarkstorm = document.getElementById('darkstorm')
let inputskullmaker = document.getElementById('skullmaker')
let inputredtint = document.getElementById('redtint')
let inputnigthmare = document.getElementById('nigtmare')
let inputsilentdeath = document.getElementById('silentdeath')
let spanDragonPlayer = document.getElementById('dragonPlayer')

let spanDragonenemy = document.getElementById('dragonEnemy')

let rewindAttacks = document.getElementById('result')

let rewindPlayerAttacks = document.getElementById('player-Attacks')
let rewindEnmeyAttacks = document.getElementById('enemy-attacks')

let playerLifePoints = document.getElementById('player-life')
let enemyLifePoint = document.getElementById('enemylife')

let playerAttack
let enemyAttack
let lifenumber = 3
let enemynumber = 3

function startGame (){
    dragonButttom.addEventListener('click', selectDragon)
    bloodButtom.addEventListener('click', bloodAttack)
    ShadowButtom.addEventListener('click', shadowAttack)
    poisonButtom.addEventListener('click', poisonAttack)
    resetButtom.addEventListener('click', resetGame)
    sectionReset.style.display = 'none'
    sectionCombat.style.display = 'none'
}

function selectDragon(){
    let play = 1
    let sectionselect = document.getElementById('dragon')
    if( inputFuegoSangre.checked){
        spanDragonPlayer.innerHTML = 'FuegoSangre'
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
    }else if(inputdarkstorm.checked){
        spanDragonPlayer.innerHTML = 'Darkstorm'
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
    }else if(inputskullmaker.checked){
        spanDragonPlayer.innerHTML = 'Skullmaker'
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
    }else if(inputredtint.checked){
        spanDragonPlayer.innerHTML = 'Redtint'
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
    }else if(inputnigthmare.checked){
        spanDragonPlayer.innerHTML = 'Nightmare'
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'
        play = 1
    }else if(inputsilentdeath.checked){
        spanDragonPlayer.innerHTML = 'Silentdeath'
        play = 1
        sectionCombat.style.display = 'flex'
        sectionselect.style.display = 'none'    
    }else{
        alert("you dont select any dragon")
        play = 0;
    }
    if(play == 1){
        selectEnemy()
    } 
}

function selectEnemy (){
        let enemyRandom = azar(1,6)
        if(enemyRandom == 1){
            spanDragonenemy.innerHTML = 'FuegoSangre'
        }else if(enemyRandom == 2){
            spanDragonenemy.innerHTML = 'Darkstorm'
        }else if(enemyRandom == 3){
            spanDragonenemy.innerHTML = 'SkullMaker'
        }else if(enemyRandom == 4){
            spanDragonenemy.innerHTML = 'Redtint'
        }else if(enemyRandom == 5){
            spanDragonenemy.innerHTML = 'Nightmare'
        }else if(enemyRandom == 6){
            spanDragonenemy.innerHTML = 'Silentdeath'
        }
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