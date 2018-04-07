const mongoose = require('../db/connection')

const PlaygroundSchema = new mongoose.Schema({
  name: String,
  about: String,
  link: String,
  codeSnippet: String
})

const Playground = mongoose.model('Playground', PlaygroundSchema)

module.exports = Playground
