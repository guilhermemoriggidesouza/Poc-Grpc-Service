const fs = require("fs");
const tf = require("@tensorflow/tfjs-node")

const spawnProcess = require('child_process').spawn
const ffmpeg = spawnProcess('ffmpeg', [
        '-i', 'sdk-liveness.mp4',
        '-vcodec', 'png',
        '-f', 'rawvideo',
        '-s', 'h*w', // size of one frame
        'pipe:1'
    ]);

let i = 0

ffmpeg.stdout.on('data', (data) => {
    try {
        console.log(tf.node.decodeImage(data).shape)
    } catch(e) {
        console.log(e)
    } 
})