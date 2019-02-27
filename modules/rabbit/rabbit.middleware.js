(function () {
    'use strict';  
    module.exports = {
        addRabbit: addRabbit,
        getRabbits: getRabbits
    };

    var RabbitService = require('./rabbit.module')().RabbitService;

    function addRabbit(req, res, next) {

        RabbitService.createRabbit(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getRabbits(req, res, next) {

        RabbitService.fetchRabbits()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

})();
