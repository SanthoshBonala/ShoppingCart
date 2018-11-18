const config = {
    development: {
        url: 'mongodb://localhost/hci'
    }
}

module.exports = config[process.env.ENV] || config.development