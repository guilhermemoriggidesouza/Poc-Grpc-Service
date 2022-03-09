import {
    ServerDuplexStream,
    Server,
    ServerCredentials
} from "grpc";
import { instanceDynamo } from "../../infra/dynamodb";

import { IUserPositionServer, UserPositionService } from "../proto/user_position_grpc_pb";
import { UserPositionReq, UserPositionList } from "../proto/user_position_pb";
import UserPositionController from "./controller/UserPosition";

export class UserPositionServer implements IUserPositionServer {

    async syncUserPosition(call: ServerDuplexStream<UserPositionReq, UserPositionList>) {
        const userPositionController: UserPositionController = new UserPositionController() 
        userPositionController.saveUserPosition(call);
    }
}

instanceDynamo();

const server = new Server();
server.addService(UserPositionService, new UserPositionServer());
server.bindAsync(`192.168.1.8:4500`, ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on 4500`);
    server.start();
});