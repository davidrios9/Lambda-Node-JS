//**Lambda Multi Oferta - MOS*/
const { obtenerToken, 
        crearCaso,
        obtenerWorkItem ,
        avanzarCaso} = require('./src/controllers/bizagi');

const {obtenerRequestCrearCaso,
       obtenerRequestAvanzarMomento1,
       obtenerRequestAvanzarMomento2} = require('./src/helpers/requestSQS');

const {mEvent,avanzarCasoM2} = require('./src/helpers/example');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

// exports.handler =  (event, context, callback) => {
//   debugger;
//   event.Records.forEach(async record => {
//     let { body, messageAttributes } = record;
//     logger.debug("messageAttributes :", messageAttributes);
//     let bodySQS = JSON.parse(body);
//     let pasoFuncional = messageAttributes.pasoFuncional.stringValue;
//     let MessageId = messageAttributes.MessageId.stringValue;
//     if (pasoFuncional === "Paso1") {
//       logger.debug("Ingreso Crear :");      
//        let respuestaObtenerToken = {
//         "access_token" : messageAttributes.accessToken.stringValue,//Lo envia el front en los atributos de la cola    
//         "token_type" : "Bearer"
//       }    
//       let requestCrearCaso = Bizagi.ObtenerRequestCrearCaso(bodySQS);
//       let caso = Bizagi.CrearCaso(requestCrearCaso, respuestaObtenerToken, global.gConfig);
//       console.log("response: "+ JSON.stringify(caso));

//     }
//     else if (pasoFuncional === "Paso2" || pasoFuncional === "Paso3") {
//       logger.debug("Ingreso Avanzar");
//       let requestAvanzar = pasoFuncional === "Paso2" ? Bizagi.ObtenerRequestAvanzarMomento1(bodySQS) : Bizagi.ObtenerRequestAvanzarMomento2(bodySQS);
//       let respuestaObtenerToken = {
//         "access_token" : messageAttributes.token.stringValue,//Lo envia el front en los atributos de la cola    
//         "token_type" : "Bearer"
//       }
//       let idWorkItem = Bizagi.ObtenerWorkItem(bodySQS.IdCase, respuestaObtenerToken.token, global.gConfig);
//       Promise.all([respuestaObtenerToken, idWorkItem]).then(values => {
//         let idWorkItem = values[1];
//         let token = values[0];
//         Bizagi.AvanzarCaso(requestAvanzar, idWorkItem, token, config);
//       });
//     }
//   });
// }
// debugger;

// Se realiza el proceso desde el json de ejemplo
localExample = () => {
  debugger;
  mEvent.Records.forEach(async record => {
    
    let { body, messageAttributes } = record;    
    const bodySQS = JSON.parse(body);
    const pasoFuncional = messageAttributes.pasoFuncional.stringValue;   
        
    //Obtenemos el token de Bizagi
    const token = await obtenerToken(); 
    
    if (pasoFuncional === "Paso1") {
      logger.debug("Ingreso Crear :");

      const requestCrearCaso = obtenerRequestCrearCaso(bodySQS); 
      const caso =  await crearCaso(requestCrearCaso, token)
                                          .then(console.log)
                                          .catch(console.log);   
      console.log("response: " + JSON.stringify(caso));
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
};