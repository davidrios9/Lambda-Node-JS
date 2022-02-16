

let headers = (token) => {
    return headers = {
        'Authorization': `${token.token_type} ${token.access_token}`,
        'Content-Type': 'application/json'
    }
}

let requestMoments = (body, xptah) => {
    return JSON.stringify({
        startParameters: [
            {
                "xpath": `idm_cat_CreditoDeConsumo.idmMOSSolicitud.${xptah}`,
                "value": body
            }
        ]
    });
}

obtenerRequestCrearCaso = (requestSQS) => {
    return requestMoments(requestSQS,'eJson1');
}

obtenerRequestAvanzarMomento1 = (requestSQS) => {
    return requestMoments(requestSQS,'eJson2');
}

obtenerRequestAvanzarMomento2 = (requestSQS) => {
    return requestMoments(requestSQS,'eJson3');
}

module.exports = {
    headers,    
    requestMoments,
    obtenerRequestCrearCaso,
    obtenerRequestAvanzarMomento1,
    obtenerRequestAvanzarMomento2
}