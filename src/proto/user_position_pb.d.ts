// package: UserPosition
// file: user_position.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class UserPositionReq extends jspb.Message { 
    getId(): number;
    setId(value: number): UserPositionReq;
    getLog(): number;
    setLog(value: number): UserPositionReq;
    getLat(): number;
    setLat(value: number): UserPositionReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPositionReq.AsObject;
    static toObject(includeInstance: boolean, msg: UserPositionReq): UserPositionReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPositionReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPositionReq;
    static deserializeBinaryFromReader(message: UserPositionReq, reader: jspb.BinaryReader): UserPositionReq;
}

export namespace UserPositionReq {
    export type AsObject = {
        id: number,
        log: number,
        lat: number,
    }
}

export class UserPositionList extends jspb.Message { 
    clearUserspositionsList(): void;
    getUserspositionsList(): Array<UserPositionReq>;
    setUserspositionsList(value: Array<UserPositionReq>): UserPositionList;
    addUserspositions(value?: UserPositionReq, index?: number): UserPositionReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPositionList.AsObject;
    static toObject(includeInstance: boolean, msg: UserPositionList): UserPositionList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPositionList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPositionList;
    static deserializeBinaryFromReader(message: UserPositionList, reader: jspb.BinaryReader): UserPositionList;
}

export namespace UserPositionList {
    export type AsObject = {
        userspositionsList: Array<UserPositionReq.AsObject>,
    }
}
