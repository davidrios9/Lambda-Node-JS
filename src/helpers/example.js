// ejemplo paso 1
let mEvent = {
  "Records": [
    {
      "messageId": "92c5ea2c-0028-4318-9036-67a92d6c8e93",
      "receiptHandle": "AQEBi0/SFmUMPi0in9Q3jwd8TZ3rzLyf+e5Ai8P26Zd/9zPH9OnvJ58FzIa1adDVrpDY9kk3H20VbRk1t7nMJSjWKGU/q4o4dMxAGfAX2QrYhLKzEZUROfxUYj5FyEaMb/FiKvs6cjHwCc0+s6Dgz6ntjU8DUh3JLIhCUTDxO838Hzds32Glikl7+LVVBzX1in+djO9+bzK9ODidLcYyq4vMBGn8BBptP+gVvlRs+JVTPhTODyR5OnKFmf1urw4UsqpCPnobXczJnchg7RsUEm4tEs2p5M/XnlDzRZPBBptbNsceATw44lTVXN2PKGKtzk8kyNTNLjvcooXUvLPb3eoORn5QbNX/ftU6mzmlLUla81O5cuXoASRdc63z3q8UrIPBEuW1VCH+Kegzc0GyJXbEKQ==",
      "body": '{"saleType":"P","Header":[{"trace":"nose","accessToken":"asasd","messageId":"1213sdfsdfsfd"}],"clientData":{"idType":"FS001","idNumber":"32240150","companyIdType":"FS002","companyIdNumber":"32312313","direccionEntrega":"Calle30aSur","municipioEntrega":"Envigado","tipoCreacionTarjeta":"UI"},"producto":[{"id":"14","name":"LibreInversiónMO","awardedAmount":1500000,"interestRate":[{"interesRateType":"F"},{"interesRateType":"V"}]},{"id":"12","name":"TarjetadeCreditoMO","awardedAmount":1500000}],"personalData":{"gender":"F","birthdate":"2021-07-21","maritalStatus":"1","academicLevel":"P","occupation":"01","timeInOffice":0,"contractType":"01","employementDate":"2021-07-21","housingType":"P","realEstateOwner":"string","dependents":0,"otherIncomes":0,"monthlyIncomes":0,"variableIncome":true,"variableSalary":0,"rentFeesIncomes":0,"freelancerIncomes":0,"foreingInwardRemittance":0,"totalAssets":0,"familiarCosts":0,"totalPayrollDeductions":0,"alternateEmail":"user@example.com","alternateCel":"string"},"documents":[{"name":"Biagiacd","url":"https://10.104.20.160/BIZAGIACD/"},{"name":"BiagiacQ","url":"https://10.104.20.160/BIZAGIACQ/"}],"pgc":[{"referralCode":"123","advisoryCode":"456","branchCode":"876","promotionalCode":"231"}]}',
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
        "accessToken": {
          "stringValue": "d50c83aae4f68d8466b137985a7105e08d70ead5858222cd6d3291654362cf90",
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

avanzarCasoM2 =
{
  "Records": [
    {
      "messageId": "92c5ea2c-0028-4318-9036-67a92d6c8e93",
      "receiptHandle": "AQEBi0/SFmUMPi0in9Q3jwd8TZ3rzLyf+e5Ai8P26Zd/9zPH9OnvJ58FzIa1adDVrpDY9kk3H20VbRk1t7nMJSjWKGU/q4o4dMxAGfAX2QrYhLKzEZUROfxUYj5FyEaMb/FiKvs6cjHwCc0+s6Dgz6ntjU8DUh3JLIhCUTDxO838Hzds32Glikl7+LVVBzX1in+djO9+bzK9ODidLcYyq4vMBGn8BBptP+gVvlRs+JVTPhTODyR5OnKFmf1urw4UsqpCPnobXczJnchg7RsUEm4tEs2p5M/XnlDzRZPBBptbNsceATw44lTVXN2PKGKtzk8kyNTNLjvcooXUvLPb3eoORn5QbNX/ftU6mzmlLUla81O5cuXoASRdc63z3q8UrIPBEuW1VCH+Kegzc0GyJXbEKQ==",
      "body": '{"numeroSolicitud":"MOS_2021_8675","idcase": 1231151561,"Header":[{"trace":"nose","accessToken":"asasd","messageId":"1213sdfsdfsfd"}],"clientData":{"idType":"FS001","idNumber":"32240150","companyIdType":"FS002","companyIdNumber":"32312313","direccionEntrega":"Calle30aSur","municipioEntrega":"Envigado","tipoCreacionTarjeta":"UI"},"producto":[{"id":"14","name":"LibreInversiónMO","awardedAmount":1500000,"interestRate":[{"interesRateType":"F"},{"interesRateType":"V"}]},{"id":"12","name":"TarjetadeCreditoMO","awardedAmount":1500000}],"personalData":{"gender":"F","birthdate":"2021-07-21","maritalStatus":"1","academicLevel":"P","occupation":"01","timeInOffice":0,"contractType":"01","employementDate":"2021-07-21","housingType":"P","realEstateOwner":"string","dependents":0,"otherIncomes":0,"monthlyIncomes":0,"variableIncome":true,"variableSalary":0,"rentFeesIncomes":0,"freelancerIncomes":0,"foreingInwardRemittance":0,"totalAssets":0,"familiarCosts":0,"totalPayrollDeductions":0,"alternateEmail":"user@example.com","alternateCel":"string"},"documents":[{"name":"Biagiacd","url":"https://10.104.20.160/BIZAGIACD/"},{"name":"BiagiacQ","url":"https://10.104.20.160/BIZAGIACQ/"}],"pgc":[{"referralCode":"123","advisoryCode":"456","branchCode":"876","promotionalCode":"231"}]}',
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
        "accessToken": {
          "stringValue": "d50c83aae4f68d8466b137985a7105e08d70ead5858222cd6d3291654362cf90",
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

module.exports = { mEvent, avanzarCasoM2 };