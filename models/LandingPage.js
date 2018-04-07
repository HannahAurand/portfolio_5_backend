const mongoose = require('../db/connection')

const LandingPageSchema = new mongoose.Schema({
  name: String,
  image: String,
  welcomeMessage: String,
  about: String,
  careerGoals: String
})

const LandingPage = mongoose.model('LandingPage', LandingPageSchema)

module.exports = LandingPage
