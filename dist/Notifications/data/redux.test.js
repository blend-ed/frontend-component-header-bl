function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import MockAdapter from 'axios-mock-adapter';
import { Factory } from 'rosie';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { initializeMockApp } from '@edx/frontend-platform/testing';
import { initializeStore } from '../../store';
import executeThunk from '../../test-utils';
import mockNotificationsResponse from '../test-utils';
import { getNotificationsListApiUrl, getNotificationsCountApiUrl, markNotificationAsReadApiUrl, markNotificationsSeenApiUrl } from './api';
import { fetchAppsNotificationCount, fetchNotificationList, markNotificationsAsRead, markAllNotificationsAsRead, resetNotificationState, markNotificationsAsSeen } from './thunks';
import './__factories__';
var notificationCountsApiUrl = getNotificationsCountApiUrl();
var notificationsListApiUrl = getNotificationsListApiUrl();
var markedAllNotificationsAsReadApiUrl = markNotificationAsReadApiUrl();
var markedAllNotificationsAsSeenApiUrl = markNotificationsSeenApiUrl('discussion');
var axiosMock;
var store;
describe('Notification Redux', function () {
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$mockNotificati;
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
          store = initializeStore();
          _context.next = 6;
          return mockNotificationsResponse();
        case 6:
          _yield$mockNotificati = _context.sent;
          store = _yield$mockNotificati.store;
          axiosMock = _yield$mockNotificati.axiosMock;
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  afterEach(function () {
    axiosMock.reset();
  });
  it('Successfully loaded initial notification states in the redux.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _store$getState, notifications;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          executeThunk(resetNotificationState(), store.dispatch, store.getState);
          _store$getState = store.getState(), notifications = _store$getState.notifications;
          expect(notifications.notificationStatus).toEqual('idle');
          expect(notifications.appName).toEqual('discussion');
          expect(notifications.appsId).toHaveLength(0);
          expect(notifications.apps).toEqual({});
          expect(notifications.notifications).toEqual({});
          expect(notifications.tabsCount).toEqual({});
          expect(notifications.showNotificationsTray).toEqual(false);
          expect(notifications.pagination).toEqual({});
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('Successfully loaded notifications list in the redux.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var _store$getState2, notifications;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _store$getState2 = store.getState(), notifications = _store$getState2.notifications.notifications;
          expect(Object.keys(notifications)).toHaveLength(10);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it.each([{
    statusCode: 404,
    status: 'failed'
  }, {
    statusCode: 403,
    status: 'denied'
  }])('%s to load notifications list in the redux.', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref4) {
      var statusCode, status, _store$getState3, notificationStatus;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            statusCode = _ref4.statusCode, status = _ref4.status;
            axiosMock.onGet(notificationsListApiUrl).reply(statusCode);
            _context4.next = 4;
            return executeThunk(fetchNotificationList({
              page: 1
            }), store.dispatch, store.getState);
          case 4:
            _store$getState3 = store.getState(), notificationStatus = _store$getState3.notifications.notificationStatus;
            expect(notificationStatus).toEqual(status);
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  it('Successfully loaded notification counts in the redux.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var _store$getState4, tabsCount;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _store$getState4 = store.getState(), tabsCount = _store$getState4.notifications.tabsCount;
          expect(tabsCount.count).toEqual(25);
          expect(tabsCount.reminders).toEqual(10);
          expect(tabsCount.discussion).toEqual(0);
          expect(tabsCount.grades).toEqual(10);
          expect(tabsCount.authoring).toEqual(5);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  it.each([{
    statusCode: 404,
    status: 'failed'
  }, {
    statusCode: 403,
    status: 'denied'
  }])('%s to load notification counts in the redux.', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref7) {
      var statusCode, status, _store$getState5, notificationStatus;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            statusCode = _ref7.statusCode, status = _ref7.status;
            axiosMock.onGet(notificationCountsApiUrl).reply(statusCode);
            _context6.next = 4;
            return executeThunk(fetchAppsNotificationCount(), store.dispatch, store.getState);
          case 4:
            _store$getState5 = store.getState(), notificationStatus = _store$getState5.notifications.notificationStatus;
            expect(notificationStatus).toEqual(status);
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x2) {
      return _ref8.apply(this, arguments);
    };
  }());
  it('Successfully marked all notifications as seen for selected app.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          axiosMock.onPut(markedAllNotificationsAsSeenApiUrl).reply(200);
          _context7.next = 3;
          return executeThunk(markNotificationsAsSeen('discussion'), store.dispatch, store.getState);
        case 3:
          expect(store.getState().notifications.notificationStatus).toEqual('successful');
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  it.each([{
    statusCode: 404,
    status: 'failed'
  }, {
    statusCode: 403,
    status: 'denied'
  }])('%s to mark all notifications as seen for selected app.', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref10) {
      var statusCode, status, _store$getState6, notificationStatus;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            statusCode = _ref10.statusCode, status = _ref10.status;
            axiosMock.onPut(markedAllNotificationsAsSeenApiUrl).reply(statusCode);
            _context8.next = 4;
            return executeThunk(markNotificationsAsSeen('discussion'), store.dispatch, store.getState);
          case 4:
            _store$getState6 = store.getState(), notificationStatus = _store$getState6.notifications.notificationStatus;
            expect(notificationStatus).toEqual(status);
          case 6:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x3) {
      return _ref11.apply(this, arguments);
    };
  }());
  it('Successfully marked all notifications as read for selected app in the redux.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var _store$getState7, _store$getState7$noti, notificationStatus, notifications, firstNotification;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(200);
          _context9.next = 3;
          return executeThunk(markAllNotificationsAsRead('discussion'), store.dispatch, store.getState);
        case 3:
          _store$getState7 = store.getState(), _store$getState7$noti = _store$getState7.notifications, notificationStatus = _store$getState7$noti.notificationStatus, notifications = _store$getState7$noti.notifications;
          firstNotification = Object.values(notifications)[0];
          expect(notificationStatus).toEqual('successful');
          expect(firstNotification.lastRead).not.toBeNull();
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  })));
  it('Successfully marked notification as read in the redux.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var _store$getState8, _store$getState8$noti, notificationStatus, notifications, firstNotification;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(200);
          _context10.next = 3;
          return executeThunk(markNotificationsAsRead(1), store.dispatch, store.getState);
        case 3:
          _store$getState8 = store.getState(), _store$getState8$noti = _store$getState8.notifications, notificationStatus = _store$getState8$noti.notificationStatus, notifications = _store$getState8$noti.notifications;
          firstNotification = Object.values(notifications)[0];
          expect(notificationStatus).toEqual('successful');
          expect(firstNotification.lastRead).not.toBeNull();
        case 7:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  it.each([{
    statusCode: 404,
    status: 'failed'
  }, {
    statusCode: 403,
    status: 'denied'
  }])('%s to marked notification as read in the redux.', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref14) {
      var statusCode, status, _store$getState9, notificationStatus;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            statusCode = _ref14.statusCode, status = _ref14.status;
            axiosMock.onPatch(markedAllNotificationsAsReadApiUrl).reply(statusCode);
            _context11.next = 4;
            return executeThunk(markNotificationsAsRead(1), store.dispatch, store.getState);
          case 4:
            _store$getState9 = store.getState(), notificationStatus = _store$getState9.notifications.notificationStatus;
            expect(notificationStatus).toEqual(status);
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function (_x4) {
      return _ref15.apply(this, arguments);
    };
  }());
});
//# sourceMappingURL=redux.test.js.map