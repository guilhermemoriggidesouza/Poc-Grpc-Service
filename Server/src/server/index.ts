import {
  Server,
  ServerCredentials,
  ServerReadableStream,
  sendUnaryData,
} from "grpc";

import {
  IUserVideoServer,
  UserVideoService,
} from "../lib-proto/user_video_grpc_pb";
import { UserVideoReq, UserVideoResp } from "../lib-proto/user_video_pb";

export class UserVideoServer implements IUserVideoServer {
  syncUserVideo(
    call: ServerReadableStream<UserVideoReq>,
    callback: sendUnaryData<UserVideoResp>
  ) {
    console.log("conectou")
    call.on("data", (data: UserVideoReq) => {
      console.log("processando pipipi popopo", data.getCount(), data.getImg());
      if(data.getCount() === -1){
        const resp: UserVideoResp = new UserVideoResp()
        resp.setValidated("true")
        callback(null, resp)
      }
    });
  }
}

const server = new Server();
server.addService(UserVideoService, new UserVideoServer());
server.bindAsync(
  `127.0.0.1:4500`,
  ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      throw err;
    }
    console.log(`Listening on 4500`);
    server.start();
  }
);
