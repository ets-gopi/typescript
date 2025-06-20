var __extends = (this && this.__extends) || (function () {
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
var MsgError = /** @class */ (function (_super) {
    __extends(MsgError, _super);
    function MsgError(m) {
        return _super.call(this, m) || this;
    }
    MsgError.prototype.sayHello = function () {
        console.log('hello ' + this.message);
    };
    return MsgError;
}(Error));
var me = new MsgError('test');
var j = { name: 'GOpi' };
console.log(Object.getPrototypeOf(j));
// constructor
// how many ways can class constructor can be initate.
// A constructor can be initiated in as many ways as you explicitly support, using:
// Overloads
// Default values
// Optional parameters
// Union types
// JavaScript initializes class instances in this order:
// Base class field initializers
// Base class constructor
// Derived class field initializers
// Derived class constructor
