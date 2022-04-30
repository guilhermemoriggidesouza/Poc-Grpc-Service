import { UserPositionList, UserPositionReq } from './../proto/user_position_pb';
export default class Utils {
    static parseToResponse(usersList: any[]) {
        const userPositionList = new UserPositionList()
        userPositionList.setUserspositionsList(
            usersList.map((user: any) => {
                const userPosition = new UserPositionReq()
                userPosition.setId(user.id.S)
                const geoPoint = JSON.parse(user.geoJson.S)
                userPosition.setLat(geoPoint.coordinates[0])
                userPosition.setLog(geoPoint.coordinates[1])
                return userPosition
            }))
        return userPositionList;
    }
}