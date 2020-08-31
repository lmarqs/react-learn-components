const path = require('path');

module.exports = {
    webpack(config, env) {
        if (env !== 'production') {
            config.entry.unshift(path.join(process.cwd(), 'support/rewiremock'));
            config.plugins.push(new require('rewiremock/webpack/plugin'));
        }
        return config
    }
}