const express = require('express')
const router = express.Router()
const Experience = require('../models/Experience')
const Playground = require('../models/Playground')
const Project = require('../models/Project')
const User = require('../models/User')
const LandingPage = require('../models/LandingPage')

//Display landing page
router.get('/', (req, res) => {
  LandingPage.find()
    .then(about => {
      res.json(about)
    })
    .catch(error => {
      console.log(error)
    })
})

//Display experience page
router.get('/experience', (req, res) => {
  Experience.find()
    .then(experience => {
      res.json(experience)
    })
    .catch(error => {
      console.log(error)
    })
})

//-------------------------------JS PLAYGROUND CRUD------------------------------------------

//DISPLAY the playground page
router.get('/playground', (req, res) => {
  Playground.find()
    .then(playground => {
      res.json(playground)
    })
    .catch(error => {
      console.log(error)
    })
})

//CREATE a new playground

router.post('/playground/create', (req, res) => {
  Playground.create({
    name: req.body.name,
    about: req.body.about,
    link: req.body.link,
    codeSnippet: req.body.codeSnippet
  })
    .then(() => {
      project.save()
    })
    .then(() => {
      res.json('Playground added')
    })
})

//DISPLAY a specific playground page
router.get('/playground/:id', (req, res) => {
  Playground.findOne({ _id: req.params.id })
    .then(playground => {
      res.json(playground)
    })
    .catch(err => {
      console.log(err)
    })
})

//UPDATE a specific playground
router.put('/playground/:id', (req, res) => {
  Playground.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json('Playground updated')
    })
    .catch(err => {
      console.log(err)
    })
})
//DELETE a specific playground
router.delete('/playground/:id', (req, res) => {
  Playground.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.json('Playground Removed')
    })
    .catch(err => {
      console.log(err)
    })
})

//--------------------------------PROJECT PAGE CRUD---------------------------------------------

//DISPLAY ALL projects page
router.get('/project', (req, res) => {
  Project.find()
    .then(project => {
      res.json(project)
    })
    .catch(error => {
      console.log(error)
    })
})

//CREATE a new project on the projects page
router.post('/project', (req, res) => {
  Project.create({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    languages: req.body.languages,
    link: req.body.link
  })
    .then(() => {
      project.save()
    })
    .then(() => {
      res.json('Project added')
    })
    .catch(err => {
      console.log(err)
    })
})

//DISPLAY SPECIFIC project at specific project page
router.get('/project/:id', (req, res) => {
  Project.findOne({ _id: req.params.id })
    .populate('projects')
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      console.log(err)
    })
})

//UPDATE project details at specific project page
router.put('/project/:id', (req, res) => {
  Project.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json('Project updated')
    })
    .catch(err => {
      console.log(err)
    })
})

//DELETE a project from the individual project page
router.delete('/project/:id', (req, res) => {
  Project.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.json('Project Removed')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
