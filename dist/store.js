import { configureStore } from '@reduxjs/toolkit';
import { notificationsReducer } from './Notifications/data';
export function initializeStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  return configureStore({
    reducer: {
      notifications: notificationsReducer
    },
    preloadedState: preloadedState
  });
}
var store = initializeStore();
export default store;
//# sourceMappingURL=store.js.map