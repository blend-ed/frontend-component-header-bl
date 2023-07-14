import React, { useCallback, useMemo } from 'react';
import { Button, Spinner } from '@edx/paragon';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from '@edx/frontend-platform/i18n';
import isEmpty from 'lodash/isEmpty';
import messages from './messages';
import NotificationRowItem from './NotificationRowItem';
import { markAllNotificationsAsRead } from './data/thunks';
import { selectNotificationsByIds, selectPaginationData, selectSelectedAppName, selectNotificationStatus } from './data/selectors';
import { splitNotificationsByTime } from './utils';
import { updatePaginationRequest, RequestStatus } from './data/slice';
var NotificationSections = function NotificationSections() {
  var intl = useIntl();
  var dispatch = useDispatch();
  var selectedAppName = useSelector(selectSelectedAppName());
  var notificationRequestStatus = useSelector(selectNotificationStatus());
  var notifications = useSelector(selectNotificationsByIds(selectedAppName));
  var _useSelector = useSelector(selectPaginationData()),
    hasMorePages = _useSelector.hasMorePages;
  var _useMemo = useMemo(function () {
      return splitNotificationsByTime(notifications);
    }, [notifications]),
    _useMemo$today = _useMemo.today,
    today = _useMemo$today === void 0 ? [] : _useMemo$today,
    _useMemo$earlier = _useMemo.earlier,
    earlier = _useMemo$earlier === void 0 ? [] : _useMemo$earlier;
  var handleMarkAllAsRead = useCallback(function () {
    dispatch(markAllNotificationsAsRead(selectedAppName));
  }, [dispatch, selectedAppName]);
  var updatePagination = useCallback(function () {
    dispatch(updatePaginationRequest());
  }, [dispatch]);
  var renderNotificationSection = function renderNotificationSection(section, items) {
    if (isEmpty(items)) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "pb-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "d-flex justify-content-between align-items-center py-10px mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500 line-height-10"
    }, section === 'today' && intl.formatMessage(messages.notificationTodayHeading), section === 'earlier' && intl.formatMessage(messages.notificationEarlierHeading)), (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0 && (section === 'earlier' ? today.length === 0 : true) && /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      className: "text-info-500 font-size-14 line-height-10 text-decoration-none p-0 border-0",
      onClick: handleMarkAllAsRead,
      "data-testid": "mark-all-read"
    }, intl.formatMessage(messages.notificationMarkAsRead))), items.map(function (notification) {
      return /*#__PURE__*/React.createElement(NotificationRowItem, {
        key: notification.id,
        id: notification.id,
        type: notification.type,
        contentUrl: notification.contentUrl,
        content: notification.content,
        courseName: notification.courseName,
        createdAt: notification.createdAt,
        lastRead: notification.lastRead
      });
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-4 px-4",
    "data-testid": "notification-tray-section"
  }, renderNotificationSection('today', today), renderNotificationSection('earlier', earlier), hasMorePages && notificationRequestStatus === RequestStatus.IN_PROGRESS ? /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center p-4"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    variant: "primary",
    size: "lg"
  })) : hasMorePages && notificationRequestStatus === RequestStatus.SUCCESSFUL && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    className: "w-100 bg-primary-500",
    onClick: updatePagination,
    "data-testid": "load-more-notifications"
  }, intl.formatMessage(messages.loadMoreNotifications)));
};
export default /*#__PURE__*/React.memo(NotificationSections);
//# sourceMappingURL=NotificationSections.js.map