import AWS from 'aws-sdk';
const AWSaccessKeyId = 'not-important';
const AWSsecretAccessKey = 'not-important';
const AWSregion = 'local';
const { promisify } = require('util');

AWS.config.update({
    accessKeyId: AWSaccessKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion,
});
const dynamoDBClient = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

export default dynamoDBClient
export const dynamoDB = {
    update: dynamoDBClient.updateItem,
    get: dynamoDBClient.getItem
}
export const instanceDynamo = () => {
    var params = {
        TableName: 'user_position',
        KeySchema: [
            { AttributeName: "city", KeyType: "HASH" },  //Partition key
            { AttributeName: "id", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [
            { AttributeName: "city", AttributeType: "S" },
            { AttributeName: "id", AttributeType: "N" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };
    dynamoDBClient.deleteTable({ TableName: 'user_position' }, () => {
        dynamoDBClient.createTable(params, function (err, data) {
            console.log(data)
        });
    })
}