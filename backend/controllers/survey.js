const Survey = require("../models/survey");
const Sale = require("../models/sale");
const Voucher = require("../models/voucher");
const sequelize = require("../utilities/database");
const validationUtils = require("../utilities/validation");

async function create(req, res) {
    let transaction;

    try {
        let surveyData = req.body;
        let validation = Survey.validation().validate(surveyData, { abortEarly: false});
        if (validation.error) {
            let responseBody = validationUtils.extractErrors(validation);
            return res.status(400).send(responseBody);
        }

        transaction = await sequelize.transaction();
        let sale = await Sale.findByPk(surveyData.sale);
        if (sale) {
            let survey = await Survey.findOne({
                where: {
                    sale: sale.id
                }
            });

            if (survey) {
                await transaction.rollback();
                return res.status(409).send();
            }

            await Survey.create(surveyData);
            let voucher = await Voucher.create({ 
                code: generateVoucher(),
                sale: sale.id,
                expirationDate: getExpirationDate()
            });

            //TODO: Send voucher email

            await transaction.commit();
            return res.status(200).send(voucher);
        } else {
            await transaction.rollback();
            return res.status(404).send();
        }
    } catch (e) {
        if (transaction) await transaction.rollback();
        res.status(500).send(e);
    }
}

function generateVoucher() {
    const length = 8;

    let mask = "abcdefghijklmnopqrstuvwxyz";
    mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    mask += "0123456789";
    
    var result = "";
    for (var i = length; i > 0; --i) {
        let index = Math.floor(Math.random() * mask.length);
        result += mask[index];
    }

    return result;
}

function getExpirationDate() {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    return expirationDate;
}

module.exports = {
    create
}