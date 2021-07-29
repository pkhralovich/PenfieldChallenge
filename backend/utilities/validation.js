function extractErrors(joiValidation) {
    let oRes = {};
    
    if (joiValidation && joiValidation.error) {
        joiValidation.error.details.forEach(error => {
            oRes[error.context.key] = error.message;
        });
    }

    return oRes;
}

module.exports = {
    extractErrors
}