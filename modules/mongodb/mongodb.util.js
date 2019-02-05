(function () {
    'use strict';

    module.exports = {
        init: init
    };

    var mongoose = require('mongoose');

    // Simple version of connect! when is this invoked?
    function init() {
        mongoose.connect('mongodb://localhost:27017/zooDB');    
    }

})();