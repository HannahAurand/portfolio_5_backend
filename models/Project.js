const mongoose = require('../db/connection')

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  languages: String,
  link: String
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project
