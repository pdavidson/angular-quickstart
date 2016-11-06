var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
    server: {
        middleware: {
            1: proxyMiddleware('/exercises', {
                target: 'http://api.bodybuilding.com',
                changeOrigin: true   // for vhosted sites, changes host header to match to target's host
            })
        }
    }
};