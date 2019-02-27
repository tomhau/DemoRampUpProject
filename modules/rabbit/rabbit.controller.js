(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();

    var RabbitMiddleware = require('./rabbit.module')().RabbitMiddleware;

    // GET ALL rabbits
    router.get('/',
        RabbitMiddleware.getRabbits,
        function (req, res) {
            console.log("controller code, get All");
            res.status(200).json(req.response);
        });

    // POST a rabbit
    router.post('/',
        RabbitMiddleware.addRabbit,
        function (req, res) {
            res.status(201).json(req.response);
        });
    module.exports = router;
})();
