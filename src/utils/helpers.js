const config = require('../config/config');

let header = (token) => {
    return header = {
        'Authorization': `${token.token_type} ${token.access_token}`,
        'Content-Type': 'application/json'
    }
}

let optionsAxios = (moment, token, data, workItem) => {

    // enviamos las opciones de configuración según el momento
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

const obtenerRequestCrearCaso = (requestSQS) => {
    return requestMoments(requestSQS, 'eJson1');
}

const obtenerRequestAvanzarMomento1 = (requestSQS) => {
    return requestMoments(requestSQS, 'ejson2');
}

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