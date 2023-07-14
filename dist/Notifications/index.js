function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from '@edx/frontend-platform/i18n';
import classNames from 'classnames';
import { Badge, Icon, IconButton, OverlayTrigger, Popover } from '@edx/paragon';
import { NotificationsNone, Settings } from '@edx/paragon/icons';
import { selectNotificationTabsCount } from './data/selectors';
import { resetNotificationState } from './data/thunks';
import { useIsOnLargeScreen, useIsOnMediumScreen } from './data/hook';
import NotificationTabs from './NotificationTabs';
import messages from './messages';
var Notifications = function Notifications() {
  var intl = useIntl();
  var dispatch = useDispatch();
  var popoverRef = useRef(null);
  var buttonRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    enableNotificationTray = _useState2[0],
    setEnableNotificationTray = _useState2[1];
  var notificationCounts = useSelector(selectNotificationTabsCount());
  var isOnMediumScreen = useIsOnMediumScreen();
  var isOnLargeScreen = useIsOnLargeScreen();
  var hideNotificationTray = useCallback(function () {
    setEnableNotificationTray(function (prevState) {
      return !prevState;
    });
  }, []);
  var handleClickOutsideNotificationTray = useCallback(function (event) {
    var _popoverRef$current, _buttonRef$current;
    if (!((_popoverRef$current = popoverRef.current) !== null && _popoverRef$current !== void 0 && _popoverRef$current.contains(event.target)) && !((_buttonRef$current = buttonRef.current) !== null && _buttonRef$current !== void 0 && _buttonRef$current.contains(event.target))) {
      setEnableNotificationTray(false);
    }
  }, []);
  useEffect(function () {
    document.addEventListener('mousedown', handleClickOutsideNotificationTray);
    return function () {
      document.removeEventListener('mousedown', handleClickOutsideNotificationTray);
      dispatch(resetNotificationState());
    };
  }, []);
  return /*#__PURE__*/React.createElement(OverlayTrigger, {
    trigger: "click",
    key: "bottom",
    placement: "bottom",
    id: "notificationTray",
    show: enableNotificationTray,
    overlay: /*#__PURE__*/React.createElement(Popover, {
      id: "notificationTray",
      "data-testid": "notification-tray",
      className: classNames('overflow-auto rounded-0 border-0', {
        'w-100': !isOnMediumScreen && !isOnLargeScreen,
        'medium-screen': isOnMediumScreen,
        'large-screen': isOnLargeScreen
      })
    }, /*#__PURE__*/React.createElement("div", {
      ref: popoverRef
    }, /*#__PURE__*/React.createElement(Popover.Title, {
      as: "h2",
      className: "d-flex justify-content-between p-0 m-4 border-0 text-primary-500 font-size-18 line-height-24"
    }, intl.formatMessage(messages.notificationTitle), /*#__PURE__*/React.createElement(Icon, {
      src: Settings,
      className: "icon-size-20",
      "data-testid": "setting-icon"
    })), /*#__PURE__*/React.createElement(Popover.Content, {
      className: "notification-content p-0"
    }, /*#__PURE__*/React.createElement(NotificationTabs, null))))
  }, /*#__PURE__*/React.createElement("div", {
    ref: buttonRef
  }, /*#__PURE__*/React.createElement(IconButton, {
    isActive: enableNotificationTray,
    alt: "notification bell icon",
    onClick: hideNotificationTray,
    src: NotificationsNone,
    iconAs: Icon,
    variant: "light",
    iconClassNames: "text-primary-500",
    className: "ml-4 mr-1 my-3 notification-button",
    "data-testid": "notification-bell-icon"
  }), (notificationCounts === null || notificationCounts === void 0 ? void 0 : notificationCounts.count) > 0 && /*#__PURE__*/React.createElement(Badge, {
    pill: true,
    variant: "danger",
    className: "font-weight-normal px-1 notification-badge",
    "data-testid": "notification-count"
  }, notificationCounts.count)));
};
export default Notifications;
//# sourceMappingURL=index.js.map