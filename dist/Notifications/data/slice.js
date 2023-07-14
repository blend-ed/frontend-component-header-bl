function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
export var RequestStatus = {
  IDLE: 'idle',
  IN_PROGRESS: 'in-progress',
  SUCCESSFUL: 'successful',
  FAILED: 'failed',
  DENIED: 'denied'
};
var initialState = {
  notificationStatus: RequestStatus.IDLE,
  appName: 'discussion',
  appsId: [],
  apps: {},
  notifications: {},
  tabsCount: {},
  showNotificationsTray: false,
  pagination: {}
};
var slice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    fetchNotificationDenied: function fetchNotificationDenied(state) {
      state.notificationStatus = RequestStatus.DENIED;
    },
    fetchNotificationFailure: function fetchNotificationFailure(state) {
      state.notificationStatus = RequestStatus.FAILED;
    },
    fetchNotificationRequest: function fetchNotificationRequest(state) {
      state.notificationStatus = RequestStatus.IN_PROGRESS;
    },
    fetchNotificationSuccess: function fetchNotificationSuccess(state, _ref) {
      var payload = _ref.payload;
      var newNotificationIds = payload.newNotificationIds,
        notificationsKeyValuePair = payload.notificationsKeyValuePair,
        pagination = payload.pagination;
      var existingNotificationIds = state.apps[state.appName];
      state.apps[state.appName] = Array.from(new Set([].concat(_toConsumableArray(existingNotificationIds), _toConsumableArray(newNotificationIds))));
      state.notifications = _objectSpread(_objectSpread({}, state.notifications), notificationsKeyValuePair);
      state.tabsCount.count -= state.tabsCount[state.appName];
      state.tabsCount[state.appName] = 0;
      state.notificationStatus = RequestStatus.SUCCESSFUL;
      state.pagination = pagination;
    },
    fetchNotificationsCountDenied: function fetchNotificationsCountDenied(state) {
      state.notificationStatus = RequestStatus.DENIED;
    },
    fetchNotificationsCountFailure: function fetchNotificationsCountFailure(state) {
      state.notificationStatus = RequestStatus.FAILED;
    },
    fetchNotificationsCountRequest: function fetchNotificationsCountRequest(state) {
      state.notificationStatus = RequestStatus.IN_PROGRESS;
    },
    fetchNotificationsCountSuccess: function fetchNotificationsCountSuccess(state, _ref2) {
      var payload = _ref2.payload;
      var countByAppName = payload.countByAppName,
        appIds = payload.appIds,
        apps = payload.apps,
        count = payload.count,
        showNotificationsTray = payload.showNotificationsTray;
      state.tabsCount = _objectSpread({
        count: count
      }, countByAppName);
      state.appsId = appIds;
      state.apps = apps;
      state.showNotificationsTray = showNotificationsTray;
      state.notificationStatus = RequestStatus.SUCCESSFUL;
    },
    markNotificationsAsSeenRequest: function markNotificationsAsSeenRequest(state) {
      state.notificationStatus = RequestStatus.IN_PROGRESS;
    },
    markNotificationsAsSeenSuccess: function markNotificationsAsSeenSuccess(state) {
      state.notificationStatus = RequestStatus.SUCCESSFUL;
    },
    markNotificationsAsSeenDenied: function markNotificationsAsSeenDenied(state) {
      state.notificationStatus = RequestStatus.DENIED;
    },
    markNotificationsAsSeenFailure: function markNotificationsAsSeenFailure(state) {
      state.notificationStatus = RequestStatus.FAILED;
    },
    markAllNotificationsAsReadRequest: function markAllNotificationsAsReadRequest(state) {
      state.notificationStatus = RequestStatus.IN_PROGRESS;
    },
    markAllNotificationsAsReadSuccess: function markAllNotificationsAsReadSuccess(state) {
      var updatedNotifications = Object.fromEntries(Object.entries(state.notifications).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          notification = _ref4[1];
        return [key, _objectSpread(_objectSpread({}, notification), {}, {
          lastRead: new Date().toISOString()
        })];
      }));
      state.notifications = updatedNotifications;
      state.notificationStatus = RequestStatus.SUCCESSFUL;
    },
    markAllNotificationsAsReadDenied: function markAllNotificationsAsReadDenied(state) {
      state.notificationStatus = RequestStatus.DENIED;
    },
    markAllNotificationsAsReadFailure: function markAllNotificationsAsReadFailure(state) {
      state.notificationStatus = RequestStatus.FAILED;
    },
    markNotificationsAsReadRequest: function markNotificationsAsReadRequest(state) {
      state.notificationStatus = RequestStatus.IN_PROGRESS;
    },
    markNotificationsAsReadSuccess: function markNotificationsAsReadSuccess(state, _ref5) {
      var payload = _ref5.payload;
      var date = new Date().toISOString();
      state.notifications[payload.id] = _objectSpread(_objectSpread({}, state.notifications[payload.id]), {}, {
        lastRead: date
      });
      state.notificationStatus = RequestStatus.SUCCESSFUL;
    },
    markNotificationsAsReadDenied: function markNotificationsAsReadDenied(state) {
      state.notificationStatus = RequestStatus.DENIED;
    },
    markNotificationsAsReadFailure: function markNotificationsAsReadFailure(state) {
      state.notificationStatus = RequestStatus.FAILED;
    },
    resetNotificationStateRequest: function resetNotificationStateRequest() {
      return initialState;
    },
    updateAppNameRequest: function updateAppNameRequest(state, _ref6) {
      var payload = _ref6.payload;
      state.appName = payload.appName;
      state.pagination.currentPage = 1;
    },
    updatePaginationRequest: function updatePaginationRequest(state) {
      state.pagination.currentPage += 1;
    }
  }
});
var _slice$actions = slice.actions,
  fetchNotificationDenied = _slice$actions.fetchNotificationDenied,
  fetchNotificationFailure = _slice$actions.fetchNotificationFailure,
  fetchNotificationRequest = _slice$actions.fetchNotificationRequest,
  fetchNotificationSuccess = _slice$actions.fetchNotificationSuccess,
  fetchNotificationsCountDenied = _slice$actions.fetchNotificationsCountDenied,
  fetchNotificationsCountFailure = _slice$actions.fetchNotificationsCountFailure,
  fetchNotificationsCountRequest = _slice$actions.fetchNotificationsCountRequest,
  fetchNotificationsCountSuccess = _slice$actions.fetchNotificationsCountSuccess,
  markNotificationsAsSeenRequest = _slice$actions.markNotificationsAsSeenRequest,
  markNotificationsAsSeenSuccess = _slice$actions.markNotificationsAsSeenSuccess,
  markNotificationsAsSeenFailure = _slice$actions.markNotificationsAsSeenFailure,
  markNotificationsAsSeenDenied = _slice$actions.markNotificationsAsSeenDenied,
  markAllNotificationsAsReadDenied = _slice$actions.markAllNotificationsAsReadDenied,
  markAllNotificationsAsReadRequest = _slice$actions.markAllNotificationsAsReadRequest,
  markAllNotificationsAsReadSuccess = _slice$actions.markAllNotificationsAsReadSuccess,
  markAllNotificationsAsReadFailure = _slice$actions.markAllNotificationsAsReadFailure,
  markNotificationsAsReadDenied = _slice$actions.markNotificationsAsReadDenied,
  markNotificationsAsReadRequest = _slice$actions.markNotificationsAsReadRequest,
  markNotificationsAsReadSuccess = _slice$actions.markNotificationsAsReadSuccess,
  markNotificationsAsReadFailure = _slice$actions.markNotificationsAsReadFailure,
  resetNotificationStateRequest = _slice$actions.resetNotificationStateRequest,
  updateAppNameRequest = _slice$actions.updateAppNameRequest,
  updatePaginationRequest = _slice$actions.updatePaginationRequest;
export { fetchNotificationDenied, fetchNotificationFailure, fetchNotificationRequest, fetchNotificationSuccess, fetchNotificationsCountDenied, fetchNotificationsCountFailure, fetchNotificationsCountRequest, fetchNotificationsCountSuccess, markNotificationsAsSeenRequest, markNotificationsAsSeenSuccess, markNotificationsAsSeenFailure, markNotificationsAsSeenDenied, markAllNotificationsAsReadDenied, markAllNotificationsAsReadRequest, markAllNotificationsAsReadSuccess, markAllNotificationsAsReadFailure, markNotificationsAsReadDenied, markNotificationsAsReadRequest, markNotificationsAsReadSuccess, markNotificationsAsReadFailure, resetNotificationStateRequest, updateAppNameRequest, updatePaginationRequest };
export var notificationsReducer = slice.reducer;
//# sourceMappingURL=slice.js.map