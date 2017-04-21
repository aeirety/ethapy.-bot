// System modules
const path = require("path");
const fs = require("fs");

// Community modules
const Promise = require("promise");

function read(dir) {
    return new Promise((resolve, reject) => {
        // Read direcotry
        fs.readdir(dir, (error, files) => {
            if (error) reject(error);

            let load;

            // Find _load.js file
            if (fs.existsSync(path.join(dir, "_load.js"))) {
                load = require(path.join(dir, "_load.js"));
                files = files.splice("_load.js", 1);
            }

            // Read files
            files.map((self) => {
                let required = require(path.join(dir, self));

                console.log(required);
                
                load(required);
            });

            resolve();
        });
    });
}

function start(dir) {
    return new Promise((resolve, reject) => {
        console.log("Reading directories");

        // Read directory
        fs.readdir(dir, (error, dirs) => {
            if (error) reject(error);

            let promises = [];

            // Read directories
            dirs.map((self) => {
                console.log(self);

                promises.push(read(path.join(dir, self)));
            });

            console.log("Reading files");

            Promise.all(promises).then(() => {
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    });
}

module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log("Loading");

        start(path.join(__dirname, "../../loader")).then(() => {
            console.log("Loaded");
            resolve();
        }).catch(error => {
            reject(error);
        });
    });
};