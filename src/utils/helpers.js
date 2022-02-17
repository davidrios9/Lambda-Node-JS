const config = require('../config/config');

let header = (token) => {
    return headers = {
        'Authorization': `${token.token_type} ${token.access_token}`,
        'Content-Type': 'application/json'
    }
}

// enviamos la configuración para consumir el servicio con Axios según el momento del proceso
let optionsAxios = (moment, token, data, workItem) => {  
    switch (moment) {
        case 'obtenerToken':
            return options = {
                method: 'post',
                baseURL: `https://${config.Hostname}/${config.PathObtenerToken}`,
                data: config.DataObtenerToken,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': config.Authorization
                },
            }
            break;
        case 'crearCaso':
            return options = {
                method: 'post',
                baseURL: `https://${config.Hostname}${config.PathCrearCaso}`,
                data,
                headers: header(token)
            }
            break;
        case 'obtenerWorkItem':
            const path = config.PathObtenerWorkItem.replace('IDCASE', data);
            return options = {
                baseURL: `https://${config.Hostname}${path}`,
                method: 'get',
                headers: header(token)
            }
            break;
        case 'avanzarCaso':
            const pathAC = config.PathAvanzarCaso.replace('IDCASE', workItem.idCase).replace('IDWORKITEM', workItem.idWorkitem);
            return options = {
                baseURL: `https://${config.Hostname}/${pathAC}`,
                method: 'post',
                data,
                headers: header(token)
            }
            break;
    }
}

// retornamos el request que se hace en la Odata según el momento
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
    header,
    obtenerRequestCrearCaso,
    obtenerRequestAvanzarMomento1,
    obtenerRequestAvanzarMomento2,
    optionsAxios
}