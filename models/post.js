const mongoose = require("mongoose")
//  criando o schema, que sera o modela de dados que vamos guardarno banco de dados
const postSchema = new mongoose.Schema({
    autor: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
// espertando o schema

module.exports = mongoose.model("post", postSchema)