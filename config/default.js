'use strict';

module.exports = {

    title: 'Bugs',

    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'logonok-bugs-en',
            }
        },
        'cookie': {
            secret: 'logonok-bugs-en'
        },
        'session': {
            secret: 'logonok-bugs-en'
        },
        'i18n': {
            language: 'en'
        },
        'router': {
            // defaultModule: 'office'
        }
    },
    metaModels: {
        'base': {
            Class: require('evado-meta-base/base/BaseMeta')
        },
        'navigation': {
            Class: require('evado-meta-navigation/base/NavMeta')
        }
    },
    modules: {
        'api': {
            config: {
                modules: {
                    'base': {
                        Class: require('evado-api-base/Module')
                    },
                    'navigation': {
                        Class: require('evado-api-navigation/Module')
                    }
                }
            }
        },
        'studio': {
            Class: require('evado-module-studio/Module')
        },
        'office': {
            Class: require('../module/office/Module')
        },
        'account': {
            Class: require('evado-module-account/Module')
        },
        'admin': {
            Class: require('evado-module-admin/Module'),
            params: {
                separateNextCommonMenuItem: true
            }
        }
    },
    users: require('./default-users'),
    userFilters: require('./default-userFilters'),
    security: require('./default-security'),
    notices: require('./default-notices'),
    tasks: require('./default-tasks'),
    utilities: require('./default-utilities'),
    eventHandlers: require('./default-eventHandlers'),
    listeners: require('./default-listeners'),
    params: {
        'enablePasswordChange': true,
        'enablePasswordReset': false,
        'enableSignUp': false,
        'enableSignUpVerification': false
    }
};