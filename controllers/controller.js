const express = require('express')
const router = express.Router()
const Experience = require('../models/Experience')
const Playground = require('../models/Playground')
const Project = require('../models/Project')
const User = require('../models/User')
const LandingPage = require('../models/LandingPage')

//display landing page
router.get('/', (req, res) => {
  LandingPage.find()
    .then(about => {
      res.json(about)
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/experience', (req, res) => {
  Experience.find()
    .then(experience => {
      res.json(experience)
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/project', (req, res) => {
  Project.find()
    .then(project => {
      res.json(project)
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/playground', (req, res) => {
  Playground.find()
    .then(playground => {
      res.json(playground)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router
