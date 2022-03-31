// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_position_pb = require('./user_position_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_UserVideo_UserVideoReq(arg) {
  if (!(arg instanceof user_position_pb.UserVideoReq)) {
    throw new Error('Expected argument of type UserVideo.UserVideoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserVideo_UserVideoReq(buffer_arg) {
  return user_position_pb.UserVideoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserVideo_UserVideoResp(arg) {
  if (!(arg instanceof user_position_pb.UserVideoResp)) {
    throw new Error('Expected argument of type UserVideo.UserVideoResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserVideo_UserVideoResp(buffer_arg) {
  return user_position_pb.UserVideoResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserVideoService = exports.UserVideoService = {
  syncUserVideo: {
    path: '/UserVideo.UserVideo/SyncUserVideo',
    requestStream: true,
    responseStream: false,
    requestType: user_position_pb.UserVideoReq,
    responseType: user_position_pb.UserVideoResp,
    requestSerialize: serialize_UserVideo_UserVideoReq,
    requestDeserialize: deserialize_UserVideo_UserVideoReq,
    responseSerialize: serialize_UserVideo_UserVideoResp,
    responseDeserialize: deserialize_UserVideo_UserVideoResp,
  },
};

exports.UserVideoClient = grpc.makeGenericClientConstructor(UserVideoService);
