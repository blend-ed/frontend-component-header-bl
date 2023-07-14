function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import MockAdapter from 'axios-mock-adapter';
import { Factory } from 'rosie';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { initializeMockApp } from '@edx/frontend-platform/testing';
import { getNotificationsListApiUrl, getNotificationsCountApiUrl, markNotificationAsReadApiUrl, markNotificationsSeenApiUrl, getNotificationCounts, getNotificationsList, markNotificationSeen, markAllNotificationRead, markNotificationRead } from './api';
import './__factories__';
var notificationCountsApiUrl = getNotificationsCountApiUrl();
var notificationsApiUrl = getNotificationsListApiUrl();
var markedAllNotificationsAsSeenApiUrl = markNotificationsSeenApiUrl('discussion');
var markedAllNotificationsAsReadApiUrl = markNotificationAsReadApiUrl();
var axiosMock = null;
describe('Notifications API', function () {
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          initializeMockApp({
            authenticatedUser: {
              userId: '123abc',
              username: 'testuser',
              administrator: false,
              roles: []
            }
          });
          axiosMock = new MockAdapter(getAuthenticatedHttpClient());
          Factory.resetAll();
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  afterEach(function () {
    axiosMock.reset();
  });
  it('Successfully get notification counts for different tabs.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _yield$getNotificatio, count, countByAppName;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          axiosMock.onGet(notificationCountsApiUrl).reply(200, Factory.build('notificationsCount'));
          _context2.next = 3;
          return getNotificationCounts();
        case 3:
          _yield$getNotificatio = _context2.sent;
          count = _yield$getNotificatio.count;
          countByAppName = _yield$getNotificatio.countByAppName;
          expect(count).toEqual(45);
          expect(countByAppName.reminders).toEqual(10);
          expect(countByAppName.discussion).toEqual(20);
          expect(countByAppName.grades).toEqual(10);
          expect(countByAppName.authoring).toEqual(5);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it.each([{
    statusCode: 404,
    message: 'Failed to get notification counts.'
  }, {
    statusCode: 403,
    message: 'Denied to get notification counts.'
  }])('%s for notification counts API.', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
      var statusCode, message;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            statusCode = _ref3.statusCode, message = _ref3.message;
            axiosMock.onGet(notificationCountsApiUrl).reply(statusCode, {
              message: message
            });
            _context3.prev = 2;
            _context3.next = 5;
            return getNotificationCounts();
          case 5:
            _context3.next = 11;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](2);
            expect(_context3.t0.response.status).toEqual(statusCode);
            expect(_context3.t0.response.data.message).toEqual(message);
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 7]]);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  it('Successfully get notifications.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var notifications;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          axiosMock.onGet(notificationsApiUrl).reply(200, Factory.build('notificationsList'));
          _context4.next = 3;
          return getNotificationsList('discussion', 1);
        case 3:
          notifications = _context4.sent;
          expect(notifications.results).toHaveLength(2);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  it.each([{
    statusCode: 404,
    message: 'Failed to get notifications.'
  }, {
    statusCode: 403,
    message: 'Denied to get notifications.'
  }])('%s for notification API.', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref6) {
      var statusCode, message;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            statusCode = _ref6.statusCode, message = _ref6.message;
            axiosMock.onGet(notificationsApiUrl).reply(statusCode, {
              message: message
            });
            _context5.prev = 2;
            _context5.next = 5;
            return getNotificationsList('discussion', 1);
          case 5:
            _context5.next = 11;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](2);
            expect(_context5.t0.response.status).toEqual(statusCode);
            expect(_context5.t0.response.data.message).toEqual(message);
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[2, 7]]);
    }));
    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }());
  it('Successfully marked all notifications as seen for selected app.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _yield$markNotificati, message;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          axiosMock.onPut(markedAllNotificationsAsSeenApiUrl).reply(200, {
            message: 'Notifications marked seen.'
          });
          _context6.next = 3;
          return markNotificationSeen('discussion');
        case 3:
          _yield$markNotificati = _context6.sent;
          message = _yield$markNotificati.message;
          expect(message).toEqual('Notifications marked seen.');
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  it.each([{
    statusCode: 404,
    message: 'Failed to mark all notifications as seen for selected app.'
  }, {
    statusCode: 403,
    message: 'Denied to mark all notifications as seen for selected app.'
  }])('%s for notification mark as seen API.', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref9) {
      var statusCode, message;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            statusCode = _ref9.statusCode, message = _ref9.message;
            axiosMock.onPut(markedAllNotificationsAsSeenApiUrl).reply(statusCode, {
              message: message
            });
            _context7.prev = 2;
            _context7.next = 5;
            return markNotificationSeen('discussion');
          case 5:
            _context7.next = 11;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](2);
            expect(_context7.t0.response.status).toEqual(statusCode);
            expect(_context7.t0.response.data.message).toEqual(message);
          case 11:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[2, 7]]);
    }));
    return function (_x3) {
      return _ref10.apply(this, arguments);
    };
  }());
  it('Successfully marked all notifications as read for selected app.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var _yield$markAllNotific, message;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(200, {
            message: 'Notifications marked read.'
          });
          _context8.next = 3;
          return markAllNotificationRead('discussion');
        case 3:
          _yield$markAllNotific = _context8.sent;
          message = _yield$markAllNotific.message;
          expect(message).toEqual('Notifications marked read.');
        case 6:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
  it.each([{
    statusCode: 404,
    message: 'Failed to mark all notifications as read for selected app.'
  }, {
    statusCode: 403,
    message: 'Denied to mark all notifications as read for selected app.'
  }])('%s for notification mark all as read API.', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref12) {
      var statusCode, message;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            statusCode = _ref12.statusCode, message = _ref12.message;
            axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(statusCode, {
              message: message
            });
            _context9.prev = 2;
            _context9.next = 5;
            return markAllNotificationRead('discussion');
          case 5:
            _context9.next = 11;
            break;
          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](2);
            expect(_context9.t0.response.status).toEqual(statusCode);
            expect(_context9.t0.response.data.message).toEqual(message);
          case 11:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[2, 7]]);
    }));
    return function (_x4) {
      return _ref13.apply(this, arguments);
    };
  }());
  it('Successfully marked notification as read.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var _yield$markNotificati2, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(200, {
            message: 'Notification marked read.'
          });
          _context10.next = 3;
          return markNotificationRead(1);
        case 3:
          _yield$markNotificati2 = _context10.sent;
          data = _yield$markNotificati2.data;
          expect(data.message).toEqual('Notification marked read.');
        case 6:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  it.each([{
    statusCode: 404,
    message: 'Failed to mark notification as read.'
  }, {
    statusCode: 403,
    message: 'Denied to mark notification as read.'
  }])('%s for notification mark as read API.', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref15) {
      var statusCode, message;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            statusCode = _ref15.statusCode, message = _ref15.message;
            axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(statusCode, {
              message: message
            });
            _context11.prev = 2;
            _context11.next = 5;
            return markAllNotificationRead(1);
          case 5:
            _context11.next = 11;
            break;
          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](2);
            expect(_context11.t0.response.status).toEqual(statusCode);
            expect(_context11.t0.response.data.message).toEqual(message);
          case 11:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[2, 7]]);
    }));
    return function (_x5) {
      return _ref16.apply(this, arguments);
    };
  }());
});
//# sourceMappingURL=api.test.js.map