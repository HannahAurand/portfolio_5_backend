const mongoose = require('../db/connection')

const ExperienceSchema = new mongoose.Schema({
  job: String,
  location: String,
  duties: String,
  dates: String,
  skillsAcquired: String,
  managerName: String,
  managerContact: String,
  likes: String,
  dislikes: String,
  reasonLeft: String
})

const Experience = mongoose.model('Experience', ExperienceSchema)

module.exports = Experience
