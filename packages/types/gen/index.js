'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var lib = {};

var module$1 = {};

var $every$1 = {};

Object.defineProperty($every$1, "__esModule", { value: true });
$every$1.$every = void 0;
var $every = function (array, pred) {
    var error = null;
    for (var i = 0; i < array.length; ++i)
        if (null !== (error = pred(array[i], i)))
            return error;
    return null;
};
$every$1.$every = $every;

var $guard$1 = {};

var TypeGuardError$1 = {};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(TypeGuardError$1, "__esModule", { value: true });
TypeGuardError$1.TypeGuardError = void 0;
var TypeGuardError = (function (_super) {
    __extends(TypeGuardError, _super);
    function TypeGuardError(props) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, props.message ||
            "Error on ".concat(props.method, "(): invalid type").concat(props.path ? " on ".concat(props.path) : "", ", expect to be ").concat(props.expected)) || this;
        var proto = _newTarget.prototype;
        if (Object.setPrototypeOf)
            Object.setPrototypeOf(_this, proto);
        else
            _this.__proto__ = proto;
        _this.method = props.method;
        _this.path = props.path;
        _this.expected = props.expected;
        _this.value = props.value;
        return _this;
    }
    return TypeGuardError;
}(Error));
TypeGuardError$1.TypeGuardError = TypeGuardError;

Object.defineProperty($guard$1, "__esModule", { value: true });
$guard$1.$guard = void 0;
var TypeGuardError_1$1 = TypeGuardError$1;
var $guard = function (method) {
    return function (exceptionable, props) {
        if (exceptionable === true)
            throw new TypeGuardError_1$1.TypeGuardError({
                method: method,
                path: props.path,
                expected: props.expected,
                value: props.value,
            });
        return false;
    };
};
$guard$1.$guard = $guard;

var $is_email$1 = {};

Object.defineProperty($is_email$1, "__esModule", { value: true });
$is_email$1.$is_email = void 0;
function $is_email(str) {
    return REGEX$4.test(str);
}
$is_email$1.$is_email = $is_email;
var REGEX$4 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var $is_ipv4$1 = {};

Object.defineProperty($is_ipv4$1, "__esModule", { value: true });
$is_ipv4$1.$is_ipv4 = void 0;
function $is_ipv4(str) {
    return REGEX$3.test(str);
}
$is_ipv4$1.$is_ipv4 = $is_ipv4;
var REGEX$3 = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

var $is_ipv6$1 = {};

Object.defineProperty($is_ipv6$1, "__esModule", { value: true });
$is_ipv6$1.$is_ipv6 = void 0;
function $is_ipv6(str) {
    return REGEX$2.test(str);
}
$is_ipv6$1.$is_ipv6 = $is_ipv6;
var REGEX$2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

var $is_url$1 = {};

Object.defineProperty($is_url$1, "__esModule", { value: true });
$is_url$1.$is_url = void 0;
function $is_url(str) {
    return REGEX$1.test(str);
}
$is_url$1.$is_url = $is_url;
var REGEX$1 = /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

var $is_uuid$1 = {};

