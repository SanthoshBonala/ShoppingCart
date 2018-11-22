const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const schema = new Schema({
    productid: { 
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: [true, 'productid missing']
    },
    userid: {
        type: String,
        trim: true,
        required: [true, 'userid is missing']
    },
    nameoncard: {
        type: String,
        trim: true,
        required: [true, 'nameoncard is missing']
    },
    cardnumber: {
        type: String,
        trim: true,
        required: [true, 'cardnumber is missing']
    },
    reviewmessage: {
        type: String,
        trim: true
    },
    rating: {
        type: Number
    }

})

const order = mongoose.model('order', schema)


module.exports = {
   // getorders: (user_id, cb) => order.find({userid: user_id}, cb).populate('productid'),
    placeorder: data => new order(data).save(),
    deleteorder: orderid => order.findByIdAndRemove(orderid),
    updateorder: (orderid, data) => order.findByIdAndUpdate(orderid, data),
    getorderbyid: user_id => order.find({userid: user_id}).populate('productid')
}
    

