(function () {
    'use strict';

    module.exports = {
        init: init
    };

    var mongoose = require('mongoose');

    function init() {
        mongoose.connect('mongodb://localhost:27017/zooDB',{ useNewUrlParser: true });   // UPDATED 
    }
})();