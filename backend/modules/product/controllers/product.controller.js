const productmodel = require('../../../models/product.model')

let getallproducts = (req, res) => {
    productmodel.getproducts(function (err, products) {
        if (err) res.send(422, err.message)
        return res.json(products)
    })
}

module.exports.getallproducts = getallproducts

let getonebyid = (req, res) => {
    productmodel.getproductbyid(req.params.id)
        .then(product => {
            return res.json(product)
        })
        .catch(err => {
            if (err) res.send(422, err.message)
        })
}
module.exports.getonebyid = getonebyid

let createproduct = (req, res) => {
    productmodel.addproduct(req.body)
        .then(product => {
            return res.send('product added successfully')
        })
        .catch(err => {
            return res.send(422, err.message)
        })
}
module.exports.createproduct = createproduct

let deleteproduct = (req, res) => {
    productmodel.deleteproduct(req.params.id)
        .then(product => {
            return res.send('product deleted successfully')
        })
        .catch(err => {
            return res.send(422, err.message)
        })
}
module.exports.deleteproduct = deleteproduct

let updateproduct = (req, res) => {
    productmodel.updateproduct(req.params.id,req.body)
        .then(product => {
            return res.send('product updated successfully')
        })
        .catch(err => {
            return res.send(422, err.message)
        })
}
module.exports.updateproduct = updateproduct

