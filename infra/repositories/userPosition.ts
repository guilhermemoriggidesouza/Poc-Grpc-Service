import dynamoDB from "../dynamodb";

export default class UserPositionRepository {
    async find(lat: number, log: number): Promise<object[]> {
        return new Promise((resolve, reject) => {
            dynamoDB.query({
                KeyConditionExpression: 'id = :id',
                ExpressionAttributeValues: {
                    'id': { 'S': "AM" },
                },
                TableName: "user_position"
            }, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result.Items)
            })
        })
    }

    async changeLocation(city: string, id: number, lat: number, log: number) {
        return new Promise((resolve, reject) => {
            dynamoDB.updateItem({
                TableName: "user_position",
                Key: { "city": { "S": city }, "id": { "N": id.toString() } },
                UpdateExpression: `SET lat = :lat, logi = :logi`,
                ExpressionAttributeValues: {
                    ":logi": { "N": log.toString() },
                    ":lat": { "N": lat.toString() }
                },
            }, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }

}