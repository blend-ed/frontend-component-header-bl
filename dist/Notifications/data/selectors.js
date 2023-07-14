import { createSelector } from '@reduxjs/toolkit';
export var selectNotificationStatus = function selectNotificationStatus() {
  return function (state) {
    return state.notifications.notificationStatus;
  };
};
export var selectNotificationTabsCount = function selectNotificationTabsCount() {
  return function (state) {
    return state.notifications.tabsCount;
  };
};
export var selectNotificationTabs = function selectNotificationTabs() {
  return function (state) {
    return state.notifications.appsId;
  };
};
export var selectSelectedAppNotificationIds = function selectSelectedAppNotificationIds(appName) {
  return function (state) {
    var _state$notifications$;
    return (_state$notifications$ = state.notifications.apps[appName]) !== null && _state$notifications$ !== void 0 ? _state$notifications$ : [];
  };
};
export var selectShowNotificationTray = function selectShowNotificationTray() {
  return function (state) {
    return state.notifications.showNotificationsTray;
  };
};
export var selectNotifications = function selectNotifications() {
  return function (state) {
    return state.notifications.notifications;
  };
};
export var selectNotificationsByIds = function selectNotificationsByIds(appName) {
  return createSelector(selectNotifications(), selectSelectedAppNotificationIds(appName), function (notifications, notificationIds) {
    return notificationIds.map(function (notificationId) {
      return notifications[notificationId];
    }) || [];
  });
};
export var selectSelectedAppName = function selectSelectedAppName() {
  return function (state) {
    return state.notifications.appName;
  };
};
export var selectPaginationData = function selectPaginationData() {
  return function (state) {
    return state.notifications.pagination;
  };
};
//# sourceMappingURL=selectors.js.map