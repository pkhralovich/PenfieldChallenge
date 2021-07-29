const Sale = require("../models/sale");
const Customer = require("../models/customer");

async function create(req, res) {
    try {
        if (req.params.customer) {
            let customer = await Customer.findByPk(req.params.customer);
            if (customer) {
                let sale = await Sale.create({ customer: req.params.customer} );

                //TODO: Send satisfaction mail

                return res.status(200).send(sale);
            }
        }
        
        return res.status(400).send( { customer: "Invalid customer Id"} );
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = {
    create
}