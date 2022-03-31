// package: UserVideo
// file: user_position.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_position_pb from "./user_position_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserVideoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    syncUserVideo: IUserVideoService_ISyncUserVideo;
}

interface IUserVideoService_ISyncUserVideo extends grpc.MethodDefinition<user_position_pb.UserVideoReq, user_position_pb.UserVideoResp> {
    path: "/UserVideo.UserVideo/SyncUserVideo";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<user_position_pb.UserVideoReq>;
    requestDeserialize: grpc.deserialize<user_position_pb.UserVideoReq>;
    responseSerialize: grpc.serialize<user_position_pb.UserVideoResp>;
    responseDeserialize: grpc.deserialize<user_position_pb.UserVideoResp>;
}

export const UserVideoService: IUserVideoService;

export interface IUserVideoServer {
    syncUserVideo: grpc.handleClientStreamingCall<user_position_pb.UserVideoReq, user_position_pb.UserVideoResp>;
}

export interface IUserVideoClient {
    syncUserVideo(callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
    syncUserVideo(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
    syncUserVideo(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
    syncUserVideo(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
}

export class UserVideoClient extends grpc.Client implements IUserVideoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public syncUserVideo(callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
    public syncUserVideo(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
    public syncUserVideo(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
    public syncUserVideo(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_position_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_position_pb.UserVideoReq>;
}
