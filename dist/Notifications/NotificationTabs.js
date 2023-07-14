/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs } from '@edx/paragon';
import NotificationSections from './NotificationSections';
import { fetchNotificationList, markNotificationsAsSeen } from './data/thunks';
import { selectNotificationTabs, selectNotificationTabsCount, selectPaginationData, selectSelectedAppName } from './data/selectors';
import { updateAppNameRequest } from './data/slice';
var NotificationTabs = function NotificationTabs() {
  var dispatch = useDispatch();
  var selectedAppName = useSelector(selectSelectedAppName());
  var notificationUnseenCounts = useSelector(selectNotificationTabsCount());
  var notificationTabs = useSelector(selectNotificationTabs());
  var _useSelector = useSelector(selectPaginationData()),
    currentPage = _useSelector.currentPage;
  useEffect(function () {
    dispatch(fetchNotificationList({
      appName: selectedAppName,
      page: currentPage
    }));
    if (selectedAppName) {
      dispatch(markNotificationsAsSeen(selectedAppName));
    }
  }, [currentPage, selectedAppName]);
  var handleActiveTab = useCallback(function (appName) {
    dispatch(updateAppNameRequest({
      appName: appName
    }));
  }, []);
  var tabArray = useMemo(function () {
    return notificationTabs === null || notificationTabs === void 0 ? void 0 : notificationTabs.map(function (appName) {
      return /*#__PURE__*/React.createElement(Tab, {
        key: appName,
        eventKey: appName,
        title: appName,
        notification: notificationUnseenCounts[appName],
        tabClassName: "pt-0 pb-10px px-2.5 d-flex border-top-0 mb-0 align-items-center line-height-24 text-capitalize",
        "data-testid": "notification-tab-".concat(appName)
      }, appName === selectedAppName && /*#__PURE__*/React.createElement(NotificationSections, null));
    });
  }, [notificationUnseenCounts, selectedAppName, notificationTabs]);
  return /*#__PURE__*/React.createElement(Tabs, {
    variant: "tabs",
    defaultActiveKey: selectedAppName,
    onSelect: handleActiveTab,
    className: "px-2.5 text-primary-500"
  }, tabArray);
};
export default /*#__PURE__*/React.memo(NotificationTabs);
//# sourceMappingURL=NotificationTabs.js.map