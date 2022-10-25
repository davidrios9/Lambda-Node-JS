const { getWorkItem , nextCase, createCase } = require('../utils/controllers');
const { getBodyOdata } = require('./bodyOdata');

const actionByStep = async( record = {}, token = {}) => {

    let { body , body: { idcase }, messageAttributes ,messageAttributes: 
        { pasoFuncional: { stringValue:action } } } = record;

    const bodyOdata = action ===  'Paso1' ? getBodyOdata( body, 'sJson1' ) :
                      action ===  'Paso2' ? getBodyOdata( body, 'sJsonEvtAceptarOferta' ) :
                      action ===  'Paso3' ? getBodyOdata( body, 'ejson3' ) :
                      '';
    if ( !idcase ){
        return await createCase( bodyOdata, token )
    }
    const [ data ] = await getWorkItem( idcase, token );
    if( !data ){
        return console.info( `\nNo existe el workitem para el idcase` );
    }

    return await nextCase( bodyOdata, data, token);
}

module.exports = {
    actionByStep
}