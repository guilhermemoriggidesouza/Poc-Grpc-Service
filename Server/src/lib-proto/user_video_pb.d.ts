// package: UserVideo
// file: user_video.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserVideoReq extends jspb.Message { 
    getCount(): number;
    setCount(value: number): UserVideoReq;
    getImg(): Uint8Array | string;
    getImg_asU8(): Uint8Array;
    getImg_asB64(): string;
    setImg(value: Uint8Array | string): UserVideoReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserVideoReq.AsObject;
    static toObject(includeInstance: boolean, msg: UserVideoReq): UserVideoReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserVideoReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserVideoReq;
    static deserializeBinaryFromReader(message: UserVideoReq, reader: jspb.BinaryReader): UserVideoReq;
}

export namespace UserVideoReq {
    export type AsObject = {
        count: number,
        img: Uint8Array | string,
    }
}

export class UserVideoResp extends jspb.Message { 
    getValidated(): string;
    setValidated(value: string): UserVideoResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserVideoResp.AsObject;
    static toObject(includeInstance: boolean, msg: UserVideoResp): UserVideoResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserVideoResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserVideoResp;
    static deserializeBinaryFromReader(message: UserVideoResp, reader: jspb.BinaryReader): UserVideoResp;
}

export namespace UserVideoResp {
    export type AsObject = {
        validated: string,
    }
}
