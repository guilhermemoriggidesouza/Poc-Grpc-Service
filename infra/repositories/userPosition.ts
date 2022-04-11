import dynamoDB, { myGeoTableManager } from "../dynamodb";
import { v4 } from "uuid"
export default class UserPositionRepository {
    async find(lat: number, log: number): Promise<any> {
        return myGeoTableManager.queryRadius({
            RadiusInMeter: 1000,
            CenterPoint: {
                latitude: lat,
                longitude: log
            }
        })
    }

    async changeLocation(id: number, lat: number, log: number): Promise<any> {
        return myGeoTableManager.putPoint({
            RangeKeyValue: { S: v4() },
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