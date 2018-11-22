
var CommodityModel = require('../models/commodity')
var ObjectId = require('mongoose').Types.ObjectId;
exports.commodity_create = function (req, res) {
    let commodity = new CommodityModel(
        {
            id: req.body.id,
            name: req.body.name,
            current_price: {
                value: req.body.current_price.value,
                currency_code: req.body.current_price.currency_code,
                commodity_desc: req.body.current_price.commodity_desc
            }
        }
    );

    commodity.save(function (err) {
        if (err) {
            res.send('Commodity Not Created. '+ err)
        }
        res.send('Commodity Created successfully')
    })
};

exports.commodity_get_by_id = function (req, res) {
    CommodityModel.findOne({id : req.params.id }, { '_id': 0, '__v': 0},function (err, commodity) {
        if (err) res.send(err);
        res.send(commodity);
    })
};

exports.commodity_get_all_commodities= function (req, res) {
    CommodityModel.find({},{ '_id': 0, '__v': 0} , function (err, commodity) {
        if (err) res.send(err);
        res.send(commodity);
    })
};

exports.commodity_update_by_id= function (req, res) {
    CommodityModel.findOneAndUpdate({id : req.params.id }, {$set: req.body}, function (err, product) {
        if (err) res.send('Commodity not udpated. ' + err);
        res.send('Commodity udpated successfully.');
    });
};

exports.commodity_delete_by_id= function (req, res) {
    CommodityModel.findOneAndDelete({id : req.params.id }, function (err, product) {
        if (err) res.send('Commodity not deleted. ' + err);
        res.send('Commodity deleted successfully.');
    });
};