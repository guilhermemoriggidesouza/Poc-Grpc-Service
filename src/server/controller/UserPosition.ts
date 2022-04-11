import { UserPositionList, UserPositionReq } from './../../proto/user_position_pb.d';
import { ServerDuplexStream } from 'grpc';
import UserPositionRepository from '../../../infra/repositories/userPosition';
import Utils from '../utils';

export default class UserPositionController {
    userPositionRepository: UserPositionRepository = new UserPositionRepository();
    saveUserPosition(call: ServerDuplexStream<UserPositionReq, UserPositionList>) {
        call.on("data", async (userPosition: UserPositionReq) => {
            this.userPositionRepository.changeLocation(userPosition.getId(), userPosition.getLat(), userPosition.getLog())
            const usersList = await this.userPositionRepository.find(userPosition.getLat(), userPosition.getLog())
            call.write(Utils.parseToResponse(usersList))
        })
    }
}