import { UserPositionList, UserPositionReq } from './../proto/user_position_pb';
export default class Utils {
    static parseToResponse(usersList: any[]) {
        const userPositionList = new UserPositionList()
        userPositionList.setUserspositionsList(
            usersList.map((user: any) => {
                const userPosition = new UserPositionReq()
                userPosition.setId(user.id.N)
                userPosition.setLat(user.lat.N)
                userPosition.setLog(user.logi.N)
                return userPosition
            }))
        return userPositionList;
    }
}