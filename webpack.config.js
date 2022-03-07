module.exports = {
    resolve: {
       fallback: { "stream": require.resolve("stream-browserify") },
       fallback: { "zlib": require.resolve("browserify-zlib") }
    }
}