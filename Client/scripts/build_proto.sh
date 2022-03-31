#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./git push --set-upstream origin poc/grpc-usage-videolib-proto

mkdir -p ${PROTO_DEST}

# JavaScript code generation
./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc.cmd=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# TypeScript code generation
./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts.cmd=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DEST} \
    -I ./proto \
    proto/*.proto