const mongoose = require('mongoose')
const server = require('./src')

const uri = "mongodb+srv://DatabaseUser1:databaseuser1@cluster0.mj0lo.mongodb.net/todolist?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected…')
    server.listen(5000, () => {
      console.log('Server running on port 5000')
    })
  })
  .catch((error) => console.log(error))
