const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const ExtractFrames = require("./ExtractFrames");

const createStreamVideo = (call) => {
  const spawnProcess = require("child_process").spawn,
    ffmpeg = spawnProcess("ffmpeg", [
      "-i",
      "generic.mp4",
      "-f",
      "s16le", // PCM 16bits,  -endian
      "-ar",
      "44100", // Sampling rate
      "-ac",
      2, // Stereo
      "pipe:1", // Output on stdout
    ]);
  let i = 0;
  ffmpeg.stdout.on("data", (data) => {
    try {
      console.log(`${++i} frames read`);
      console.log(data);
      call.write({ count: i, img: data });
      // dispose all tensors
    } catch (e) {
      console.log(e);
    }
  });

  ffmpeg.on("close", function (code) {
    call.write({ count: -1 });
    console.log("child process exited with code " + code);
  });
};

(async () => {
  const protoObject = protoLoader.loadSync(
    path.resolve(__dirname, "./proto/user_video.proto")
  );
  const { UserVideo } = grpc.loadPackageDefinition(protoObject);
  const client = new UserVideo.UserVideo(
    "127.0.0.1:4500",
    grpc.credentials.createInsecure()
  );

  const call = client.syncUserVideo(() => {
    console.log("terminou");
  });
  createStreamVideo(call);
})();
