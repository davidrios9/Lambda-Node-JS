let getBodyOdata = ( body, path ) => {
    return JSON.stringify({
        startParameters: [
            {
                "xpath": `idm_cat_CreditoDeConsumo.idmSBISolicitud.${path}`,
                "value": body
            }
        ]
    });
}

module.exports = { getBodyOdata }