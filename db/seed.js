const LandingPage = require('../models/LandingPage')
const Experience = require('../models/Experience')
const Project = require('../models/Project')
const Playground = require('../models/Playground')

//seed data for to make sure the api is rendering
//json data at all necessary routes.

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
  })
})

Experience.remove({}).then(() => {
  Experience.create({
    job: 'Spanish Teacher K-12',
    location: 'Montgomery County Public Schools',
    duties: 'Babysit children who do not want to learn -_-',
    dates: '2017',
    skillsAcquired:
      'Backward Design for lesson plans, tutor kids, teach classes, manage classroom of 30 students 5x a day',
    managerName: 'MCPS',
    managerContact: 'MCPS email',
    likes: 'planning',
    dislikes: 'kids',
    reasonLeft:
      'I did not enjoy working with the kids as much as learning the language.'
  }).then(experience => {
    console.log(experience),
      Experience.create({
        job: 'Substitute Teacher',
        location: 'Selinsgrove Area High School',
        duties: 'Babysit children who do not want to learn.',
        dates: '2015-2017',
        skillsAcquired:
          'Backward Design for lesson plans, tutor kids, teach classes, manage classroom of 30 students 5x a day',
        managerName: 'SAHS',
        managerContact: 'SAHS email',
        likes: 'planning, fun to joke with kids',
        dislikes: 'rules',
        reasonLeft:
          'I did not enjoy working with the kids as much as learning on my own.'
      }).then(experience => {
        console.log(experience)
      })
  })
})

Project.remove({}).then(() => {
  Project.create({
    name: 'Spanish Trivia',
    description: 'A basic language-learning prototype',
    image:
      'https://www.google.com/search?biw=1280&bih=726&tbm=isch&sa=1&ei=mCLJWuulGeyKjwSB-qOICw&q=bull+cartoon+png+open+source&oq=bull+cartoon+png+open+source&gs_l=psy-ab.3...13350.15852.0.15951.16.15.0.1.1.0.144.1381.10j5.15.0....0...1c.1.64.psy-ab..0.5.356...0j0i8i10i30k1j0i8i30k1j0i30k1.0.451r2ICTJlM&safe=active&ssui=on#imgrc=-gfSB8g03-w-2M:',
    languages: 'HTML, CSS, Javascript ',
    link: 'https://hannahaurand.github.io/SpanishTrivia/'
  }).then(project => {
    console.log(project)
  })
  Project.create({
    name: 'Faith Forward',
    description:
      'An app for faith organizations to post their events in one space.',
    image: '',
    languages: 'MEHN Stack (Mongoose, Express, Handlebars, NodeJS',
    link: 'https://faithforward.herokuapp.com/'
  })
  Project.create({
    name: 'Starving Artist',
    description: 'An app for art students in DC to share their artwork.',
    image: '',
    languages: 'MEHN Stack (Mongoose, Express, React, NodeJS',
    link: 'http://starving-artist.surge.sh/'
  })
})

Playground.remove({}).then(() => {
  Playground.create({
    name: 'Reverse a string or number',
    about: 'a function to reverse the order of a number',
    link:
      'https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php',
    codeSnippet: 'insert code here'
  }).then(project => {
    console.log(project)
    process.exit()
  })
})
