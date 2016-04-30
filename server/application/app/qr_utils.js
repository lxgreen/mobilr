/**
 * Created by lxgreen on 4/28/2016.
 */
'use strict';

(function (module) {
    const qr = require('qr-image');
    const fs = require('fs');
    const Promise = require('bluebird');

    let imageTypes = ['png', 'jpg', 'svg'];

    module.getQRImage = function (text, path, type) {
        return new Promise(function (resolve, reject) {
            if(!text){
                reject('Invalid text');
            }
            let extension = path.slice(path.lastIndexOf('.') + 1);
            type = type || extension;
            if (type && imageTypes.indexOf(type) === -1) {
                reject(`Unsupported image type '${type}'. Supported types are: ${imageTypes.join(', ')}`);
            } else if (!type) {
                type = 'png';
            }

            qr.image(text, {type: type}).pipe(fs.createWriteStream(path));
            resolve(path);
        });
    };
})(module.exports);
