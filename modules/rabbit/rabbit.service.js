(function () {
    'use strict';   
    module.exports = {
        createRabbit: createRabbit,
        fetchRabbits: fetchRabbits
    };

    var RabbitModel = require('./rabbit.module')().RabbitModel;

    function createRabbit(rabbit) {
        return RabbitModel.create(rabbit);
    }

    function fetchRabbits() {
        console.log("service code, get All");
        return RabbitModel.find({})
            .exec();
    }

})();
