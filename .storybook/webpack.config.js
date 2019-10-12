const path = require('path');

module.exports = (baseConfig, env) => {   
    
    baseConfig.config.resolve.modules = [
        ...(baseConfig.config.resolve.modules || []),
        'src',
    ];

	return baseConfig.config;
};