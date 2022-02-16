//**Lambda Multi Oferta - MOS*/
const bizagi = require('./src/utils/bizagi');
const config = require('./src/config/config');
const {mEvent,avanzarCaso} = require('./src/utils/example.js');

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
    // logger.debug("messageAttributes :", messageAttributes);
    const bodySQS = JSON.parse(body);
    const pasoFuncional = messageAttributes.pasoFuncional.stringValue;
    let MessageId = messageAttributes.MessageId.stringValue;
    
    if (pasoFuncional === "Paso1") {
      logger.debug("Ingreso Crear :");
      
      // let respuestaObtenerToken = {
      //   "access_token": messageAttributes.accessToken.stringValue,//Lo envia el front en los atributos de la cola    
      //   "token_type": "Bearer"
      // }

      const respuestaObtenerToken = await bizagi.obtenerToken(config);
      const requestCrearCaso = await bizagi.obtenerRequestCrearCaso(bodySQS); 
      const caso =  bizagi.crearCaso(requestCrearCaso, respuestaObtenerToken, config);     
      const respService = caso.then( console.log );
      console.log("response: " + JSON.stringify(respService));
    }
    else if (pasoFuncional === "Paso2" || pasoFuncional === "Paso3") {
      logger.debug("Ingreso Avanzar");
      let requestAvanzar = pasoFuncional === "Paso2" ? bizagi.obtenerRequestAvanzarMomento1(bodySQS) : bizagi.obtenerRequestAvanzarMomento2(bodySQS);
      let respuestaObtenerToken = {
        "access_token": messageAttributes.token.stringValue,//Lo envia el front en los atributos de la cola    
        "token_type": "Bearer"
      }
      let idWorkItem = bizagi.obtenerWorkItem(bodySQS.IdCase, respuestaObtenerToken.token, config);
      Promise.all([respuestaObtenerToken, idWorkItem]).then(values => {
        let idWorkItem = values[1];
        let token = values[0];
        bizagi.avanzarCaso(requestAvanzar, idWorkItem, token, config);
      });
    }
  });
}
debugger;

localExample();

module.exports = {
  handler: exports.handler
};