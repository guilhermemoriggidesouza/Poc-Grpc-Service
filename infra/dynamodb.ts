import AWS from 'aws-sdk';
const AWSaccessKeyId = 'not-important';
const AWSsecretAccessKey = 'not-important';
const AWSregion = 'local';
import ddbGeo from 'dynamodb-geo';

AWS.config.update({
    accessKeyId: AWSaccessKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion,
});
const dynamoDBClient = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });
const config = new ddbGeo.GeoDataManagerConfiguration(dynamoDBClient, 'user_position')
config.hashKeyLength = 5
const myGeoTableManager = new ddbGeo.GeoDataManager(config)
export default dynamoDBClient
export { myGeoTableManager }
export const dynamoDB = {
    update: dynamoDBClient.updateItem,
    get: dynamoDBClient.getItem
}
export const instanceDynamo = () => {
    const createTableInput = ddbGeo.GeoTableUtil.getCreateTableRequest(config)
    createTableInput.ProvisionedThroughput.ReadCapacityUnits = 5
    dynamoDBClient.createTable(createTableInput).promise()
        .then(function () { return dynamoDBClient.waitFor('tableExists', { TableName: config.tableName }).promise() })
        .then(function () { console.log('Table created and ready!') })
}