// package: UserVideo
// file: user_video.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_video_pb from "./user_video_pb";

interface IUserVideoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    syncUserVideo: IUserVideoService_IsyncUserVideo;
}

interface IUserVideoService_IsyncUserVideo extends grpc.MethodDefinition<user_video_pb.UserVideoReq, user_video_pb.UserVideoResp> {
    path: "/UserVideo.UserVideo/syncUserVideo";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<user_video_pb.UserVideoReq>;
    requestDeserialize: grpc.deserialize<user_video_pb.UserVideoReq>;
    responseSerialize: grpc.serialize<user_video_pb.UserVideoResp>;
    responseDeserialize: grpc.deserialize<user_video_pb.UserVideoResp>;
}

export const UserVideoService: IUserVideoService;

export interface IUserVideoServer {
    syncUserVideo: grpc.handleClientStreamingCall<user_video_pb.UserVideoReq, user_video_pb.UserVideoResp>;
}

export interface IUserVideoClient {
    syncUserVideo(callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
    syncUserVideo(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
    syncUserVideo(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
    syncUserVideo(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
}

export class UserVideoClient extends grpc.Client implements IUserVideoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public syncUserVideo(callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
    public syncUserVideo(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
    public syncUserVideo(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
    public syncUserVideo(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_video_pb.UserVideoResp) => void): grpc.ClientWritableStream<user_video_pb.UserVideoReq>;
}