Object.defineProperty($is_uuid$1, "__esModule", { value: true });
$is_uuid$1.$is_uuid = void 0;
function $is_uuid(str) {
    return REGEX.test(str);
}
$is_uuid$1.$is_uuid = $is_uuid;
var REGEX = /[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

var $join$1 = {};

Object.defineProperty($join$1, "__esModule", { value: true });
$join$1.$join = void 0;
function $join(str) {
    return variable(str) ? ".".concat(str) : "[".concat(JSON.stringify(str), "]");
}
$join$1.$join = $join;
function variable(str) {
    return reserved(str) === false && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(str);
}
function reserved(str) {
    return RESERVED.has(str);
}
var RESERVED = new Set([
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
]);

var $number$1 = {};

Object.defineProperty($number$1, "__esModule", { value: true });
$number$1.$number = void 0;
var TypeGuardError_1 = TypeGuardError$1;
function $number(value) {
    if (!isFinite(value))
        throw new TypeGuardError_1.TypeGuardError({
            method: "TSON.stringify",
            expected: "number",
            value: value,
            message: "Error on TSON.stringify(): infinite number.",
        });
    else if (isNaN(value))
        throw new TypeGuardError_1.TypeGuardError({
            method: "TSON.stringify",
            expected: "number",
            value: value,
            message: "Error on TSON.stringify(): not a valid number.",
        });
    return value;
}
$number$1.$number = $number;

var $report$1 = {};

Object.defineProperty($report$1, "__esModule", { value: true });
$report$1.$report = void 0;
var $report = function (output) {
    var array = output.errors;
    var reportable = function (path) {
        if (array.length === 0)
            return true;
        var last = array[array.length - 1].path;
        return (path.length > last.length || last.substring(0, path.length) !== path);
    };
    return function (exceptable, error) {
        if (exceptable && reportable(error.path))
            array.push(error);
        return false;
    };
};
$report$1.$report = $report;

var $string$1 = {};

Object.defineProperty($string$1, "__esModule", { value: true });
$string$1.$string = void 0;
function $string(str) {
    if (str.length > 41)
        return JSON.stringify(str);
    var length = str.length;
    var result = "";
    var last = 0;
    var found = false;
    var surrogateFound = false;
    var point = 255;
    for (var i = 0; i < length && point >= 32; i++) {
        point = str.charCodeAt(i);
        if (0xd800 <= point && point <= 0xdfff) {
            surrogateFound = true;
            break;
        }
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + "\\";
            last = i;
            found = true;
        }
    }
    if (!found) {
        result = str;
    }
    else {
        result += str.slice(last);
    }
    return point < 32 || surrogateFound === true
        ? JSON.stringify(str)
        : "\"".concat(result, "\"");
}
$string$1.$string = $string;

var $tail$1 = {};

Object.defineProperty($tail$1, "__esModule", { value: true });
$tail$1.$tail = void 0;
function $tail(str) {
    return str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
}
$tail$1.$tail = $tail;

var IJsonApplication = {};

Object.defineProperty(IJsonApplication, "__esModule", { value: true });

var IJsonComponents = {};

Object.defineProperty(IJsonComponents, "__esModule", { value: true });

var IJsonSchema = {};

Object.defineProperty(IJsonSchema, "__esModule", { value: true });

var IValidation = {};

Object.defineProperty(IValidation, "__esModule", { value: true });

