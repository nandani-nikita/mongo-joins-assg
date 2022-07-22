
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nikita:assg@cluster0.zswia.mongodb.net/joins-assg?retryWrites=true&w=majority', { useNewUrlparser: true }, (err) => {
    if (!err) {
        console.log('Mongo Connection Successful.');
    } else {
        console.log('Mongo Connection Failed',err);
    }
});

require('./userModel');
require('./teamModel');
