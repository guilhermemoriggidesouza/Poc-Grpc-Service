// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_video_pb = require('./user_video_pb.js');

function serialize_UserVideo_UserVideoReq(arg) {
  if (!(arg instanceof user_video_pb.UserVideoReq)) {
    throw new Error('Expected argument of type UserVideo.UserVideoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserVideo_UserVideoReq(buffer_arg) {
  return user_video_pb.UserVideoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserVideo_UserVideoResp(arg) {
  if (!(arg instanceof user_video_pb.UserVideoResp)) {
    throw new Error('Expected argument of type UserVideo.UserVideoResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserVideo_UserVideoResp(buffer_arg) {
  return user_video_pb.UserVideoResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserVideoService = exports.UserVideoService = {
  syncUserVideo: {
    path: '/UserVideo.UserVideo/syncUserVideo',
    requestStream: true,
    responseStream: false,
    requestType: user_video_pb.UserVideoReq,
    responseType: user_video_pb.UserVideoResp,
    requestSerialize: serialize_UserVideo_UserVideoReq,
    requestDeserialize: deserialize_UserVideo_UserVideoReq,
    responseSerialize: serialize_UserVideo_UserVideoResp,
    responseDeserialize: deserialize_UserVideo_UserVideoResp,
  },
};

exports.UserVideoClient = grpc.makeGenericClientConstructor(UserVideoService);
