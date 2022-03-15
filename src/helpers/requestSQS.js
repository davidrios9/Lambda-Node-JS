process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// retornamos el request que se hace en la Odata según el momento
let requestMoments = (body, xptah) => {
    return JSON.stringify({
        startParameters: [
            {
                "xpath": `MultiOfertaBancaIndepend.${xptah}`,
                "value": body
            }
        ]
    });
}

// request Odata creación de caso
const obtenerRequestCrearCaso = (requestSQS) => {
    return requestMoments(requestSQS, 'eJson1');
}

// request Odata momento 1
const obtenerRequestAvanzarMomento1 = (requestSQS) => {
    return requestMoments(requestSQS, 'ejson2');
}

// request Odata momento 2
const obtenerRequestAvanzarMomento2 = (requestSQS) => {
    return requestMoments(requestSQS, 'ejson3');
}

module.exports = {
    obtenerRequestCrearCaso,
    obtenerRequestAvanzarMomento1,
    obtenerRequestAvanzarMomento2    
}