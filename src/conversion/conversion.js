const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const utils = require("../utils/utils");
const Promise = require("bluebird");
module.exports {
  convertToMp3(fileName) {
    return new Promise((resolve, reject) => {
      const outFile = `${utils.noExtension(fileName)}.mp3`;
      ffmpeg(path.resolve(fileName))
        .audioChannels(2)
        .on('error', (err) => {
          reject(err);
        })
        .on('end', () => {
          resolve(outFile)
        })
        .save(outFile);
    });
  }
}