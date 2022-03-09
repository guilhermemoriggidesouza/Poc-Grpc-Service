// package: UserPosition
// file: user_position.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_position_pb from "./user_position_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserPositionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    syncUserPosition: IUserPositionService_ISyncUserPosition;
}

interface IUserPositionService_ISyncUserPosition extends grpc.MethodDefinition<user_position_pb.UserPositionReq, user_position_pb.UserPositionList> {
    path: "/UserPosition.UserPosition/SyncUserPosition";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<user_position_pb.UserPositionReq>;
    requestDeserialize: grpc.deserialize<user_position_pb.UserPositionReq>;
    responseSerialize: grpc.serialize<user_position_pb.UserPositionList>;
    responseDeserialize: grpc.deserialize<user_position_pb.UserPositionList>;
}

export const UserPositionService: IUserPositionService;

export interface IUserPositionServer {
    syncUserPosition: grpc.handleBidiStreamingCall<user_position_pb.UserPositionReq, user_position_pb.UserPositionList>;
}

export interface IUserPositionClient {
    syncUserPosition(): grpc.ClientDuplexStream<user_position_pb.UserPositionReq, user_position_pb.UserPositionList>;
    syncUserPosition(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<user_position_pb.UserPositionReq, user_position_pb.UserPositionList>;
    syncUserPosition(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<user_position_pb.UserPositionReq, user_position_pb.UserPositionList>;
}

export class UserPositionClient extends grpc.Client implements IUserPositionClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public syncUserPosition(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<user_position_pb.UserPositionReq, user_position_pb.UserPositionList>;
    public syncUserPosition(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<user_position_pb.UserPositionReq, user_position_pb.UserPositionList>;
}
