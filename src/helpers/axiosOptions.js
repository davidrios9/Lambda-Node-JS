const config = require('../config/config');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

let headers = (token) => {
    return  {
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
                baseURL: `https://${config.Hostname}${config.PathObtenerToken}`,
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
                headers: headers(token)
            }
            break;
        case 'obtenerWorkItem':
            const path = config.PathObtenerWorkItem.replace('IDCASE', data);
            return options = {
                baseURL: `https://${config.Hostname}${path}`,
                method: 'get',
                headers: headers(token)
            }
            break;
        case 'avanzarCaso':
            const pathAC = config.PathAvanzarCaso.replace('IDCASE', workItem.idCase).replace('IDWORKITEM', workItem.idWorkitem);
            return options = {
                baseURL: `https://${config.Hostname}${pathAC}`,
                method: 'post',
                data,
                headers: headers(token)
            }
            break;
    }
}


module.exports = {
    optionsAxios
}