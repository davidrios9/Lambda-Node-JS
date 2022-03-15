//**Lambda Multi Oferta - MOS*/

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const { obtenerToken, 
        crearCaso,
        obtenerWorkItem ,
        avanzarCaso} = require('./src/controllers/bizagi');

const {obtenerRequestCrearCaso,
       obtenerRequestAvanzarMomento1,
       obtenerRequestAvanzarMomento2} = require('./src/helpers/requestSQS');

const { event2, mEvent, event3, avanzarCasoM2} = require('./src/helpers/example');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";


// Se realiza el proceso desde el json de ejemplo
localExample = async() => {
  debugger;
// exports.handler =  async(event, context, callback) => {

  event2.Records.forEach(async record => {    
    let { body, messageAttributes } = record;    
    const bodySQS = body;  //JSON.parse(body);
    const pasoFuncional = messageAttributes.pasoFuncional.stringValue;       
        
    // Obtenemos el token de Bizagi
    const token = await obtenerToken(); 
    
    if (pasoFuncional === "Paso1") {
      logger.debug("Ingreso Crear :");

      const requestCrearCaso = obtenerRequestCrearCaso(bodySQS); 

      await crearCaso(requestCrearCaso, token)
                                    .then(res => logger.debug(res))
                                    .catch(err => logger.debug(err));

    }
    else if (pasoFuncional === "Paso2" || pasoFuncional === "Paso3") {
      logger.debug("Ingreso Avanzar");

      const requestAvanzar = pasoFuncional === "Paso2" 
                                  ? obtenerRequestAvanzarMomento1(bodySQS) 
                                  : obtenerRequestAvanzarMomento2(bodySQS);

       //Validamos que el idcase exista en el body
      if( !bodySQS.idcase ){
        return logger.debug(`\nEl idcase no está definido en el JSON`);
      }     
  
      const idWorkItem = await obtenerWorkItem(bodySQS.idcase, token);

      if( idWorkItem.length === 0){
        return logger.debug(`\nEl workitem para el caso ${ bodySQS.numeroSolicitud } no existe o ya fue avanzado`);
      }       
      
      const avanceCaso = await avanzarCaso(requestAvanzar, idWorkItem[0], token);
      console.log(avanceCaso);      
    }
  });
}
debugger;

localExample();

module.exports = {
  handler: exports.handler
}