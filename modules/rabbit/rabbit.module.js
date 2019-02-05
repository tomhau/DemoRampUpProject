(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            RabbitController: require('./rabbit.controller'),
            RabbitMiddleware: require('./rabbit.middleware'),
            RabbitService: require('./rabbit.service'),
            RabbitModel: require('./rabbit.model')
        }
    }

})();
