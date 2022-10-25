const config = require('../config/config');
const { getHeaders } = require('../helpers/headersOdata');
const { filterWorkitem } = require('../helpers/filterWorkitems');
const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const getToken = async () => {
    const options = {
        url: `https://${config.Hostname}${config.PathObtenerToken}`,
        data: config.DataObtenerToken,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': config.Authorization
        }
    }
    return await axios(options).then(r => r.data).catch(err => err);
}

const createCase = async ( data = {}, token = {} ) => {
    const options = {
        url: `https://${config.Hostname}${config.PathCrearCaso}`,
        data,
        method: 'post',
        headers: getHeaders(token)
    }
    return await axios(options).then(({ data }) => console.info(data)).catch(err => console.info(err));
}

const getWorkItem = async ( idCase, token ) => {
    const pathGetWorkitem = config.PathObtenerWorkItem.replace('IDCASE', idCase);
    const options = {
        url: `https://${config.Hostname}${pathGetWorkitem}`,
        method: 'get',
        headers: getHeaders(token),
    }
    return await axios(options)
                .then(( {data} ) => { return filterWorkitem( data, idCase )})
                .catch( err => console.info(err));
}

const nextCase = async ( body, data, token ) => {
    const pathNextCase = config.PathAvanzarCaso.replace('IDCASE', data.idCase).replace('IDWORKITEM', data.idWorkitem);
    const options = {
        method: 'post',
        data: body,
        url: `https://${config.Hostname}${pathNextCase}`,
        headers: getHeaders(token)
    }
    return await axios(options).then(({ data }) => console.info(data)).catch(err => console.info(err));
}

module.exports = {
    getToken,
    createCase,
    getWorkItem,
    nextCase,
}