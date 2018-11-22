const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommoditySchema = new Schema({
    id: Number,
    name: String,
    current_price: {
        value: Number,
        currency_code: String,
        commodity_desc: String
    }
});


// Export the model
module.exports = mongoose.model('Commodity', CommoditySchema);