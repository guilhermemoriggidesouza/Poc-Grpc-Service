import { UserPositionList, UserPositionReq } from './../../proto/user_position_pb.d';
import { ServerDuplexStream } from 'grpc';
import Geofac from '../../../infra/geofac';
import Utils from '../utils';

export default class UserPositionController {
    userPositionRepository: Geofac = new Geofac();
    saveUserPosition(call: ServerDuplexStream<UserPositionReq, UserPositionList>) {
        call.on("data", async (userPosition: UserPositionReq) => {
            this.userPositionRepository.addLocation(userPosition.getCity(), userPosition.getId(), userPosition.getLat(), userPosition.getLog())
            const usersList = await this.userPositionRepository.nearby(userPosition.getCity(), userPosition.getLat(), userPosition.getLog(), 1000)
            call.write(Utils.parseToResponse(usersList))
        })
    }
}