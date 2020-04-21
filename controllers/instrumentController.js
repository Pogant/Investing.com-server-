Instrument = require('../models/instrumentModel');

dbController = require('./dbController');

var instrumentList = dbController.db;

exports.index = function (req, res) {
    //No check is needed here.
    res.json({
        status: "success",
        message: "Instruments retrieved successfully",
        data: instrumentList
    });
};

exports.new = function (req, res) {
    var instrument = new Instrument(
        req.body.instrumentId,
        req.body.name,
        req.body.symbol,
        req.body.instrumentType
    );
    //I'm checking here only the ID property, but more checks can be added according to the definition of the project.
    //If there is any unique fields the error will appear after trying to insert an object|row with existing value.
    if(typeof instrument.instrumentId !== 'undefined' && instrument.instrumentId) {
        instrumentList.push(instrument);
        res.json({
            status: 'success',
            message: 'New instrument created!',
            data: instrument
        });
    } else {
        res.json({
            status: 'failed',
            message: 'Id is empty'
        })
    }
    
};

exports.delete = function (req, res) {
    //Here I'm using filter so I don't have any indication if ID exists. (Sure I can loop through and check manually)
    //So there is no error check, but while working with DB (Mongo or SQL) we always have indication of how many documents or rows were updated
    //And according to that number we decide how to handle errors
    instrumentList = instrumentList.filter(obj => obj.instrumentId != req.params.instruments_id); 
    res.json({
        status: "success",
        message: 'Instrument deleted'
    });
};