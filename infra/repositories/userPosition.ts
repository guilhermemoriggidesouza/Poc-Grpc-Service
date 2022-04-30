import dynamoDB, { myGeoTableManager } from "../dynamodb";
export default class UserPositionRepository {
    async find(lat: number, log: number): Promise<any> {
        const listGetter = await myGeoTableManager.queryRadius({
            RadiusInMeter: 1000,
            CenterPoint: {
                latitude: lat,
                longitude: log
            }
        })
        console.log(listGetter)
        return listGetter
    }

    async changeLocation(id: number, lat: number, log: number): Promise<any> {
        return myGeoTableManager.putPoint({
            RangeKeyValue: { S: id.toString() },
            GeoPoint: {
                latitude: lat,
                longitude: log
            },
            PutItemInput: {
                Item: {
                    id: { S: id.toString() },
                }
            }
        }).promise()
    }
}