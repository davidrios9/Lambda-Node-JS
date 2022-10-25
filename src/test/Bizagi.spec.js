const fiBizagi = require("../../src/utils/bizagi");
const helpers = require("../../src/helpers/bodyOdata");
const sqlReuqest ={"IdCase":"123","Access_token":"7dad9469080d4c178826f9500b50e3db76e2e67a","Token_type":"bearer","TipoVenta":"PreAprobado","Cliente":{"TipoDocumento":"FS001","Identificacion":"32340100"},"Producto":{"Id":"14","Nombre":"Libre Inversión","Monto":1000000}};
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

describe('File Bizagi test', () => {

    it('nextCase', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        let requestCrearCaso = helpers.getBodyOdata(sqlReuqest,'sJson1');
        token = {
            "access_token": "4e809f43e252c94092bb327cf4431436282d2412",
            "token_type": "bearer",
            "expires_in": 1072915200,
            "scope": "api login openid",
            "http_status_code": 200
        };
        let respuestaObtenerToken = token;
        let idWorkItem =123123;
        
        const response = await fiBizagi.nextCase(requestCrearCaso, idWorkItem, respuestaObtenerToken);
        
    });
    it('nextCaseError', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        let requestCrearCaso = helpers.getBodyOdata(sqlReuqest,'sJson1');
        token = {
        };
        let respuestaObtenerToken = token;
        let idWorkItem =123123;
        
        const response = await fiBizagi.nextCase(requestCrearCaso, idWorkItem, respuestaObtenerToken);
        
    });

    it('createCase', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        
        let requestCrearCaso = helpers.getBodyOdata(sqlReuqest,'sJson1');
        token = {
            "access_token": "4e809f43e252c94092bb327cf4431436282d2412",
            "token_type": "bearer",
            "expires_in": 1072915200,
            "scope": "api login openid",
            "http_status_code": 200
        };

        let respuestaObtenerToken = token;
        const response = await fiBizagi.createCase(requestCrearCaso,respuestaObtenerToken);
        
    });

    it('getWorkItem', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        token = {
            "access_token": "4e809f43e252c94092bb327cf4431436282d2412",
            "token_type": "bearer",
            "expires_in": 1072915200,
            "scope": "api login openid",
            "http_status_code": 200
        };
        let respuestaObtenerToken = token;
        const response = await fiBizagi.getWorkItem(1234, respuestaObtenerToken);
        
    });
    it('createCaseError', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        let requestCrearCaso = helpers.getBodyOdata(sqlReuqest,'sJson1');
        token = {            
        };
        let respuestaObtenerToken = token;
        const response = await fiBizagi.createCase(requestCrearCaso,respuestaObtenerToken);
        
    });
    it('getToken', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        const response = await fiBizagi.getToken();
        
        //response = '{"secret":"password"}';
        //expect(response).toBe('{"secret":"password"}')
    });
    it('getTokenError', async() => {
        //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
        const response = await fiBizagi.getToken();
        
        //response = '{"secret":"password"}';
        //expect(response).toBe('{"secret":"password"}')
    });
    
    
});