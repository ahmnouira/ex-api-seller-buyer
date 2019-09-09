const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3333/test_stagesIT', { useNewUrlParser: true } );

mongoose.connection.on('connect', function(){
  console.log('** mongoose connect *** ')
})
