(function () {
    'use strict';
    console.log('Immediate execution of rabbit service....');
    module.exports = {
        createRabbit: createRabbit,
        fetchRabbits: fetchRabbits
    };

    var RabbitModel = require('./rabbit.module')().RabbitModel;

    function createRabbit(rabbit) {
        return RabbitModel.create(rabbit);
    }

    function fetchRabbits() {
        return RabbitModel.find({})
            .exec();
    }

})();
