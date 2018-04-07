const LandingPage = require('../models/LandingPage')

LandingPage.remove({}).then(() => {
  LandingPage.create({
    name: 'Hannah Aurand',
    image: 'https://imgur.com/gallery/KglrK9k',
    welcomeMessage: 'Hello, World',
    about: 'I am trying to be an API',
    careerGoals:
      'I need a job to pay off my student debt (and fund my addiction to dance).'
  }).then(about => {
    console.log(about)
    process.exit()
  })
})
