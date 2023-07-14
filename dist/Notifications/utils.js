import { CheckCircle, HelpOutline, QuestionAnswerOutline, Verified, Report, EditOutline, ThumbUpOutline, PostOutline } from '@edx/paragon/icons';

/**
 * Get HTTP Error status from generic error.
 * @param error Generic caught error.
 * @returns {number|null}
 */
export var getHttpErrorStatus = function getHttpErrorStatus(error) {
  var _error$customAttribut, _error$customAttribut2, _error$response;
  return (_error$customAttribut = error === null || error === void 0 ? void 0 : (_error$customAttribut2 = error.customAttributes) === null || _error$customAttribut2 === void 0 ? void 0 : _error$customAttribut2.httpErrorStatus) !== null && _error$customAttribut !== void 0 ? _error$customAttribut : error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status;
};
export var splitNotificationsByTime = function splitNotificationsByTime(notificationList) {
  var splittedData = [];
  if (notificationList.length > 0) {
    var currentTime = Date.now();
    var twentyFourHoursAgo = currentTime - 24 * 60 * 60 * 1000;
    splittedData = notificationList.reduce(function (result, notification) {
      if (notification) {
        var objectTime = new Date(notification.createdAt).getTime();
        if (objectTime >= twentyFourHoursAgo && objectTime <= currentTime) {
          result.today.push(notification);
        } else {
          result.earlier.push(notification);
        }
      }
      return result;
    }, {
      today: [],
      earlier: []
    });
  }
  var _splittedData = splittedData,
    today = _splittedData.today,
    earlier = _splittedData.earlier;
  return {
    today: today,
    earlier: earlier
  };
};
export var getIconByType = function getIconByType(type) {
  var iconMap = {
    post: {
      icon: PostOutline,
      "class": 'text-primary-500'
    },
    help: {
      icon: HelpOutline,
      "class": 'text-primary-500'
    },
    respond: {
      icon: QuestionAnswerOutline,
      "class": 'text-primary-500'
    },
    comment: {
      icon: QuestionAnswerOutline,
      "class": 'text-primary-500'
    },
    question: {
      icon: QuestionAnswerOutline,
      "class": 'text-primary-500'
    },
    answer: {
      icon: CheckCircle,
      "class": 'text-success'
    },
    endorsed: {
      icon: Verified,
      "class": 'text-primary-500'
    },
    reported: {
      icon: Report,
      "class": 'text-danger-500'
    },
    postLiked: {
      icon: ThumbUpOutline,
      "class": 'text-primary-500'
    },
    commentLiked: {
      icon: ThumbUpOutline,
      "class": 'text-primary-500'
    },
    edited: {
      icon: EditOutline,
      "class": 'text-primary-500'
    }
  };
  return iconMap[type] || {
    icon: PostOutline,
    "class": 'text-primary-500'
  };
};
//# sourceMappingURL=utils.js.map