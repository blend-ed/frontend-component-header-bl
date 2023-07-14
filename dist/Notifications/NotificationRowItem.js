import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { Icon } from '@edx/paragon';
import { Link } from 'react-router-dom';
import * as timeago from 'timeago.js';
import { getIconByType } from './utils';
import { markNotificationsAsRead } from './data/thunks';
import messages from './messages';
import timeLocale from '../common/time-locale';
var NotificationRowItem = function NotificationRowItem(_ref) {
  var id = _ref.id,
    type = _ref.type,
    contentUrl = _ref.contentUrl,
    content = _ref.content,
    courseName = _ref.courseName,
    createdAt = _ref.createdAt,
    lastRead = _ref.lastRead;
  timeago.register('time-locale', timeLocale);
  var intl = useIntl();
  var dispatch = useDispatch();
  var handleMarkAsRead = useCallback(function () {
    dispatch(markNotificationsAsRead(id));
  }, [dispatch, id]);
  var _getIconByType = getIconByType(type),
    iconComponent = _getIconByType.icon,
    iconClass = _getIconByType["class"];
  return /*#__PURE__*/React.createElement(Link, {
    target: "_blank",
    className: "d-flex mb-2 align-items-center text-decoration-none",
    to: contentUrl,
    onClick: handleMarkAsRead,
    "data-testid": "notification-".concat(id)
  }, /*#__PURE__*/React.createElement(Icon, {
    src: iconComponent,
    className: "".concat(iconClass, " mr-4 notification-icon"),
    "data-testid": "notification-icon-".concat(id)
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex w-100",
    "data-testid": "notification-contents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center w-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-10px w-100 px-0 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "line-height-24 text-gray-700 mb-2 notification-item-content overflow-hidden content"
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: content
    },
    "data-testid": "notification-content-".concat(id)
  }), /*#__PURE__*/React.createElement("div", {
    className: "py-0 d-flex"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-size-12 text-gray-500 line-height-20"
  }, /*#__PURE__*/React.createElement("span", {
    "data-testid": "notification-course-".concat(id)
  }, courseName), /*#__PURE__*/React.createElement("span", {
    className: "text-light-700 px-1.5"
  }, intl.formatMessage(messages.fullStop)), /*#__PURE__*/React.createElement("span", {
    "data-testid": "notification-created-date-".concat(id)
  }, " ", timeago.format(createdAt, 'time-locale'))))), !lastRead && /*#__PURE__*/React.createElement("div", {
    className: "d-flex py-1.5 px-1.5 ml-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-brand-500 rounded unread",
    "data-testid": "unread-notification-".concat(id)
  })))));
};
NotificationRowItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  contentUrl: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  courseName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  lastRead: PropTypes.string.isRequired
};
export default /*#__PURE__*/React.memo(NotificationRowItem);
//# sourceMappingURL=NotificationRowItem.js.map