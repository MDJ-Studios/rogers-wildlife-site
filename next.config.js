const { hostname } = require("os");

module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: "www.paypalobjects.com",
            },
            {
                hostname: "us-east-1-shared-usea1-02.graphassets.com",
            },
        ],
    },
};
