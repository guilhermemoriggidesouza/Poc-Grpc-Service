import AWS from 'aws-sdk';
import { CreateTableInput } from 'aws-sdk/clients/dynamodb';
const AWSaccessKeyId = 'not-important';
const AWSsecretAccessKey = 'not-important';
const AWSregion = 'local';
import { GeoDataManagerConfiguration, GeoDataManager, GeoTableUtil } from 'dynamodb-geo';

AWS.config.update({
    accessKeyId: AWSaccessKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion,
});
const dynamoDBClient = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });
const config = new GeoDataManagerConfiguration(dynamoDBClient, 'user_position')
config.hashKeyLength = 5
const myGeoTableManager = new GeoDataManager(config)
export default dynamoDBClient
export { myGeoTableManager }
export const dynamoDB = {
    update: dynamoDBClient.updateItem,
    get: dynamoDBClient.getItem
}
export const instanceDynamo = () => {
    const createTableInput: CreateTableInput = GeoTableUtil.getCreateTableRequest(config)
    // if (createTableInput) {b
    //     console.log(createTableInput.ProvisionedThroughput)
    //     createTableInput.ProvisionedThroughput.ReadCapacityUnits = 5
    // }
    dynamoDBClient.deleteTable({ TableName: 'user_position' }, () => {

        dynamoDBClient.createTable(createTableInput).promise()
            .then(function () { return dynamoDBClient.waitFor('tableExists', { TableName: config.tableName }).promise() })
            .then(function () { console.log('Table created and ready!') })
    })
}