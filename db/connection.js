const mongoose = require('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(proces.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/project')
}

module.exports = mongoose
