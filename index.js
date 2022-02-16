//**Lambda Multi Oferta - MOS*/
const { obtenerToken, 
        crearCaso,
        obtenerWorkItem ,
        avanzarCaso} = require('./src/utils/bizagi');

const {obtenerRequestCrearCaso,
       obtenerRequestAvanzarMomento1,
       obtenerRequestAvanzarMomento2} = require('./src/utils/helpers');

const {mEvent,avanzarCasoM2} = require('./src/utils/example.js');

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
  avanzarCasoM2.Records.forEach(async record => {
    
    let { body, messageAttributes } = record;    
    const bodySQS = JSON.parse(body);
    const pasoFuncional = messageAttributes.pasoFuncional.stringValue;
    
    if (pasoFuncional === "Paso1") {

      logger.debug("Ingreso Crear :");
      const respuestaObtenerToken = await obtenerToken();
      const requestCrearCaso = obtenerRequestCrearCaso(bodySQS); 
      const caso =  await crearCaso(requestCrearCaso, respuestaObtenerToken)
                                          .then(console.log)
                                          .catch(console.log);   
      console.log("response: " + JSON.stringify(caso));

    }
    else if (pasoFuncional === "Paso2" || pasoFuncional === "Paso3") {
      logger.debug("Ingreso Avanzar");
      let requestAvanzar = pasoFuncional === "Paso2" ? obtenerRequestAvanzarMomento1(bodySQS) : obtenerRequestAvanzarMomento2(bodySQS);
      
      const token = await obtenerToken();           
      let idWorkItem = await obtenerWorkItem(bodySQS.idcase, token);
      const avanceCaso = await avanzarCaso(requestAvanzar, idWorkItem[0], token);
      console.log(avanceCaso);

      // Promise.all([respuestaObtenerToken, idWorkItem]).then(values => {
      //   let idWorkItem = values[1];
      //   let token = values[0];
      //   avanzarCaso(requestAvanzar, idWorkItem, token);
      // });
    }
  });
}
debugger;

localExample();

module.exports = {
  handler: exports.handler
};