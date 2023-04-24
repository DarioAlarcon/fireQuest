const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
const players = []

class Player{
    constructor(id){
        this.id = id
    }

    asignarDragon(dragon){
       this.dragon = dragon  
    }

    actualizarPosition(x, y){
        this.x = x
        this.y = y
    }
}

class Dragon{
    constructor(name){
        this.name = name
    }
}

app.get("/unirse", (req, res)=> {
    const id = `${Math.random()}`
    const player = new Player(id)
    players.push(player)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})

app.post("/firequest/:playerId", (req, res)=>{
    const playerId = req.params.playerId||""
    const name = req.body.dragon|| ""
    const dragon = new Dragon(name)

    const playerIndex = players.findIndex((player)=> playerId === player.id)
    
    if(playerIndex >= 0){
        players[playerIndex].asignarDragon(dragon)
    }

    console.log(players)
    console.log(playerId)
    res.end()
})

app.post("/firequest/:playerId/posicion", (req, res) =>{
    const x = req.body.x || 0
    const y = req.body.y || 0
    const playerId = req.params.playerId||""
    const playerIndex = players.findIndex((player)=> playerId === player.id)
    
    if(playerIndex >= 0){
        players[playerIndex].actualizarPosition(x,y)
    }

    const enemies = players.filter((player) => playerId !== player.id)

    res.send({
        enemies
    })
})

app.listen(8080, ()=>{
    console.log("arranco")
})