const { optionsAxios } = require('./helpers');

const log4js = require("log4js");
const axios = require('axios');
const { attempt } = require('lodash');

const logger = log4js.getLogger();
logger.level = "debug";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const obtenerToken = async () => {
    try {
        let options = optionsAxios('obtenerToken', null, null, null);
        const resp = await axios(options);
        return resp.data;
    }
    catch (e) {
        console.log(e);
    }
}

const crearCaso = async (data, token) => {
    try {
        let options = optionsAxios('crearCaso', token, data, null);
        return await axios(options);
    } catch (e) {
        console.log(e);
    }
}

const obtenerWorkItem = async (idCase, token) => {
    try {
        let options = optionsAxios('obtenerWorkItem', token, idCase, null);
        const resp = await axios(options);
        return resp.data.value.map(workitem => ({
            idWorkitem: workitem.id,
            idCase
        }));
    }
    catch (e) {
        console.log(e);
    }
}

const avanzarCaso = async (data, idWorkItem, token) => {
    try {       
        let options = optionsAxios('avanzarCaso', token, data, idWorkItem);
        return await axios(options);
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    obtenerToken,
    crearCaso,
    obtenerWorkItem,
    avanzarCaso
}