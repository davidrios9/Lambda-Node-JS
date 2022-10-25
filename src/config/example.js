// ejemplo crear caso sin guardar y salir
let mEvent = {
  "Records": [
    {
      "messageId": "92c5ea2c-0028-4318-9036-67a92d6c8e93",
      "receiptHandle": "AQEBi0/SFmUMPi0in9Q3jwd8TZ3rzLyf+e5Ai8P26Zd/9zPH9OnvJ58FzIa1adDVrpDY9kk3H20VbRk1t7nMJSjWKGU/q4o4dMxAGfAX2QrYhLKzEZUROfxUYj5FyEaMb/FiKvs6cjHwCc0+s6Dgz6ntjU8DUh3JLIhCUTDxO838Hzds32Glikl7+LVVBzX1in+djO9+bzK9ODidLcYyq4vMBGn8BBptP+gVvlRs+JVTPhTODyR5OnKFmf1urw4UsqpCPnobXczJnchg7RsUEm4tEs2p5M/XnlDzRZPBBptbNsceATw44lTVXN2PKGKtzk8kyNTNLjvcooXUvLPb3eoORn5QbNX/ftU6mzmlLUla81O5cuXoASRdc63z3q8UrIPBEuW1VCH+Kegzc0GyJXbEKQ==",
      "body": { 	'saleType': 'M', 'Header': { 'trace': 'nose', 'accessToken': 'asasd', 'messageId': '1213sdfsdfsfd' }, 'request': {		'channel': '06', 					 		'role': '02', 					 		'costCenter': 10005,			 		'idException': 0,   			 		'modalityType': '04', 			 		'amount': 10000000,				 		'rateType': '01', 				 		'term': 48,						 		'depreciation': '01', 			 		'portfolioPurchase': 0,  		 		'stagger': 0 					 	}, 	'ClientData': {										 		'documentType': 'TIPDOC_FS001', 				 		'documentNumber': 1214675490,					 		'fullName': 'Jose Fernando Martinez Guisao',	 		'applicantType': '01',	 							 	}, 	'DetailedInformation': {								 		'codeCIIU': 'CIIU_00000',							 		'dateBirth': '2021-07-21',							 		'expeditionDate': '2021-07-21',						 		'gender': 'GENERO_M',							 		'occupation': '01',									 		'sector': 'SECCII_02',								 		'subsector': 'SUBSEC_000',							 		'segment': 'SEGMEN_04',		 	}, 	'ContactInformation': {			 		'direction': 'calle 16 A 12-67', 		'cellPhoneNumber': '3167894534', 		'email': 'jose123@hotmail.com', 		'cityAndDepartment': 'Medellin-Antioquia', 	}, 	'financialInformation': {		 		'mainIncome': 4000000,  		'otherIncome': 300000, 		'monthlyIncomes': 0,	 		'annualSales': 50000000, 		'annualSalesCut-offDate': '2020/12/31', 		'totalAssets': 100000000, 		'totalHousingAssets': 500000000, 		'familyExpenses': 1000000, 		'housingLease': 1200000, 		'socialSecurity': 300000, 		'financialLiabilities': 30000000, 		'secondaryIncome': 500000,	 	}, 	'recently_financial_information': { 		'recentCredits': 400000, 		'approvedQuotas': 7000000,  		'recentCreditsOther': 200000, 		'approvedQuotasOther': 3000000, 		'cancelledFees': 400000, 		'cancelledFeesTdc': 200000, 		'cancelledRotary': 0, 		'buyWallet': 0, 		'incomeSupport': '02',   	}		  },
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



let event2 = {
  "Records": [
    {
      "messageId": "19dd0b57-b21e-4ac1-bd88-01bbb068cb78",
      "receiptHandle": "MessageReceiptHandle",
      "body": '{ 	"saleType": "M", 	"Headers": {	"trace": "nose",	"accessToken": "asasd1",	"messageId": "1213sdfsdfsfd" 	}, 	"request": {	"channel": "06",	"role": "02",	"costCenter": 1234,	"idException": 0,	"modalityType": "04",	"amount": 10000000,	"rateType": "01",	"term": 48,	"depreciation": "01",	"portfolioPurchase": 0,	"stagger": 0,	"action": "continue" 	}, 	"ClientData": {	"documentType": "TIPDOC_FS001",	"documentNumber": 9898,	"fullName": "Jose Fernando Martinez Guisao2",	"applicantType": "01"		 	}, 	"DetailedInformation": {	"codeCIIU": "CIIU_00000",	"dateBirth": "2021-07-21",	"expeditionDate": "2021-07-21",	"gender": "GENERO_M",	"occupation": "01",	"sector": "SECCII_02",	"subsector": "SUBSEC_000",	"segment": "SEGMEN_04",	"region": 1 	}, 	"ContactInformation": {	"direction": "calle 16 A 12-67",	"cellPhoneNumber": "3167894534",	"email": "jose123@hotmail.com",	"cityAndDepartment": "Medellin-Antioquia"		 	}, 	"financialInformation": {	"mainIncome": 4000000,	"otherIncome": 300000,	"monthlyIncomes": 0,	"annualSales": 50000000,	"annualSalesCut-offDate": "2020/12/31",	"totalAssets": 100000000,	"totalHousingAssets": 500000000,	"familyExpenses": 1000000,	"housingLease": 1200000,	"socialSecurity": 300000,	"financialLiabilities": 30000000,	"secondaryIncome": 500000		 	}, 	"recently_financial_information": {	"recentCredits": 400000,	"approvedQuotas": 7000000,	"recentCreditsOther": 200000,	"approvedQuotasOther": 3000000,	"cancelledFees": 400000,	"cancelledFeesTdc": 200000,	"cancelledRotary": 0,	"buyWallet": 0,	"incomeSupport": "02"		 	} }',
      "attributes": {
        "ApproximateReceiveCount": "1",
        "SentTimestamp": "1523232000000",
        "SenderId": "123456789012",
        "ApproximateFirstReceiveTimestamp": "1523232000001"
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
      "md5OfBody": "{{{md5_of_body}}}",
      "eventSource": "aws:sqs",
      "eventSourceARN": "arn:aws:sqs:us-east-1:123456789012:MyQueue",
      "awsRegion": "us-east-1"
    }
  ]
}

let event3 = {
  "Records": [
    {
      "messageId": "19dd0b57-b21e-4ac1-bd88-01bbb068cb78",
      "receiptHandle": "MessageReceiptHandle",
      "body": { "numeroSolicitud": "SBI_2021_5289", "channel": "06", "role": "02", "idcase": 123013, "Header": { "trace": "nose", "accessToken": "asasd", "messageId": "1213sdfsdfsfd"     }, "products": [ { "id": "01", "quota": 1200000, "term": 0 }, { "id": "05", "quota": 200000, "term": 0 } ], "acceptOffer": true, "retry": false, "warranty": false, "familyUnit": false },
      "attributes": {
        "ApproximateReceiveCount": "1",
        "SentTimestamp": "1523232000000",
        "SenderId": "123456789012",
        "ApproximateFirstReceiveTimestamp": "1523232000001"
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
      "md5OfBody": "{{{md5_of_body}}}",
      "eventSource": "aws:sqs",
      "eventSourceARN": "arn:aws:sqs:us-east-1:123456789012:MyQueue",
      "awsRegion": "us-east-1"
    }
  ]
}


module.exports = { mEvent,
  event2,
  event3
  };