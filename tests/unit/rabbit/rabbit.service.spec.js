'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
require('sinon-mongoose');

var mongoose = require('mongoose');

var RabbitModule = require('../../../modules/rabbit/rabbit.module')();
var RabbitModel = RabbitModule.RabbitModel;
var RabbitService = RabbitModule.RabbitService;

var Fixtures = require('../../fixtures/fixtures');
var RabbitFixture = Fixtures.RabbitFixture;


var RabbitModelMock;

describe('RabbitService', function () {

    beforeEach(function () {
        RabbitModelMock = sinon.mock(RabbitModel);
    });

    afterEach(function () {
        RabbitModelMock.restore();

        mongoose.models = {};
        mongoose.modelSchemas = {};

        return mongoose.connection.close();
    });

    describe('createRabbit', function () {
        var newRabbit, expectedCreatedRabbit;

        it('should successfully create new customer', function () {
            newRabbit = RabbitFixture.newRabbit;
            expectedCreatedRabbit = RabbitFixture.createdRabbit;

            RabbitModelMock.expects('create')
                .withArgs(newRabbit)
                .resolves(expectedCreatedRabbit);

            return RabbitService.createRabbit(newRabbit)
                .then(function (data) {
                    RabbitModelMock.verify();
                    expect(data).to.deep.equal(expectedCreatedRabbit);
                });
        });

      

    });

    describe('fetchRabbits', function () {
        var expectedRabbits;

        it('should successfully fetch all rabbits', function () {
            expectedRabbits = RabbitFixture.rabbits;

            RabbitModelMock.expects('find')
                .withArgs({})
                .chain('exec')
                .resolves(expectedRabbits);

            return RabbitService.fetchRabbits()
                .then(function (data) {
                    RabbitModelMock.verify();
                    expect(data).to.deep.equal(expectedRabbits);
                });

        });

       
    });

});