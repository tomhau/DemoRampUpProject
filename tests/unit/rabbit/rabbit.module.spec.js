var chai = require('chai');
var expect = chai.expect;

var RabbitModule = require('../../../modules/rabbit/rabbit.module');

describe('RabbitModule', function () {

    describe('rabbit.module file', function () {
        it('should confirm RabbitModule function exist', function () {
            expect(RabbitModule).to.be.a('function');
        });

        it('should confirm RabbitModule function returns an object', function () {
            expect(RabbitModule()).to.be.a('object');
        });

        it('should confirm RabbitController function exist', function () {
            expect(RabbitModule().RabbitController).to.be.a('function');
        });

        it('should confirm RabbitMiddleware object exist', function () {
            expect(RabbitModule().RabbitMiddleware).to.be.a('object');
        });

        it('should confirm RabbitService object exist', function () {
            expect(RabbitModule().RabbitService).to.be.a('object');
        });

        it('should confirm RabbitModel function exist', function () {
            expect(RabbitModule().RabbitModel).to.be.a('function');
        });

    });

});