// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_position_pb = require('./user_position_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_UserPosition_UserPositionList(arg) {
  if (!(arg instanceof user_position_pb.UserPositionList)) {
    throw new Error('Expected argument of type UserPosition.UserPositionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserPosition_UserPositionList(buffer_arg) {
  return user_position_pb.UserPositionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserPosition_UserPositionReq(arg) {
  if (!(arg instanceof user_position_pb.UserPositionReq)) {
    throw new Error('Expected argument of type UserPosition.UserPositionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserPosition_UserPositionReq(buffer_arg) {
  return user_position_pb.UserPositionReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserPositionService = exports.UserPositionService = {
  syncUserPosition: {
    path: '/UserPosition.UserPosition/SyncUserPosition',
    requestStream: true,
    responseStream: true,
    requestType: user_position_pb.UserPositionReq,
    responseType: user_position_pb.UserPositionList,
    requestSerialize: serialize_UserPosition_UserPositionReq,
    requestDeserialize: deserialize_UserPosition_UserPositionReq,
    responseSerialize: serialize_UserPosition_UserPositionList,
    responseDeserialize: deserialize_UserPosition_UserPositionList,
  },
};

exports.UserPositionClient = grpc.makeGenericClientConstructor(UserPositionService);
