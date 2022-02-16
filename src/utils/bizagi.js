var log4js = require("log4js");
const axios = require('axios');

const { headers } = require('./helpers');

const logger = log4js.getLogger();
logger.level = "debug";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

obtenerToken = async (config) => {
    try {
        const options = {
            method: 'post',
            baseURL: `https://${config.Hostname}/${config.PathObtenerToken}`,
            data: config.DataObtenerToken,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': config.Authorization
            },
        };
        const resp = await axios(options);
        return resp.data;
    }
    catch (e) {
        logger.debug(e)
    }
}

crearCaso = async (data, token, config) => {
    try {
        //Peticion http Odata Bizagi
        const options = {
            method: 'post',
            baseURL: `https://${config.Hostname}${config.PathCrearCaso}`,
            data,
            headers: headers(token)
        };
        return await axios(options);
    } catch (e) {
        logger.debug(e);
    }
}

obtenerWorkItem = async (idCase, token, config) => {
    try {
        const path = config.PathObtenerWorkItem.replace('IDCASE', idCase);
        const options = {
            baseURL: `https://${config.Hostname}${path}`,
            method: 'post',
            headers: headers(token)
        };
        await axios(options);
    }
    catch (e) {
        logger.debug(e);
    }
}

avanzarCaso = async (data, idWorkItem, token, config) => {
    try {
        //Peticion http
        // Obtengo el path y reemplazo el idcase y el workitem
        const path = config.PathAvanzarCaso.replace('IDCASE', data.idCase).replace('IDWORKITEM', idWorkItem);
        //Creo la configuración para consunmir la Odata de Bizagi
        const options = {
            baseURL: `https://${config.Hostname}/${path}`,
            method: 'post',
            data,
            headers: headers(token)
        };
        await axios(options);
    }
    catch (e) {
        logger.debug(e);
    }
}



module.exports = {
    obtenerToken,
    crearCaso,
    obtenerWorkItem,
    avanzarCaso
}