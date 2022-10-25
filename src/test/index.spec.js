const index = require('../../index');
const fiBizagi = require("../../src/utils/bizagi");
const mEvent = {
  "Records": [
    {
      "messageId": "92c5ea2c-0028-4318-9036-67a92d6c8e93",
      "receiptHandle": "AQEBi0/SFmUMPi0in9Q3jwd8TZ3rzLyf+e5Ai8P26Zd/9zPH9OnvJ58FzIa1adDVrpDY9kk3H20VbRk1t7nMJSjWKGU/q4o4dMxAGfAX2QrYhLKzEZUROfxUYj5FyEaMb/FiKvs6cjHwCc0+s6Dgz6ntjU8DUh3JLIhCUTDxO838Hzds32Glikl7+LVVBzX1in+djO9+bzK9ODidLcYyq4vMBGn8BBptP+gVvlRs+JVTPhTODyR5OnKFmf1urw4UsqpCPnobXczJnchg7RsUEm4tEs2p5M/XnlDzRZPBBptbNsceATw44lTVXN2PKGKtzk8kyNTNLjvcooXUvLPb3eoORn5QbNX/ftU6mzmlLUla81O5cuXoASRdc63z3q8UrIPBEuW1VCH+Kegzc0GyJXbEKQ==",
      "body": '{"IdCase":"123","Access_token":"7dad9469080d4c178826f9500b50e3db76e2e67a","Token_type":"bearer","TipoVenta":"PreAprobado","Cliente":{"TipoDocumento":"FS001","Identificacion":"32340100"},"Producto":{"Id":"14","Nombre":"Libre Inversión","Monto":1000000}}',
      "attributes": {
        "ApproximateReceiveCount": "1",
        "SentTimestamp": "1623352504324",
        "SenderId": "AROAYFLVZMS53BXN5JKJ6:eRequestLambda",
        "ApproximateFirstReceiveTimestamp": "1623352514324"
      },
      "messageAttributes": {
        "pasoFuncional": {
          "stringValue": "Paso1",
          "stringListValues": [],
          "binaryListValues": [],
          "dataType": "String"
        },
        "idCole": {
          "stringValue": "idCola-685.9771866174561",
          "stringListValues": [],
          "binaryListValues": [],
          "dataType": "String"
        },
        "MessageId": {
          "stringValue": "abc-587.4740186037907",
          "stringListValues": [],
          "binaryListValues": [],
          "dataType": "String"
        }
      },
      "md5OfBody": "d6a296b9b72a0b9e33e80a9a774355de",
      "md5OfMessageAttributes": "1d333788ecc06e20775e455dcb70d083",
      "eventSource": "aws:sqs",
      "eventSourceARN": "arn:aws:sqs:us-east-2:561277134011:requestMO",
      "awsRegion": "us-east-2"
    }
  ]
};
const mEvent2 = {
  "Records": [
    {
      "messageId": "92c5ea2c-0028-4318-9036-67a92d6c8e93",
      "receiptHandle": "AQEBi0/SFmUMPi0in9Q3jwd8TZ3rzLyf+e5Ai8P26Zd/9zPH9OnvJ58FzIa1adDVrpDY9kk3H20VbRk1t7nMJSjWKGU/q4o4dMxAGfAX2QrYhLKzEZUROfxUYj5FyEaMb/FiKvs6cjHwCc0+s6Dgz6ntjU8DUh3JLIhCUTDxO838Hzds32Glikl7+LVVBzX1in+djO9+bzK9ODidLcYyq4vMBGn8BBptP+gVvlRs+JVTPhTODyR5OnKFmf1urw4UsqpCPnobXczJnchg7RsUEm4tEs2p5M/XnlDzRZPBBptbNsceATw44lTVXN2PKGKtzk8kyNTNLjvcooXUvLPb3eoORn5QbNX/ftU6mzmlLUla81O5cuXoASRdc63z3q8UrIPBEuW1VCH+Kegzc0GyJXbEKQ==",
      "body": '{"IdCase":"123","Access_token":"7dad9469080d4c178826f9500b50e3db76e2e67a","Token_type":"bearer","TipoVenta":"PreAprobado","Cliente":{"TipoDocumento":"FS001","Identificacion":"32340100"},"Producto":{"Id":"14","Nombre":"Libre Inversión","Monto":1000000}}',
      "attributes": {
        "ApproximateReceiveCount": "1",
        "SentTimestamp": "1623352504324",
        "SenderId": "AROAYFLVZMS53BXN5JKJ6:eRequestLambda",
        "ApproximateFirstReceiveTimestamp": "1623352514324"
      },
      "messageAttributes": {
        "pasoFuncional": {
          "stringValue": "Paso2",
          "stringListValues": [],
          "binaryListValues": [],
          "dataType": "String"
        },
        "idCole": {
          "stringValue": "idCola-685.9771866174561",
          "stringListValues": [],
          "binaryListValues": [],
          "dataType": "String"
        },
        "MessageId": {
          "stringValue": "abc-587.4740186037907",
          "stringListValues": [],
          "binaryListValues": [],
          "dataType": "String"
        }
      },
      "md5OfBody": "d6a296b9b72a0b9e33e80a9a774355de",
      "md5OfMessageAttributes": "1d333788ecc06e20775e455dcb70d083",
      "eventSource": "aws:sqs",
      "eventSourceARN": "arn:aws:sqs:us-east-2:561277134011:requestMO",
      "awsRegion": "us-east-2"
    }
  ]
};

describe('getToken', () => {
  it('getToken', async () => {
    //jest.spyOn(ObtenerToken, "ObtenerToken").mockResolvedValue('{"secret":"password"}');
    const response = await fiBizagi.getToken();
  });
})
