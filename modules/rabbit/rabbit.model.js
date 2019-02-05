(function () {
    var mongoose = require('mongoose');
    console.log('Immediate execution of rabbit model....');
    var Schema = mongoose.Schema;

    var RabbitSchema = new Schema({
        
        id: String,
        name: String,
        age: Number
    });

    module.exports = mongoose.model('rabbits', RabbitSchema);
})();