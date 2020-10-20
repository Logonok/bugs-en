'use strict';

const parent = require('evado/config/default-security');

module.exports = {

    metaPermissions: [{
        description: 'Full access to data',
        roles: 'administrator',
        type: 'allow',
        actions: 'all',
        targets: {
            type: 'all'
        }
    }, {
        description: 'Read all data',
        roles: 'employee',
        type: 'allow',
        actions: 'read',
        targets: {
            type: 'all'
        }
    }, {
        description: 'Create comments, documents, works',
        roles: 'employee',
        type: 'allow',
        actions: 'create',
        targets: {
            type: 'class',
            class: ['comment', 'document', 'work']
        }
    }, {
        description: 'Manage your own data',
        roles: 'employee',
        type: 'allow',
        actions: ['read', 'update', 'delete'],
        targets: {
            type: 'class',
            class: ['task', 'comment', 'work']
        },
        rule: 'author'
    }, {
        description: 'Manage your own documents',
        roles: 'employee',
        type: 'allow',
        actions: ['read', 'update', 'delete'],
        targets: {
            type: 'class',
            class: 'document'
        },
        rule: 'creator'
    }, {
        description: 'Employee cannot change task state',
        roles: 'employee',
        type: 'deny',
        actions: 'update',
        targets: {
            type: 'transition',
            class: 'task'
        }
    }, {
        description: 'Manager can create tasks',
        roles: 'manager',
        type: 'allow',
        actions: 'create',
        targets: {
            type: 'class',
            class: 'task'
        }
    }, {
        description: 'Manager can change the state of his own tasks',
        roles: 'manager',
        type: 'allow',
        actions: 'update',
        targets: {
            type: 'transition',
            class: 'task'
        },
        rule: 'author'
    }, {
        description: 'Executor can change the state of tasks assigned to him',
        roles: 'executor',
        type: 'allow',
        actions: 'update',
        targets: {
            type: 'transition',
            class: 'task'
        },
        rule: 'executor'
    }, {
        description: 'Manager cannot start, stop, and complete work on tasks',
        roles: 'manager',
        type: 'deny',
        actions: 'update',
        targets: {
            type: 'transition',
            class: 'task',
            transition: ['start', 'stop', 'complete']
        }
    }, {
        description: 'Executor cannot reject, close and reopen tasks',
        roles: 'executor',
        type: 'deny',
        actions: 'update',
        targets: {
            type: 'transition',
            class: 'task',
            transition: ['reject', 'close', 'reopen']
        }
    }],

    permissions: {
        ...parent.permissions,

        'moduleAdmin': {
            label: 'Admin module',
            description: 'Access to the Administration module'
        },
        'moduleOffice': {
            label: 'Office module',
            description: 'Access to the Office module'
        },
        'moduleStudio': {
            label: 'Studio module',
            description: 'Access to the Studio module'
        },
        'moduleApiBaseUpload': {
            label: 'File upload',
            description: 'Uploading files through the base metadata API module'
        }
    },

    roles: {
        'administrator': {
            label: 'Administrator',
            description: 'Full access to system',
            children: [
                'moduleAdmin',
                'moduleOffice',
                'moduleStudio',
                'moduleApiBaseUpload'
            ]
        },
        'guest': {
            label: 'Guest',
            description: 'Auto-assigned role for anonymous users'
        },
        'executor': {
            label: 'Executor',
            description: 'An employee who corrects errors in tasks'
        },
        'manager': {
            label: 'Менеджер',
            description: 'An employee who creates and reviews tasks'
        },
        'employee': {
            label: 'Employee',
            description: 'Team member',
            children: [
                'moduleOffice',
                'moduleApiBaseUpload'
            ]
        }
    },

    rules: {
        'creator': {
            label: 'Creator',
            description: 'Check that the current user is the creator of object',
            config: {
                Class: 'evado/component/meta/rbac/rule/UserRule',
                userAttr: '_creator'
            }
        },
        'author': {
            label: 'Author',
            description: 'Check authorship by binding the current user to employee object.',
            config: {
                Class: 'evado/component/meta/rbac/rule/RefUserRule',
                refAttr: 'author'
            }
        },
        'executor': {
            label: 'Executor',
            description: 'Check executor by binding the current user to employee object',
            config: {
                Class: 'evado/component/meta/rbac/rule/RefUserRule',
                refAttr: 'executor'
            }
        },
        'user': {
            label: 'User',
            description: 'Check user binding',
            config: {
                Class: 'evado/component/meta/rbac/rule/UserRule'
            }
        }
    },

    // bind users to roles
    assignments: {
        'Adam': 'administrator',
        'Bob': ['executor', 'employee'],
        'Sara': ['manager', 'employee']
    }
};