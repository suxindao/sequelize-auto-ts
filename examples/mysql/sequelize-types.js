"use strict";
var asserters = {};
function AssertValidRoles(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Role provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Role provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'RoleID':
                assertValidFieldType('Role', 'RoleID', pojo, 'number');
                break;
            case 'RoleName':
                assertValidFieldType('Role', 'RoleName', pojo, 'string');
                break;
            default:
                throw new Error('Invalid Role provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.AssertValidRoles = AssertValidRoles;
asserters['Role'] = AssertValidRoles;
function AssertValidUsers(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid User provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid User provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'UserID':
                assertValidFieldType('User', 'UserID', pojo, 'number');
                break;
            case 'RoleID':
                assertValidFieldType('User', 'RoleID', pojo, 'number');
                break;
            case 'UserName':
                assertValidFieldType('User', 'UserName', pojo, 'string');
                break;
            case 'role':
                assertValidFieldType('User', 'role', pojo, 'RolesPojo');
                break;
            default:
                throw new Error('Invalid User provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.AssertValidUsers = AssertValidUsers;
asserters['User'] = AssertValidUsers;
var BOOLEAN_TYPE = typeof (true);
var NUMBER_TYPE = typeof (1);
var STRING_TYPE = typeof ('');
var FUNCTION_TYPE = typeof (function () { });
var DATE_EXPECTED_TYPE = 'Date';
var BUFFER_EXPECTED_TYPE = 'Buffer';
var BUFFER_EXISTS = typeof Buffer !== 'undefined';
function assertValidFieldType(pojoName, fieldName, pojo, expectedType) {
    var value = pojo[fieldName];
    var actualType = typeof value;
    if (value === undefined || value === null) {
        return;
    }
    switch (expectedType) {
        case BOOLEAN_TYPE:
            if (actualType !== BOOLEAN_TYPE && actualType !== NUMBER_TYPE) {
                err();
            }
            pojo[fieldName] = Boolean(value);
            return;
        case NUMBER_TYPE:
            if (actualType === NUMBER_TYPE) {
                return;
            }
            if (actualType === STRING_TYPE) {
                var newValue = parseFloat(value);
                if (isNaN(newValue)) {
                    err();
                }
                pojo[fieldName] = newValue;
            }
            return;
        case STRING_TYPE:
            if (actualType !== STRING_TYPE) {
                pojo[fieldName] = value.toString();
            }
            return;
        case DATE_EXPECTED_TYPE:
            var getTime = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue = value.getTime();
                if (isNaN(timeValue)) {
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }
            if (actualType === STRING_TYPE) {
                var newDate = new Date(value);
                if (!isNaN(newDate.getTime())) {
                    pojo[fieldName] = newDate;
                    return;
                }
            }
            err();
            return;
        case BUFFER_EXPECTED_TYPE:
            if (!BUFFER_EXISTS) {
                return;
            }
            if (!(value instanceof Buffer)) {
                err();
            }
            return;
    }
    if (expectedType.length > 3 && expectedType.substr(expectedType.length - 2, 2) === '[]') {
        var individualPojoType = expectedType.substr(0, expectedType.length - 6);
        var asserter = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }
        if (isNaN(value.length)) {
            err();
        }
        for (var i = 0; i < value.length; i++) {
            try {
                asserter(value[i], true);
            }
            catch (e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }
        return;
    }
    var asserter = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }
    try {
        asserter(value, true);
    }
    catch (e) {
        err(e.message);
    }
    function err(extraMessage) {
        var message = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }
    function expectedTypeErr() {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}
function safeValue(value) {
    if (value === undefined || value === null) {
        return typeof value;
    }
    var s = value.toString();
    return s.substr(0, 100);
}