(function (exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createIsStringify = exports.createAssertStringify = exports.createStringify = exports.createObject = exports.createValidateEquals = exports.createEquals = exports.createAssertEquals = exports.createValidate = exports.createIs = exports.createAssertType = exports.isStringify = exports.assertStringify = exports.stringify = exports.application = exports.validateEquals = exports.equals = exports.assertEquals = exports.validate = exports.is = exports.assertType = void 0;
	var _every_1 = $every$1;
	var _guard_1 = $guard$1;
	var _is_email_1 = $is_email$1;
	var _is_ipv4_1 = $is_ipv4$1;
	var _is_ipv6_1 = $is_ipv6$1;
	var _is_url_1 = $is_url$1;
	var _is_uuid_1 = $is_uuid$1;
	var _join_1 = $join$1;
	var _number_1 = $number$1;
	var _report_1 = $report$1;
	var _string_1 = $string$1;
	var _tail_1 = $tail$1;
	var TypeGuardError_1 = TypeGuardError$1;
	__exportStar(IJsonApplication, exports);
	__exportStar(IJsonComponents, exports);
	__exportStar(IJsonSchema, exports);
	__exportStar(TypeGuardError$1, exports);
	__exportStar(IValidation, exports);
	function assertType() {
	    halt("assertType");
	}
	exports.assertType = assertType;
	(function (assertType) {
	    assertType.is_uuid = _is_uuid_1.$is_uuid;
	    assertType.is_email = _is_email_1.$is_email;
	    assertType.is_url = _is_url_1.$is_url;
	    assertType.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    assertType.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    assertType.join = _join_1.$join;
	    assertType.every = _every_1.$every;
	    assertType.guard = (0, _guard_1.$guard)("TSON.assertType");
	})(assertType = exports.assertType || (exports.assertType = {}));
	function is() {
	    halt("is");
	}
	exports.is = is;
	(function (is) {
	    is.is_uuid = _is_uuid_1.$is_uuid;
	    is.is_email = _is_email_1.$is_email;
	    is.is_url = _is_url_1.$is_url;
	    is.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    is.is_ipv6 = _is_ipv6_1.$is_ipv6;
	})(is = exports.is || (exports.is = {}));
	function validate() {
	    halt("validate");
	}
	exports.validate = validate;
	(function (validate) {
	    validate.is_uuid = _is_uuid_1.$is_uuid;
	    validate.is_email = _is_email_1.$is_email;
	    validate.is_url = _is_url_1.$is_url;
	    validate.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    validate.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    validate.join = _join_1.$join;
	    validate.report = _report_1.$report;
	})(validate = exports.validate || (exports.validate = {}));
	function assertEquals() {
	    halt("assertEquals");
	}
	exports.assertEquals = assertEquals;
	(function (assertEquals) {
	    assertEquals.is_uuid = _is_uuid_1.$is_uuid;
	    assertEquals.is_email = _is_email_1.$is_email;
	    assertEquals.is_url = _is_url_1.$is_url;
	    assertEquals.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    assertEquals.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    assertEquals.join = _join_1.$join;
	    assertEquals.every = _every_1.$every;
	    assertEquals.guard = (0, _guard_1.$guard)("TSON.assertEquals");
	})(assertEquals = exports.assertEquals || (exports.assertEquals = {}));
	function equals() {
	    halt("equals");
	}
	exports.equals = equals;
	(function (equals) {
	    equals.is_uuid = _is_uuid_1.$is_uuid;
	    equals.is_email = _is_email_1.$is_email;
	    equals.is_url = _is_url_1.$is_url;
	    equals.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    equals.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    equals.join = _join_1.$join;
	})(equals = exports.equals || (exports.equals = {}));
	function validateEquals() {
	    halt("validateEquals");
	}
	exports.validateEquals = validateEquals;
	(function (validateEquals) {
	    validateEquals.is_uuid = _is_uuid_1.$is_uuid;
	    validateEquals.is_email = _is_email_1.$is_email;
	    validateEquals.is_url = _is_url_1.$is_url;
	    validateEquals.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    validateEquals.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    validateEquals.join = _join_1.$join;
	    validateEquals.report = validate.report;
	})(validateEquals = exports.validateEquals || (exports.validateEquals = {}));
	function application() {
	    halt("application");
	}
	exports.application = application;
	function stringify() {
	    halt("stringify");
	}
	exports.stringify = stringify;
	(function (stringify) {
	    stringify.number = _number_1.$number;
	    stringify.string = _string_1.$string;
	    stringify.tail = _tail_1.$tail;
	    function throws(props) {
	        throw new TypeGuardError_1.TypeGuardError(__assign(__assign({}, props), { method: "TSON.stringify" }));
	    }
	    stringify.throws = throws;
	})(stringify = exports.stringify || (exports.stringify = {}));
	function assertStringify() {
	    halt("assertStringify");
	}
	exports.assertStringify = assertStringify;
	(function (assertStringify) {
	    assertStringify.is_uuid = _is_uuid_1.$is_uuid;
	    assertStringify.is_email = _is_email_1.$is_email;
	    assertStringify.is_url = _is_url_1.$is_url;
	    assertStringify.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    assertStringify.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    assertStringify.number = _number_1.$number;
	    assertStringify.string = _string_1.$string;
	    assertStringify.tail = _tail_1.$tail;
	    assertStringify.join = _join_1.$join;
	    assertStringify.guard = (0, _guard_1.$guard)("TSON.assertStringify");
	    assertStringify.every = _every_1.$every;
	    assertStringify.throws = function () { };
	})(assertStringify = exports.assertStringify || (exports.assertStringify = {}));
	function isStringify() {
	    halt("isStringify");
	}
	exports.isStringify = isStringify;
	(function (isStringify) {
	    isStringify.is_uuid = _is_uuid_1.$is_uuid;
	    isStringify.is_email = _is_email_1.$is_email;
	    isStringify.is_url = _is_url_1.$is_url;
	    isStringify.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    isStringify.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    isStringify.number = _number_1.$number;
	    isStringify.string = _string_1.$string;
	    isStringify.tail = _tail_1.$tail;
	    function throws(props) {
	        throw new TypeGuardError_1.TypeGuardError(__assign(__assign({}, props), { method: "TSON.assertStringify" }));
	    }
	    isStringify.throws = throws;
	})(isStringify = exports.isStringify || (exports.isStringify = {}));
	function createAssertType() {
	    halt("createAssertType");
	}
	exports.createAssertType = createAssertType;
	(function (createAssertType) {
	    createAssertType.is_uuid = _is_uuid_1.$is_uuid;
	    createAssertType.is_email = _is_email_1.$is_email;
	    createAssertType.is_url = _is_url_1.$is_url;
	    createAssertType.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createAssertType.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createAssertType.join = _join_1.$join;
	    createAssertType.every = _every_1.$every;
	    createAssertType.guard = assertType.guard;
	})(createAssertType = exports.createAssertType || (exports.createAssertType = {}));
	function createIs() {
	    halt("createIs");
	}
	exports.createIs = createIs;
	(function (createIs) {
	    createIs.is_uuid = _is_uuid_1.$is_uuid;
	    createIs.is_email = _is_email_1.$is_email;
	    createIs.is_url = _is_url_1.$is_url;
	    createIs.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createIs.is_ipv6 = _is_ipv6_1.$is_ipv6;
	})(createIs = exports.createIs || (exports.createIs = {}));
	function createValidate() {
	    halt("createValidate");
	}
	exports.createValidate = createValidate;
	(function (createValidate) {
	    createValidate.is_uuid = _is_uuid_1.$is_uuid;
	    createValidate.is_email = _is_email_1.$is_email;
	    createValidate.is_url = _is_url_1.$is_url;
	    createValidate.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createValidate.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createValidate.join = _join_1.$join;
	    createValidate.report = validate.report;
	})(createValidate = exports.createValidate || (exports.createValidate = {}));
	function createAssertEquals() {
	    halt("createAssertEquals");
	}
	exports.createAssertEquals = createAssertEquals;
	(function (createAssertEquals) {
	    createAssertEquals.is_uuid = _is_uuid_1.$is_uuid;
	    createAssertEquals.is_email = _is_email_1.$is_email;
	    createAssertEquals.is_url = _is_url_1.$is_url;
	    createAssertEquals.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createAssertEquals.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createAssertEquals.join = _join_1.$join;
	    createAssertEquals.every = assertEquals.every;
	    createAssertEquals.guard = assertEquals.guard;
	})(createAssertEquals = exports.createAssertEquals || (exports.createAssertEquals = {}));
	function createEquals() {
	    halt("createEquals");
	}
	exports.createEquals = createEquals;
	(function (createEquals) {
	    createEquals.is_uuid = _is_uuid_1.$is_uuid;
	    createEquals.is_email = _is_email_1.$is_email;
	    createEquals.is_url = _is_url_1.$is_url;
	    createEquals.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createEquals.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createEquals.join = _join_1.$join;
	})(createEquals = exports.createEquals || (exports.createEquals = {}));
	function createValidateEquals() {
	    halt("createValidateEquals");
	}
	exports.createValidateEquals = createValidateEquals;
	(function (createValidateEquals) {
	    createValidateEquals.is_uuid = _is_uuid_1.$is_uuid;
	    createValidateEquals.is_email = _is_email_1.$is_email;
	    createValidateEquals.is_url = _is_url_1.$is_url;
	    createValidateEquals.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createValidateEquals.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createValidateEquals.join = _join_1.$join;
	    createValidateEquals.report = validateEquals.report;
	})(createValidateEquals = exports.createValidateEquals || (exports.createValidateEquals = {}));
	function createObject() {
	    halt("createObject");
	}
	exports.createObject = createObject;
	function createStringify() {
	    halt("createStringify");
	}
	exports.createStringify = createStringify;
	(function (createStringify) {
	    createStringify.number = _number_1.$number;
	    createStringify.string = _string_1.$string;
	    createStringify.tail = _tail_1.$tail;
	    createStringify.throws = stringify.throws;
	})(createStringify = exports.createStringify || (exports.createStringify = {}));
	function createAssertStringify() {
	    halt("createAssertStringify");
	}
	exports.createAssertStringify = createAssertStringify;
	(function (createAssertStringify) {
	    createAssertStringify.is_uuid = _is_uuid_1.$is_uuid;
	    createAssertStringify.is_email = _is_email_1.$is_email;
	    createAssertStringify.is_url = _is_url_1.$is_url;
	    createAssertStringify.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createAssertStringify.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createAssertStringify.number = _number_1.$number;
	    createAssertStringify.string = _string_1.$string;
	    createAssertStringify.tail = _tail_1.$tail;
	    createAssertStringify.join = _join_1.$join;
	    createAssertStringify.every = assertStringify.every;
	    createAssertStringify.guard = assertStringify.guard;
	    createAssertStringify.throws = assertStringify.throws;
	})(createAssertStringify = exports.createAssertStringify || (exports.createAssertStringify = {}));
	function createIsStringify() {
	    halt("createIsStringify");
	}
	exports.createIsStringify = createIsStringify;
	(function (createIsStringify) {
	    createIsStringify.is_uuid = _is_uuid_1.$is_uuid;
	    createIsStringify.is_email = _is_email_1.$is_email;
	    createIsStringify.is_url = _is_url_1.$is_url;
	    createIsStringify.is_ipv4 = _is_ipv4_1.$is_ipv4;
	    createIsStringify.is_ipv6 = _is_ipv6_1.$is_ipv6;
	    createIsStringify.number = _number_1.$number;
	    createIsStringify.string = _string_1.$string;
	    createIsStringify.tail = _tail_1.$tail;
	    createIsStringify.throws = isStringify.throws;
	})(createIsStringify = exports.createIsStringify || (exports.createIsStringify = {}));
	function halt(name) {
	    throw new Error("Error on TSON.".concat(name, "(): no transform has been configured. Configure the \"tsconfig.json\" file following the [README.md#setup](https://github.com/samchon/typescript-json#setup)"));
	}
	
} (module$1));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var TSON = __importStar(module$1);
	exports.default = TSON;
	__exportStar(module$1, exports);
	
} (lib));

var TSON = /*@__PURE__*/getDefaultExportFromCjs(lib);

// this cannot be wrapped as the code must contain an explicit "TSON.is<YOURTYPE>()" somewhere to be compiled correctly
const isApiRequest = (input) => (input => {
    TSON.is.join;
    const $io0 = input => "string" === typeof input.requiredStr && (undefined === input.optionalNum || "number" === typeof input.optionalNum) && (undefined === input.optionalStrUnion || "format-a" === input.optionalStrUnion || "format-b" === input.optionalStrUnion);
    return "object" === typeof input && null !== input && $io0(input);
})(input);

exports.isApiRequest = isApiRequest;
