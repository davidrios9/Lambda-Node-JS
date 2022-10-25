//**Lambda Multi Oferta - SIB*/
const { getToken } = require('./src/utils/controllers');
const { actionByStep } = require('./src/helpers/action');
const {event2, event3} = require('./src/config/example');
localExample = async() => {
// exports.handler =  async(event, context, callback) => {
  event2.Records.forEach(async record => {
    const token = await getToken();
    token ? await actionByStep( record, token ) : console.info('No hay token');
  });
}
localExample();