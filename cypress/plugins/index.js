function setViewPortsAndUserAgent(device) {    
    if (device === 'web') {
        return {
            viewportWidth: 1266,
            viewportHeight: 768,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
        }
    }

    throw new Error('device not supported - [please set device to mob or web]')
}
module.exports = (on, config) => {
    const viewportConfig = setViewPortsAndUserAgent(config.env.device);

    config = Object.assign({}, viewportConfig);

    require('cypress-mochawesome-reporter/plugin')(on);

    return config;
}

