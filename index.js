const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const post = require("./models/post.js")
const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())



// let postagem = []
// rota GET para enviar as informações
app.get("/postagem", async (req, res) => {
    const posts = await  post.find()
    if (Object.keys(posts).length === 0) {
        res.send("Sem postagem nenhuma")
        return
    }
    res.send(posts)
})

// mostrando uma postagem unica GET
app.get("/postagem/:id", (req, res) => {
    const postID = parseInt(req.params.id)
    const singularPost = postagem.find((p) => p.id === postID)
    res.send(singularPost)
})


// rota para criar POST, uma nova postagem
app.post("/postagem", async (req, res) => {
    const posta = req.body

    if (!posta || Object.keys(posta).length === 0 ) {
        res.status(400).send("sem dados para enviar")
        return
    }
    const novaPostagem = await post.create(posta)
    res.status(200).send(`Publicação feita com sucesso! ${novaPostagem}`)


})

// rota para apagar uma nova postagem DELETE
app.delete("/postagem/:id", (req, res) => {
    const postId = parseInt(req.params.id)
    postagem = postagem.filter((p) => p.id !== postId)
    res.status(200).send("Potagem apagada com sucesso!")
})



mongoose.connect("mongodb+srv://loidpadre:2IOEqFbPiA7KzvRd@cluster0.xg9wqdr.mongodb.net/?retryWrites=true&w=majority")
    .then(() =>
        console.log("Banco de dados connectado!")
    ).catch(() => console.log("deu RUIN"))
app.listen(PORT, () => {
    console.log(`O servidor esta rodando na pota ${PORT}`)
})